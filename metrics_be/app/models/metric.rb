# frozen_string_literal: true

class Metric < ApplicationRecord
  belongs_to :user

  has_many :values, class_name: "MetricValue"

  enum :value_type, %i[integer float string boolean]

  validates :name, presence: true
end
