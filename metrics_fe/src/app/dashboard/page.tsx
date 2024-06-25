"use client"

import { useQuery } from '@apollo/client';
import { gql } from '../../gql/';
import Client from '../../gql/client';

const GET_METRICS = gql(/* GraphQL */ `
  query GetMetrics {
    metrics {
      id
      name
      valueType
    }
  }
`);

const DashboardPage = () => {
  // our query's result, data, is typed!
  const { loading, data } = useQuery(GET_METRICS, { client: Client });

  return (
    <div>
      <h3>Dashboard</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data && data.metrics.map(metric => (
              <tr>
                <td>{metric.id}</td>
                <td>{metric.name}</td>
                <td>{metric.valueType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DashboardPage;
