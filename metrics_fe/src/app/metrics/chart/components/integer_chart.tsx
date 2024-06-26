"use client";

import { useState } from "react";
import { gql } from "@apollo/client";
import MetricValuesFetcher from "./metric_values_fetcher";
import Chart from "./chart";
import Controls from "./controls";

const GET_INTEGER_METRIC_VALUES = gql(/* GraphQL */ `
  query GetIntegerMetricValues($id: ID!, $after: String, $batchSize: Int) {
    metric(id: $id) {
      id
      name
      valueType
      values(first: $batchSize, after: $after) {
        edges {
          node {
            ... on IntegerValue {
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

const FetchIntData = ({ id, metricName }) => {
  const [interval, setInterval] = useState("raw");
  const [batchSize, setBatchSize] = useState(1000);

  return (
    <MetricValuesFetcher
      id={id}
      query={GET_INTEGER_METRIC_VALUES}
      batchSize={batchSize}
    >
      {({ loading, data, loadMoreData, fetchInProgress }) => (
        <div className="w-full flex flex-col gap-4">
          <h3>Chart</h3>
          <Controls
            interval={interval}
            setInterval={setInterval}
            batchSize={batchSize}
            setBatchSize={setBatchSize}
            loadMoreData={loadMoreData}
            loading={loading || fetchInProgress}
            hasNextPage={data?.metric?.values?.pageInfo?.hasNextPage}
          />
          <Chart
            data={data?.metric?.values?.edges || []}
            metricName={metricName}
            interval={interval}
            chartOptions={{ step: true }}
          />
        </div>
      )}
    </MetricValuesFetcher>
  );
};

export default FetchIntData;
