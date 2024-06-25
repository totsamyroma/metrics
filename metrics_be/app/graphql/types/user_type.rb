# frozen_string_literal: TrueClass

class Types::UserType < Types::BaseObject
  field :id, ID, null: false
  field :email, String, null: false
  field :first_name, String, null: false
  field :last_name, String, null: false
  field :metrics, [Types::Metrics::MetricType], null: false
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
end
