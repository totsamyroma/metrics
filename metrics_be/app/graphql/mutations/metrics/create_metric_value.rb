# frozen_string_literal: true

class Mutations::Metrics::CreateMetricValue < Mutations::BaseMutation
  argument :timestamp, GraphQL::Types::ISO8601DateTime, required: true
  argument :value, String, required: true
  argument :type, String, required: true
  argument :metric_id, ID, required: true

  field :value, Types::Metrics::MetricValueType, null: true
  field :errors, [String], null: false

  ALLOWED_TYPES = %w[integer float].freeze

  def resolve(value:, timestamp:, type:, metric_id:)
    return { value: nil, errors: ["Type is not supported yet"] } unless type.in?(ALLOWED_TYPES)

    metric = Metric.find_by(id: metric_id)

    return { value: nil, errors: ['Metric not found'] } unless metric
    return { value: nil, errors: ['Metric and Value types missmatch'] } unless metric.value_type == type

    value = case metric&.value_type
            when 'integer'
              value.to_i
            when 'float'
              value.to_f
            end

    metric_value = metric.values.build(timestamp:, content: { value:, type: })

    if metric_value.save
      {
        value: metric_value,
        errors: [],
      }
    else
      {
        value: nil,
        errors: metric.errors.full_messages
      }
    end
  end
end

