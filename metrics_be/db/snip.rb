def sin(rad)
  Math.sin(rad)
end

def sin_table(size = 24)
  Array.new(size) do |i|
    rad = i * Math::PI * 2 / size
    sin(rad).round(3)
  end
end

# 1 value per minute for 1 year
def gen_float_oscillation_each_minute(size = 60*24*31*12)
  user = User.find_or_create_by!(email: "foo@bar.com", first_name: "Foo", last_name: "Bar")
  metric = Metric.find_or_create_by!(name: "Float oscillations | Minutes", value_type: "float", user: user)
  sins = sin_table

  attrs = Array.new(size) do |i|
    attrs = { content: { type: metric.value_type, value: sins.first }, metric_id: metric.id, timestamp: (size - i).minutes.ago }
    sins.rotate!
    attrs
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end

# 1 value per second for 6 days
def gen_float_oscillation_each_second(size = 60*60*24*6)
  user = User.find_or_create_by!(email: "foo@bar.com", first_name: "Foo", last_name: "Bar")
  metric = Metric.find_or_create_by!(name: "Float oscillations | Seconds", value_type: "float", user: user)
  sins = sin_table


  attrs = Array.new(size) do |i|
    attrs = { content: { type: metric.value_type, value: sins.first }, metric_id: metric.id, timestamp: (size - i).seconds.ago }
    sins.rotate!
    attrs
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end


# 1 value per minute for 1 year
def gen_int_oscillation_each_minute(size = 60*24*31*12)
  user = User.find_or_create_by!(email: "foo@bar.com", first_name: "Foo", last_name: "Bar")
  metric = Metric.find_or_create_by!(name: "Integer oscillations | Minutes", value_type: "integer", user: user)
  sins = sin_table

  attrs = Array.new(size) do |i|
    attrs = { content: { type: metric.value_type, value: sins.first*180 }, metric_id: metric.id, timestamp: (size - i).minutes.ago }
    sins.rotate!
    attrs
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end

# 1 value per second for 6 days
def gen_int_oscillation_each_second(size = 60*60*24*6)
  user = User.find_or_create_by!(email: "foo@bar.com", first_name: "Foo", last_name: "Bar")
  metric = Metric.find_or_create_by!(name: "Integer oscillations | Seconds", value_type: "integer", user: user)
  sins = sin_table

  attrs = Array.new(size) do |i|
    attrs = { content: { type: metric.value_type, value: sins.first*180 }, metric_id: metric.id, timestamp: (size - i).seconds.ago }
    sins.rotate!
    attrs
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end
