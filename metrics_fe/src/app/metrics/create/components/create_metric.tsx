"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "../../../../gql/";
import Client from "../../../../gql/client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";

const CREATE_METRIC = gql`
  mutation CreateMetric($userId: ID!, $name: String!, $valueType: String!) {
    createMetric(
      input: { userId: $userId, name: $name, valueType: $valueType }
    ) {
      metric {
        id
        name
        valueType
      }
    }
  }
`;

const CreateMetricComponent = ({ userId }) => {
  const defaultValueType = "integer";
  const [metricName, setMetricName] = useState("");
  const [valueType, setValueType] = useState("integer");
  const [createMetric, { data, loading, error }] = useMutation(CREATE_METRIC, {
    client: Client,
  });

  const handleValueTypeChange = (e) => {
    setValueType(e.target.value);
  };
  const handleCreateMetric = () => {
    createMetric({ variables: { userId, name: metricName, valueType } });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row gap-4">
        <Input
          radius="none"
          size="sm"
          label="Metric Name"
          value={metricName}
          onChange={(e) => setMetricName(e.target.value)}
        />
        <Select
          className="max-w-xs"
          size="sm"
          radius="none"
          label="Metric values type"
          defaultSelectedKeys={[defaultValueType]}
          onChange={handleValueTypeChange}
        >
          <SelectItem key="integer">Integer</SelectItem>
          <SelectItem key="float">Float</SelectItem>
        </Select>
        <Button
          radius="none"
          size="lg"
          onClick={handleCreateMetric}
          loading
          disabled={loading}
        >
          Save
        </Button>
      </div>
      <div>
        {data && <p>Metric created with ID: {data.createMetric.metric.id}</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default CreateMetricComponent;
