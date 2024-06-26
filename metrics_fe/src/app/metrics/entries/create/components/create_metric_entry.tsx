"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "../../../../../gql/";
import Client from "../../../../../gql/client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import moment from "moment";

const CREATE_INTEGER_METRIC_ENTRY = gql`
  mutation CreateIntegerMetricEntry(
    $metricId: ID!
    $type: String!
    $value: String!
    $timestamp: ISO8601DateTime!
  ) {
    createMetricValue(
      input: {
        metricId: $metricId
        type: $type
        value: $value
        timestamp: $timestamp
      }
    ) {
      value {
        ... on IntegerValue {
          value
          timestamp
        }
      }
      errors
    }
  }
`;

const CREATE_FLOAT_METRIC_ENTRY = gql`
  mutation CreateFloatMetricEntry(
    $metricId: ID!
    $type: String!
    $value: String!
    $timestamp: ISO8601DateTime!
  ) {
    createMetricValue(
      input: {
        metricId: $metricId
        type: $type
        value: $value
        timestamp: $timestamp
      }
    ) {
      value {
        ... on FloatValue {
          value
          timestamp
        }
      }
      errors
    }
  }
`;

const ValueTypeMutations = {
  integer: CREATE_INTEGER_METRIC_ENTRY,
  float: CREATE_FLOAT_METRIC_ENTRY,
};

const CreateMetricComponent = ({ metricId, valueType }) => {
  const [value, setValue] = useState("");
  const [timestamp, setTimestamp] = useState(now(getLocalTimeZone()));
  const [createMetricEntry, { data, loading, error }] = useMutation(
    ValueTypeMutations[valueType],
    { client: Client },
  );

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleTimestampChange = (date) => {
    setTimestamp(date);
  };

  const handleCreateMetricEntry = () => {
    const t = moment(timestamp).format("YYYY-MM-DDTHH:mm:ssZ");
    createMetricEntry({
      variables: { metricId, type: valueType, value, timestamp: t },
    });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row gap-4">
        <Input
          radius="none"
          size="sm"
          className="max-w-xs"
          label="Entry Value"
          value={value}
          onChange={handleValueChange}
        />
        <DatePicker
          radius="none"
          size="sm"
          label="Entry Timestamp"
          variant="bordered"
          hideTimeZone
          showMonthAndYearPickers
          defaultValue={timestamp}
          onChange={handleTimestampChange}
        />
        <Button
          radius="none"
          size="lg"
          onClick={handleCreateMetricEntry}
          disabled={loading}
          isLoading={loading}
        >
          Save
        </Button>
      </div>
      <div>
        {data?.createMetricValue?.value && (
          <p>
            Metric Entry created with {data.createMetricValue.value.value} at{" "}
            {data.createMetricValue.value.timestamp}
          </p>
        )}
        {data?.createMetricValue?.errors[0] && (
          <p>Errors: {data.createMetricValue.errors}</p>
        )}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default CreateMetricComponent;
