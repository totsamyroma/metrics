# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    field :users, [Types::UserType], null: false, resolver: Resolvers::UsersResolver, description: "Fetches a list of users." do
      argument :with_metrics, Boolean, required: false, description: "Arguement to enable preload of metrics."
      argument :with_values, Boolean, required: false, description: "Arguement to enable preload of values."
    end

    field :user, Types::UserType, null: true, resolver: Resolvers::UserResolver, description: "Fetches a user." do
      argument :id, ID, required: true, description: "User's id."
      argument :with_values, Boolean, required: false, description: "Arguement to enable preload of values."
    end

    field :metrics, [Types::Metrics::MetricType], null: false, resolver: Resolvers::MetricsResolver, description: "Fetche a list of metrics." do
      argument :user_id, ID, required: false, description: "Arguement to enable preload of values."
      argument :with_values, Boolean, required: false, description: "Arguement to enable preload of values."
    end

    field :metric, Types::Metrics::MetricType, null: true, resolver: Resolvers::MetricResolver, description: "Fetches a metric." do
      argument :id, ID, required: true, description: "Metric's id."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
