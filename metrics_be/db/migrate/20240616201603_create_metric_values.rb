class CreateMetricValues < ActiveRecord::Migration[7.1]
  def change
    create_table :metric_values do |t|
      t.references :metric, null: false, foreign_key: true
      t.jsonb :content, null: false, default: { type: :integer, value: 0 }

      t.timestamps
    end
  end
end
