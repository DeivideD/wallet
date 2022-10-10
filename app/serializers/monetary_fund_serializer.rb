# frozen_string_literal: true

class MonetaryFundSerializer < ActiveModel::Serializer
  attributes :id
  attributes :name
  attributes :type_fund
  attributes :category
end
