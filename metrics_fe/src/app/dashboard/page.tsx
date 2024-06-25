"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

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
      <h3>Metrics</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Table radius="none" aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>DATA TYPE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            {data && data.metrics.map(metric => (
              <TableRow key={metric.id}>
                  <TableCell>{metric.name}</TableCell>
                  <TableCell>{metric.valueType}</TableCell>
                  <TableCell>
                    <Button
                      href={{ pathname: '/dashboard/chart', query: { id: metric.id } }}
                      as={Link}
                      variant="solid"
                    >
                      Display on chart
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

export default DashboardPage;
