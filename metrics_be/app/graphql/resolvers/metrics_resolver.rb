# frozen_string_literal: true

class Resolvers::MetricsResolver < Resolvers::BaseResolver
  type [Types::Metrics::MetricType], null: false

  def resolve(user_id: nil, with_values: false)
    return resolve_user_metrics(user_id:, with_values:) if user_id

    resolve_all_metrics(with_values:)
  end

  private

  def resolve_user_metrics(user_id:, with_values:)
    return Metric.includes(:values).where(user_id: user_id) if with_values

    Metric.where(user_id: user_id)
  end

  def resolve_all_metrics(with_values:)
    return Metric.includes(:values).all if with_values

    Metric.all
  end
end
