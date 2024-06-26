# frozen_string_literal: true

class Resolvers::MetricResolver < Resolvers::BaseResolver
  type Types::Metrics::MetricType, null: true

  def resolve(id:)
    # TODO: implement authorization

    Metric.find_by(id:).tap do |metric|
      context[:type] = metric.value_type
    end
  end
end
