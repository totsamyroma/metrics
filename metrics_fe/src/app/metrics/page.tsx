"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import { useQuery } from '@apollo/client';
import { gql } from '../../gql/';
import Client from '../../gql/client';

const GET_METRICS = gql(/* GraphQL */ `
  query GetMetrics($userId: ID = null){
    metrics(userId: $userId){
      user {
        fullName
      }
      id
      name
      valueType
    }
  }
`);

const MetricsPage = ({ searchParams }) => {
  // our query's result, data, is typed!
  const { loading, data } = useQuery(GET_METRICS, { client: Client, variables: { userId: searchParams.user_id }});

  return (
    <div>
      <h3>Metrics</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table radius="none" aria-label="Metrics list">
          <TableHeader>
            <TableColumn>USER</TableColumn>
            <TableColumn>METRIC NAME</TableColumn>
            <TableColumn>DATA TYPE</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {data && data.metrics.map(metric => (
              <TableRow key={metric.id}>
                  <TableCell>{metric.user.fullName}</TableCell>
                  <TableCell>{metric.name}</TableCell>
                  <TableCell>{metric.valueType}</TableCell>
                  <TableCell>
                    <Button
                      href={{ pathname: '/metrics/chart', query: { id: metric.id } }}
                      as={Link}
                      variant="solid"
                    >
                      Display on chart
                    </Button>
                    <Button
                      href={{ pathname: '/metrics/entries/create', query: { metric_id: metric.id, value_type: metric.valueType } }}
                      as={Link}
                      variant="solid"
                    >
                      Add Entry
                    </Button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default MetricsPage;
