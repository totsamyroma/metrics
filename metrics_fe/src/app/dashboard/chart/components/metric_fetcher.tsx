"use client"

import { useQuery } from '@apollo/client';
import { gql } from '../../../../gql/';
import Client from '../../../../gql/client';
import FloatChart from './float_chart';
import IntegerChart from './integer_chart';

const GET_METRIC_INFO = gql(/* GraphQL */ `
  query GetMetricInfo($id: ID!) {
    metric(id: $id) {
      id
      name
      valueType
    }
  }
`);

const MetricFetcher = ({ id }) => {
  const { loading, data, error } = useQuery(GET_METRIC_INFO, { client: Client, variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const metric = data.metric;

  if (metric.valueType === 'float') {
    return <FloatChart id={id} metricName={metric.name} />;
  }

  if (metric.valueType === 'integer') {
    return <IntegerChart id={id} metricName={metric.name} />;
  }

  return <p>Unsupported metric type</p>;
};

export default MetricFetcher;

