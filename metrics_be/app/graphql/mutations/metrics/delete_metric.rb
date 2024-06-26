# frozen_string_literal: true

class Mutations::Metrics::DeleteMetric < Mutations::BaseMutation
  argument :id, ID, required: true

  field :success, GraphQL::Types::Boolean, null: false
  field :errors, [String], null: false

  def resolve(id:)
    metric = Metric.find_by(id: id)

    return { success: false, errors: ['Metric not found'] } unless metric

    if metric.delete
      {
        success: true,
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
