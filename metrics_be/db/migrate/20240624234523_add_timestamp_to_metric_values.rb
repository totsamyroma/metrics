class AddTimestampToMetricValues < ActiveRecord::Migration[7.1]
  def change
    add_column :metric_values, :timestamp, :timestamp
  end
end
