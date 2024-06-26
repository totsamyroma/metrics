"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import Client from "../../../../gql/client";
import { debug } from "console";

const MetricValuesFetcher = ({ id, query, batchSize, children }) => {
  const [fetchInProgress, setFetchInProgress] = useState(false);
  const { loading, data, fetchMore } = useQuery(query, {
    client: Client,
    fetchPolicy: "cache-and-network",
    variables: { id, batchSize },
  });

  const loadMoreData = () => {
    const endCursor = data?.metric?.values?.pageInfo?.endCursor;
    setFetchInProgress(true);
    fetchMore({
      variables: { id, after: endCursor, batchSize },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setFetchInProgress(false);
        debugger
        if (!fetchMoreResult) return prevResult;
        return {
          ...prevResult,
          metric: {
            ...prevResult.metric,
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

  return children({ loading, data, loadMoreData, fetchInProgress });
};

export default MetricValuesFetcher;
