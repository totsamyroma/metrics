class Sources::MetricValues < GraphQL::Dataloader::Source
  def fetch(metric_id:)
    records = ::MetricValue.where(metric_id: metric_id).index_by(&:id)
    records.values
  end
end
