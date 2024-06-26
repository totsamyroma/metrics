class AddDeletedAtColumnToUserAndMetricAndMetricValues < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :deleted_at, :timestamp
    add_column :metrics, :deleted_at, :timestamp
    add_column :metric_values, :deleted_at, :timestamp
  end
end
