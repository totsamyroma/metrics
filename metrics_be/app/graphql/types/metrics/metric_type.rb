# frozen_string_literal: TrueClass

class Types::Metrics::MetricType < Types::BaseObject
  field :id, ID, null: false
  field :user_id, ID, null: false
  field :name, String, null: false
  field :user, Types::UserType, null: false
  field :value_type, String, null: false
  field :values, Types::Metrics::MetricValueType.connection_type, null: false
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

  def values
    object.values.order(timestamp: :asc)
  end
end
