/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  query GetMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on FloatValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n": types.GetMetricValuesDocument,
    "\n  query GetMetrics {\n    metrics {\n      id\n      name\n      valueType\n    }\n  }\n": types.GetMetricsDocument,
    "\n  query GetUsers {\n    users {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n": types.GetUsersDocument,
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
export function gql(source: "\n  query GetMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on FloatValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMetricValues($id: ID!, $after: String, $batchSize: Int) {\n    metric(id: $id) {\n      id\n      name\n      valueType\n      values(first: $batchSize, after: $after) {\n        edges {\n          node {\n            ... on FloatValue {\n              value\n              timestamp\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMetrics {\n    metrics {\n      id\n      name\n      valueType\n    }\n  }\n"): (typeof documents)["\n  query GetMetrics {\n    metrics {\n      id\n      name\n      valueType\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUsers {\n    users {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;