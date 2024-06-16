import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_SCHEMA || 'http://localhost:3000/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/gql/': {
      schema: './schema.graphql',
      plugins: ['typescript', 'typescript-operations'],
      preset: 'client',
      presetConfig: {
          gqlTagName: 'gql',
      }
    }
  }
};

export default config;
