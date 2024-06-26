# frozen_string_literal: true

class Mutations::Metrics::CreateMetric < Mutations::BaseMutation
  argument :name, String, required: true
  argument :value_type, String, required: true
  argument :user_id, ID, required: true

  field :metric, Types::Metrics::MetricType, null: false
  field :errors, [String], null: false

  def resolve(name:, value_type:, user_id:)
    metric = Metric.build(name:, value_type:, user_id:)

    if metric.save
      {
        metric: metric,
        errors: [],
      }
    else
      {
        metric: nil,
        errors: metric.errors.full_messages
      }
    end
  end
end
