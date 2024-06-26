# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_metric, mutation: Mutations::Metrics::CreateMetric
    field :rename_metric, mutation: Mutations::Metrics::RenameMetric
    field :delete_metric, mutation: Mutations::Metrics::DeleteMetric

    field :create_metric_value, mutation: Mutations::Metrics::CreateMetricValue
  end
end
