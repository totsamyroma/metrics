# frozen_string_literal: true

class Mutations::Metrics::DeleteUser < Mutations::BaseMutation
  argument :id, ID, required: true

  field :success, GraphQL::Types::Boolean, null: false
  field :errors, [String], null: false

  def resolve(id:)
    user = User.find_by(id: id)

    return { success: false, errors: ['User not found'] } unless metric

    if user.delete
      {
        success: true,
        errors: [],
      }
    else
      {
        success: false,
        errors: user.errors.full_messages
      }
    end
  end
end
