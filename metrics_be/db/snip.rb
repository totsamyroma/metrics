def sin(rad)
  Math.sin(rad)
end

def sin_table
  Array.new(24) do |i|
    rad = i * Math::PI / 12
    sin(rad)
  end
end

def gen_sin_minutes
  user = User.find_or_create_by!(email: "foo@bar.com", first_name: "Foo", last_name: "Bar")
  metric = Metric.find_or_create_by!(name: "sin_minutes", value_type: "float", user: user)
  sins = sin_table

  items = 24*60*31*12

  attrs = Array.new(items) do |i|
    attrs = { content: { type: metric.value_type, value: sins.first }, metric_id: metric.id, timestamp: (items - i).minutes.ago }
    sins.rotate!
    attrs
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end

gen_sin_minutes
