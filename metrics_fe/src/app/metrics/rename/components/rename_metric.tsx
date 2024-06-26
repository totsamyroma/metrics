"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { gql } from "../../../../gql/";
import Client from "../../../../gql/client";
import { Input, Button } from "@nextui-org/react";

const GET_METRIC = gql`
  query GetMetric($id: ID!) {
    metric(id: $id) {
      name
    }
  }
`;

const RENAME_METRIC = gql`
  mutation RenameMetric($id: ID!, $name: String!) {
    renameMetric(input: { id: $id, name: $name }) {
      metric {
        id
        name
        valueType
      }
    }
  }
`;

const RenameMetricComponent = ({ id }) => {
  const { data, loading } = useQuery(GET_METRIC, {
    client: Client,
    variables: { id },
  });
  const [metricName, setMetricName] = useState(data?.metric?.name || "");

  useEffect(() => {
    if (data && data.metric) {
      setMetricName(data.metric.name);
    }
  }, [data]);

  const [renameMetric, RenameMetric] = useMutation(RENAME_METRIC, {
    client: Client,
  });

  const handleNameChange = (e) => {
    setMetricName(e.target.value);
  };

  const handleRenameMetric = () => {
    renameMetric({ variables: { id, name: metricName } });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row gap-4">
        <Input
          radius="none"
          size="sm"
          label="Metric Name"
          value={metricName}
          onChange={handleNameChange}
        />
        <Button radius="none" size="lg" onClick={handleRenameMetric} disabled={loading}>
          {RenameMetric.loading ? "Creating..." : "Create Metric Entry"}
        </Button>
      </div>
      <div>
        {RenameMetric.data && (
          <p>Metric renamed to: {RenameMetric.data.renameMetric.metric.name}</p>
        )}
        {RenameMetric.error && <p>Error: {RenameMetric.error.message}</p>}
      </div>
    </div>
  );
};

export default RenameMetricComponent;
