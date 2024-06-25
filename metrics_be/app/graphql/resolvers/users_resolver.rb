class Resolvers::UsersResolver < Resolvers::BaseResolver
  type [Types::UserType], null: false

  def resolve(with_metrics: false, with_values: false)
    return User.includes(metrics: :values).all if with_values && with_metrics
    return User.includes(:metrics).all if with_metrics

    User.all
  end
end
