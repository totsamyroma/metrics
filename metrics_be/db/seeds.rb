def sin(rad)
  Math.sin(rad)
end

def sin_table(size = 24)
  Array.new(size) do |i|
    rad = i * Math::PI * 2 / size
    sin(rad).round(3)
  end
end

# 1 value per second for a week
def gen_sine_oscillation_each_second(size = 60*60*24*7, name: "Sine oscillations | Seconds", user:) # seconds per minute * minutes per hour * hours per day * number of days
  metric = Metric.find_or_create_by!(name:, value_type: "float", user:)
  sins = sin_table

  attrs = Array.new(size) do |i|
    { content: { type: metric.value_type, value: sins.first }, metric_id: metric.id, timestamp: (size - i).seconds.ago }.tap { sins.rotate! }
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end

puts "START: Generating sine oscillations for 1 value per second for a week"
user = User.find_or_create_by!(email: "science@guy.com", first_name: "Science", last_name: "Guy")
gen_sine_oscillation_each_second(user: user)
puts "FINISH: Generating sine oscillations for 1 value per second for a week"

# 1 value per minute for a week
def gen_sine_oscillation_each_minute(size = 60*24*365, name: "Sine oscillations | Minutes", user:) # minutes per hour * hours per day * days per year
  metric = Metric.find_or_create_by!(name:, value_type: "float", user:)
  sins = sin_table

  attrs = Array.new(size) do |i|
    { content: { type: metric.value_type, value: sins.first }, metric_id: metric.id, timestamp: (size - i).minutes.ago }.tap { sins.rotate! }
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end

puts "START: Generating sine oscillations for 1 value per minute for a year"
user = User.find_or_create_by!(email: "science@guy.com", first_name: "Science", last_name: "Guy")
gen_sine_oscillation_each_minute(user: user)
puts "FINISH: Generating sine oscillations for 1 value per minute for a year"

def gen_beer_log(size: 365, name: "Beers a day | Cups", user:)
  metric = Metric.find_or_create_by!(name:, value_type: "integer", user:)

  attrs = Array.new(size) do |i|
    { content: { type: metric.value_type, value: rand(20) }, metric_id: metric.id, timestamp: (size - i).days.ago }
  end

  MetricValue.transaction do
    MetricValue.insert_all!(attrs)
  end
end

puts "START: Generating beer log for 1 beer a day for a year"
user = User.find_or_create_by!(email: "beer@guy.com", first_name: "Beer", last_name: "Guy")
gen_beer_log(user: user)
puts "FINISH: Generating beer log for 1 beer a day for a year"
