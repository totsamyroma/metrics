"use client"

import { useRef, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighContrastTheme from 'highcharts/themes/high-contrast-dark';
import moment from 'moment';

HighContrastTheme(Highcharts);

const aggregateData = (series, interval) => {
  const formats = {
    raw: 'YYYY-MM-DD HH:mm:ss',
    minute: 'YYYY-MM-DD HH:mm:00',
    hour: 'YYYY-MM-DD HH:00:00',
    day: 'YYYY-MM-DD 00:00:00',
  };

  const groupedLogs = {};
  const aggregatedData = [];

  series.forEach(({ node }) => {
    const date = moment(node.timestamp).format(formats[interval]);

    if (!groupedLogs[date]) {
      groupedLogs[date] = { sum: 0, count: 0 };
    }

    groupedLogs[date].sum += node.value;
    groupedLogs[date].count += 1;
  });

  // Calculate average
  Object.keys(groupedLogs).forEach(key => {
    const avg = groupedLogs[key].sum / groupedLogs[key].count;
    aggregatedData.push([new Date(key).getTime(), avg]);
  });

  return aggregatedData;
};

const Chart = ({ data, metricName, interval, chartOptions }) => {
  const chartComponentRef = useRef(data);

  useEffect(() => {
    if (chartComponentRef.current) {
      chartComponentRef.current.chart.update({
        series: [{
          data: aggregateData(data, interval),
        }],
        rangeSelector: {
            selected: 6
        }
      });
    }
  }, [data, interval]);

  const options = {
    title: {
      text: metricName,
    },
    rangeSelector: {
      inputDateFormat: '%b %e, %Y %H:%M',
      buttons: [
        { type: 'minute', count: 5, text: '5min' },
        { type: 'hour', count: 1, text: '1h' },
        { type: 'day', count: 1, text: '1d' },
        { type: 'week', count: 1, text: '1w' },
        { type: 'month', count: 1, text: '1m' },
        { type: 'year', count: 1, text: '1y' },
        { type: 'all', text: 'All' },
      ],
      selected: 6
    },
    series: [{
      ...chartOptions,
      data: aggregateData(data, interval),
    }],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"stockChart"}
      ref={chartComponentRef}
    />
  );
};

export default Chart;

