/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type BooleanValue = {
  __typename?: 'BooleanValue';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  metricId: Scalars['ID']['output'];
  timestamp: Scalars['ISO8601DateTime']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value: Scalars['Boolean']['output'];
};

export type FloatValue = {
  __typename?: 'FloatValue';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  metricId: Scalars['ID']['output'];
  timestamp: Scalars['ISO8601DateTime']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value: Scalars['Float']['output'];
};

export type IntegerValue = {
  __typename?: 'IntegerValue';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  metricId: Scalars['ID']['output'];
  timestamp: Scalars['ISO8601DateTime']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value: Scalars['Int']['output'];
};

export type Metric = {
  __typename?: 'Metric';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId: Scalars['ID']['output'];
  valueType: Scalars['String']['output'];
  values: MetricValueConnection;
};


export type MetricValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MetricValue = BooleanValue | FloatValue | IntegerValue | StringValue;

/** The connection type for MetricValue. */
export type MetricValueConnection = {
  __typename?: 'MetricValueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MetricValueEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MetricValue>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MetricValueEdge = {
  __typename?: 'MetricValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<MetricValue>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches a metric. */
  metric?: Maybe<Metric>;
  /** Fetche a list of metrics. */
  metrics: Array<Metric>;
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
  /** Fetches a user. */
  user?: Maybe<User>;
  /** Fetches a list of users. */
  users: Array<User>;
};


export type QueryMetricArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMetricsArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
  withValues?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
  withValues?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  withMetrics?: InputMaybe<Scalars['Boolean']['input']>;
  withValues?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringValue = {
  __typename?: 'StringValue';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  metricId: Scalars['ID']['output'];
  timestamp: Scalars['ISO8601DateTime']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  metrics: Array<Metric>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type GetFloatMetricValuesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  batchSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetFloatMetricValuesQuery = { __typename?: 'Query', metric?: { __typename?: 'Metric', id: string, name: string, valueType: string, values: { __typename?: 'MetricValueConnection', edges?: Array<{ __typename?: 'MetricValueEdge', node?: { __typename?: 'BooleanValue' } | { __typename?: 'FloatValue', value: number, timestamp: any } | { __typename?: 'IntegerValue' } | { __typename?: 'StringValue' } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } } | null };

export type GetIntegerMetricValuesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  batchSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetIntegerMetricValuesQuery = { __typename?: 'Query', metric?: { __typename?: 'Metric', id: string, name: string, valueType: string, values: { __typename?: 'MetricValueConnection', edges?: Array<{ __typename?: 'MetricValueEdge', node?: { __typename?: 'BooleanValue' } | { __typename?: 'FloatValue' } | { __typename?: 'IntegerValue', value: number, timestamp: any } | { __typename?: 'StringValue' } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } } | null };

export type GetMetricInfoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMetricInfoQuery = { __typename?: 'Query', metric?: { __typename?: 'Metric', id: string, name: string, valueType: string } | null };

export type GetMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMetricsQuery = { __typename?: 'Query', metrics: Array<{ __typename?: 'Metric', id: string, name: string, valueType: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, firstName: string, lastName: string }> };


export const GetFloatMetricValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFloatMetricValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"batchSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metric"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"valueType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"batchSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FloatValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFloatMetricValuesQuery, GetFloatMetricValuesQueryVariables>;
export const GetIntegerMetricValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIntegerMetricValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"batchSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metric"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"valueType"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"batchSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IntegerValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetIntegerMetricValuesQuery, GetIntegerMetricValuesQueryVariables>;
export const GetMetricInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMetricInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metric"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"valueType"}}]}}]}}]} as unknown as DocumentNode<GetMetricInfoQuery, GetMetricInfoQueryVariables>;
export const GetMetricsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMetrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"valueType"}}]}}]}}]} as unknown as DocumentNode<GetMetricsQuery, GetMetricsQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export type GetFloatMetricValuesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  batchSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetFloatMetricValuesQuery = { __typename?: 'Query', metric?: { __typename?: 'Metric', id: string, name: string, valueType: string, values: { __typename?: 'MetricValueConnection', edges?: Array<{ __typename?: 'MetricValueEdge', node?: { __typename?: 'BooleanValue' } | { __typename?: 'FloatValue', value: number, timestamp: any } | { __typename?: 'IntegerValue' } | { __typename?: 'StringValue' } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } } | null };

export type GetIntegerMetricValuesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  batchSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetIntegerMetricValuesQuery = { __typename?: 'Query', metric?: { __typename?: 'Metric', id: string, name: string, valueType: string, values: { __typename?: 'MetricValueConnection', edges?: Array<{ __typename?: 'MetricValueEdge', node?: { __typename?: 'BooleanValue' } | { __typename?: 'FloatValue' } | { __typename?: 'IntegerValue', value: number, timestamp: any } | { __typename?: 'StringValue' } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } } | null };

export type GetMetricInfoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMetricInfoQuery = { __typename?: 'Query', metric?: { __typename?: 'Metric', id: string, name: string, valueType: string } | null };

export type GetMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMetricsQuery = { __typename?: 'Query', metrics: Array<{ __typename?: 'Metric', id: string, name: string, valueType: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, firstName: string, lastName: string }> };
