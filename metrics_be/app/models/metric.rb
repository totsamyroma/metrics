# frozen_string_literal: true

class Metric < ApplicationRecord
  # Adding paranoid in case we'd want to recover data after deletion.
  acts_as_paranoid

  belongs_to :user

  # CAUTION: dependent destroy is added for simplicity, but could cause performance issues if there are many metrics.
  # In a real-world scenario dependent shouuld be marked for deletion and the actual deletion should be done in the background.
  has_many :values, class_name: "MetricValue", dependent: :delete_all

  # CAUTION: string and boolean are not supported by frontend yet.
  enum :value_type, %i[integer float string boolean]

  validates :name, presence: true
end
