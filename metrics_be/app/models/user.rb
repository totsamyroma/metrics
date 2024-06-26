# frozen_string_literal: true

class User < ApplicationRecord
  # Adding paranoid in case we'd want to recover data after deletion.
  acts_as_paranoid

  # CAUTION: dependent destroy is added for simplicity, but could cause performance issues if there are many metrics.
  # In a real-world scenario dependent shouuld be marked for deletion and the actual deletion should be done in the background.
  has_many :metrics, dependent: :delete_all
end
