/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query GetFloatMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on FloatValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n":
    types.GetFloatMetricValuesDocument,
  "\n  query GetIntegerMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on IntegerValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n":
    types.GetIntegerMetricValuesDocument,
  "\n  query GetMetricInfo($id: ID!) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n    }\n  }\n":
    types.GetMetricInfoDocument,
  "\n  mutation CreateMetric($userId: ID!, $name: String!, $valueType: String!) {\n    createMetric(\n      input: { userId: $userId, name: $name, valueType: $valueType }\n    ) {\n      metric {\n        id\n        name\n        valueType\n      }\n    }\n  }\n":
    types.CreateMetricDocument,
  "\n  mutation CreateIntegerMetricEntry(\n    $metricId: ID!\n    $type: String!\n    $value: String!\n    $timestamp: ISO8601DateTime!\n  ) {\n    createMetricValue(\n      input: {\n        metricId: $metricId\n        type: $type\n        value: $value\n        timestamp: $timestamp\n      }\n    ) {\n      value {\n        ... on IntegerValue {\n          value\n          timestamp\n        }\n      }\n      errors\n    }\n  }\n":
    types.CreateIntegerMetricEntryDocument,
  "\n  mutation CreateFloatMetricEntry(\n    $metricId: ID!\n    $type: String!\n    $value: String!\n    $timestamp: ISO8601DateTime!\n  ) {\n    createMetricValue(\n      input: {\n        metricId: $metricId\n        type: $type\n        value: $value\n        timestamp: $timestamp\n      }\n    ) {\n      value {\n        ... on FloatValue {\n          value\n          timestamp\n        }\n      }\n      errors\n    }\n  }\n":
    types.CreateFloatMetricEntryDocument,
  "\n  query GetMetrics($userId: ID = null) {\n    metrics(userId: $userId) {\n      user {\n        fullName\n      }\n      id\n      name\n      valueType\n    }\n  }\n":
    types.GetMetricsDocument,
  "\n  mutation DeleteMetric($id: ID!) {\n    deleteMetric(input: { id: $id }) {\n      success\n      errors\n    }\n  }\n":
    types.DeleteMetricDocument,
  "\n  query GetMetric($id: ID!) {\n    metric(id: $id) {\n      name\n    }\n  }\n":
    types.GetMetricDocument,
  "\n  mutation RenameMetric($id: ID!, $name: String!) {\n    renameMetric(input: { id: $id, name: $name }) {\n      metric {\n        id\n        name\n        valueType\n      }\n    }\n  }\n":
    types.RenameMetricDocument,
  "\n  query GetUsers {\n    users {\n      id\n      email\n      fullName\n    }\n  }\n":
    types.GetUsersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetFloatMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on FloatValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetFloatMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on FloatValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetIntegerMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on IntegerValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetIntegerMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on IntegerValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetMetricInfo($id: ID!) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n    }\n  }\n",
): (typeof documents)["\n  query GetMetricInfo($id: ID!) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation CreateMetric($userId: ID!, $name: String!, $valueType: String!) {\n    createMetric(\n      input: { userId: $userId, name: $name, valueType: $valueType }\n    ) {\n      metric {\n        id\n        name\n        valueType\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateMetric($userId: ID!, $name: String!, $valueType: String!) {\n    createMetric(\n      input: { userId: $userId, name: $name, valueType: $valueType }\n    ) {\n      metric {\n        id\n        name\n        valueType\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation CreateIntegerMetricEntry(\n    $metricId: ID!\n    $type: String!\n    $value: String!\n    $timestamp: ISO8601DateTime!\n  ) {\n    createMetricValue(\n      input: {\n        metricId: $metricId\n        type: $type\n        value: $value\n        timestamp: $timestamp\n      }\n    ) {\n      value {\n        ... on IntegerValue {\n          value\n          timestamp\n        }\n      }\n      errors\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateIntegerMetricEntry(\n    $metricId: ID!\n    $type: String!\n    $value: String!\n    $timestamp: ISO8601DateTime!\n  ) {\n    createMetricValue(\n      input: {\n        metricId: $metricId\n        type: $type\n        value: $value\n        timestamp: $timestamp\n      }\n    ) {\n      value {\n        ... on IntegerValue {\n          value\n          timestamp\n        }\n      }\n      errors\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation CreateFloatMetricEntry(\n    $metricId: ID!\n    $type: String!\n    $value: String!\n    $timestamp: ISO8601DateTime!\n  ) {\n    createMetricValue(\n      input: {\n        metricId: $metricId\n        type: $type\n        value: $value\n        timestamp: $timestamp\n      }\n    ) {\n      value {\n        ... on FloatValue {\n          value\n          timestamp\n        }\n      }\n      errors\n    }\n  }\n",
): (typeof documents)["\n  mutation CreateFloatMetricEntry(\n    $metricId: ID!\n    $type: String!\n    $value: String!\n    $timestamp: ISO8601DateTime!\n  ) {\n    createMetricValue(\n      input: {\n        metricId: $metricId\n        type: $type\n        value: $value\n        timestamp: $timestamp\n      }\n    ) {\n      value {\n        ... on FloatValue {\n          value\n          timestamp\n        }\n      }\n      errors\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetMetrics($userId: ID = null) {\n    metrics(userId: $userId) {\n      user {\n        fullName\n      }\n      id\n      name\n      valueType\n    }\n  }\n",
): (typeof documents)["\n  query GetMetrics($userId: ID = null) {\n    metrics(userId: $userId) {\n      user {\n        fullName\n      }\n      id\n      name\n      valueType\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation DeleteMetric($id: ID!) {\n    deleteMetric(input: { id: $id }) {\n      success\n      errors\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteMetric($id: ID!) {\n    deleteMetric(input: { id: $id }) {\n      success\n      errors\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetMetric($id: ID!) {\n    metric(id: $id) {\n      name\n    }\n  }\n",
): (typeof documents)["\n  query GetMetric($id: ID!) {\n    metric(id: $id) {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation RenameMetric($id: ID!, $name: String!) {\n    renameMetric(input: { id: $id, name: $name }) {\n      metric {\n        id\n        name\n        valueType\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation RenameMetric($id: ID!, $name: String!) {\n    renameMetric(input: { id: $id, name: $name }) {\n      metric {\n        id\n        name\n        valueType\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetUsers {\n    users {\n      id\n      email\n      fullName\n    }\n  }\n",
): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      email\n      fullName\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
