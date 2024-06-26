"use client";

import {
  Button,
  ButtonGroup,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";

import { useQuery, useMutation } from "@apollo/client";
import { gql } from "../../gql/";
import Client from "../../gql/client";

const GET_METRICS = gql(/* GraphQL */ `
  query GetMetrics($userId: ID = null) {
    metrics(userId: $userId) {
      user {
        fullName
      }
      id
      name
      valueType
    }
  }
`);

const DELETE_METRIC = gql(/* GraphQL */ `
  mutation DeleteMetric($id: ID!) {
    deleteMetric(input: { id: $id }) {
      success
      errors
    }
  }
`);

const MetricsPage = ({ searchParams }) => {
  const userId = searchParams.user_id;
  const { loading, data } = useQuery(GET_METRICS, {
    client: Client,
    fetchPolicy: "no-cache",
    variables: { userId },
  });
  const [deleteMetric, DeleteMetric] = useMutation(DELETE_METRIC, {
    client: Client,
    refetchQueries: [{ query: GET_METRICS, variables: { userId } }],
  });

  const handleDeleteMetric = (id) => {
    deleteMetric({ variables: { id } });
  };

  return (
    <div className="w-full flex flex-col gap-4">
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
            {data &&
              data.metrics.map((metric) => (
                <TableRow key={metric.id}>
                  <TableCell>{metric.user.fullName}</TableCell>
                  <TableCell>{metric.name}</TableCell>
                  <TableCell>{metric.valueType}</TableCell>
                  <TableCell>
                    <ButtonGroup className="flex">
                      <Button
                        href={{
                          pathname: "/metrics/chart",
                          query: { id: metric.id },
                        }}
                        as={Link}
                        variant="solid"
                      >
                        Display on chart
                      </Button>
                      <Button
                        href={{
                          pathname: "/metrics/entries/create",
                          query: {
                            metric_id: metric.id,
                            value_type: metric.valueType,
                          },
                        }}
                        as={Link}
                        variant="solid"
                      >
                        Add Entry
                      </Button>
                      <Button
                        href={{
                          pathname: "/metrics/rename",
                          query: { id: metric.id },
                        }}
                        as={Link}
                        variant="solid"
                      >
                        Rename Metric
                      </Button>
                      <Button
                        variant="solid"
                        onClick={() => {
                          handleDeleteMetric(metric.id);
                        }}
                        loadig={DeleteMetric.loading}
                      >
                        Delete Metric
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default MetricsPage;
