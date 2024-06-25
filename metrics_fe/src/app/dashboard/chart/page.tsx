"use client"

import { useRef, useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighContrastTheme from 'highcharts/themes/high-contrast-dark';
import moment from 'moment';
import { useQuery } from '@apollo/client';
import { gql } from '../../../gql/';
import Client from '../../../gql/client';

HighContrastTheme(Highcharts);

const GET_METRIC_VALUES = gql(/* GraphQL */ `
  query GetMetricValues($id: ID!, $after: String, $batchSize: Int) {
    metric(id: $id) {
      id
      name
      valueType
      values(first: $batchSize, after: $after) {
        edges {
          node {
            ... on FloatValue {
              value
              timestamp
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`);

  const aggregateData = (series: [], interval: String) => {
      const formats = {
          raw: 'YYYY-MM-DD HH:mm:ss',
          minute: 'YYYY-MM-DD HH:mm:00',
          hour: 'YYYY-MM-DD HH:00:00',
          day: 'YYYY-MM-DD 00:00:00',
      }

      const groupedLogs = {}
      const aggregatedData = []

      series.forEach(({ node }) => {
          const date = moment(node.timestamp).format(formats[interval])

          if (!groupedLogs[date]) {
              groupedLogs[date] = { sum: 0, count: 0 }
          }

          groupedLogs[date].sum += node.value
          groupedLogs[date].count += 1
      })

      // Calculate average

      Object.keys(groupedLogs).forEach(key => {
          const avg = groupedLogs[key].sum / groupedLogs[key].count
          aggregatedData.push([new Date(key).getTime(), avg])
      })


      return aggregatedData;
  }

  const ChartPage = (props: HighchartsReact.Props) => {

  const id = "1";

  const [interval, setInterval] = useState("raw");
  const [batchSize, setBatchSize] = useState(1000);
  const [fetchInProgress, setFetchInProgress] = useState(false);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const { loading, data, fetchMore } = useQuery(GET_METRIC_VALUES, { client: Client, variables: { id, batchSize: batchSize}});
  const series = data?.metric?.values?.edges || []

  const options: Highcharts.Options = {
    title: {
        text: data?.metric?.name,
    },
    rangeSelector: {
      inputDateFormat: '%b %e, %Y %H:%M',
      buttons: [
      {
          type: 'minute',
          count: 5,
          text: '5min'
      },
      {
          type: 'hour',
          count: 1,
          text: '1h'
      },
      {
          type: 'day',
          count: 1,
          text: '1d'
      },
      {
          type: 'week',
          count: 1,
          text: '1w'
      },
      {
          type: 'month',
          count: 1,
          text: '1m'
      },
      {
          type: 'year',
          count: 1,
          text: '1y'
      },
      {
          type: 'all',
          text: 'All'
      }
      ]
    },
    series: [{
        type: 'spline',
        data: aggregateData(series, interval),
    }] };

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  const handleBatchSizeChange = (e) => {
    setBatchSize(+e.target.value);
  };


  const loadMoreData = () => {
    const endCursor = data?.metric?.values?.pageInfo?.endCursor;
    setFetchInProgress(true);
    fetchMore({
      variables: { id, after: endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setFetchInProgress(false);
        if (!fetchMoreResult) return prevResult;
        return {
          ...fetchMoreResult,
          metric: {
            ...fetchMoreResult.metric,
            values: {
              ...fetchMoreResult.metric.values,
              edges: [
                ...prevResult.metric.values.edges,
                ...fetchMoreResult.metric.values.edges,
              ],
            },
          },
        };
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h3>Chart</h3>
      <div id="controls">
        <div id="intervals" className="w-full flex flex-row gap-4">
          <Select size="sm" className="max-w-xs" radius="none" label="Display format" defaultSelectedKeys={[interval]} onChange={handleIntervalChange}>
            <SelectItem key="raw">Raw data (seconds)</SelectItem>
            <SelectItem key="minute">Average (minute)</SelectItem>
            <SelectItem key="hour">Average (hour)</SelectItem>
            <SelectItem key="day">Average (day)</SelectItem>
          </Select>
          <Select size="sm" className="max-w-xs" radius="none" label="Select batch size" defaultSelectedKeys={[batchSize.toString()]} onChange={handleBatchSizeChange}>
            <SelectItem key="1000">1000</SelectItem>
            <SelectItem key="1500">1500</SelectItem>
            <SelectItem key="2000">2000</SelectItem>
            <SelectItem key="2500">2500</SelectItem>
            <SelectItem key="3000">3000</SelectItem>
            <SelectItem key="3500">3500</SelectItem>
            <SelectItem key="4000">4000</SelectItem>
            <SelectItem key="4500">4500</SelectItem>
            <SelectItem key="5000">5000</SelectItem>
            <SelectItem key="10000">10000</SelectItem>
          </Select>
          <Button size="lg" className="max-w-xl" radius="none" onClick={loadMoreData} isLoading={loading || fetchInProgress} disabled={!data?.metric?.values?.pageInfo?.hasNextPage}>Load More</Button>
        </div>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"stockChart"}
        ref={chartComponentRef}
        {...props}
      />
    </div>
  );
}

export default ChartPage;

