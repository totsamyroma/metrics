# frozen_string_literal: true

class Mutations::Metrics::RenameMetric < Mutations::BaseMutation
  argument :id, ID, required: true
  argument :name, String, required: true

  field :metric, Types::Metrics::MetricType, null: true
  field :errors, [String], null: false

  def resolve(id:, name:)
    metric = Metric.find_by(id: id)

    return { success: false, errors: ['Metric not found'] } unless metric

    if metric.update(name: name)
      {
        metric:,
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


