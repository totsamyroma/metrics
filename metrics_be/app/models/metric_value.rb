# frozen_string_literal: true

class MetricValue < ApplicationRecord
  acts_as_paranoid

  belongs_to :metric

  validate :validate_metric_value_content

  def type
    content["type"]
  end

  def value
    content["value"]
  end

  private

  def validate_metric_value_content
    errors.add(:content, "missing type") if type.nil?
    errors.add(:content, "metric type missmatch") if type != metric.value_type
    errors.add(:content, "missing value") if value.nil?
    # TODO: check value and type match
    # errors.add(:content, "value type missmatch") if value.class != type
  end
end
