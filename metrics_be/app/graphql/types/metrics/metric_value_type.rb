# frozen_string_literal: TrueClass

class Types::Metrics::MetricValueType < Types::BaseUnion
  class BaseValueType < Types::BaseObject
    field :id, ID, null: false
    field :metric_id, ID, null: false
    field :timestamp, GraphQL::Types::ISO8601DateTime, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def visible?
      false
    end
  end

  class IntegerValueType < BaseValueType
    field :value, Int, null: false
  end

  class FloatValueType < BaseValueType
    field :value, Float, null: false
  end

  class StringValueType < BaseValueType
    field :value, String, null: false
  end

  class BooleanValueType < BaseValueType
    field :value, Boolean, null: false
  end

  possible_types IntegerValueType, FloatValueType, StringValueType, BooleanValueType

  def self.resolve_type(object, _context)
    case object.type
    when "integer"
      IntegerValueType
    when "float"
      FloatValueType
    when "string"
      StringValueType
    when "boolean"
      BooleanValueType
    else
      raise "Unexpected value type: #{object.type}"
    end
  end
end
