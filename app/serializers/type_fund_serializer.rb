# frozen_string_literal: true

class TypeFundSerializer < ActiveModel::Serializer
  attributes :id, :name, :initials, :created_at
end
