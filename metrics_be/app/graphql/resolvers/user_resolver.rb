# frozen_string_literal: true

class Resolvers::UserResolver < Resolvers::BaseResolver
  type Types::UserType, null: true

  def resolve(id:, with_values: false)
    return User.includes(metrics: :values).find_by(id:) if with_values

    User.find_by(id:)
  end
end
