class AddTypeToMetrics < ActiveRecord::Migration[7.1]
  def change
    add_column :metrics, :value_type, :integer, default: 0
  end
end
