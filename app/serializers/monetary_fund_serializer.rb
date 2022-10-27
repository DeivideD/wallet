# frozen_string_literal: true

class MonetaryFundSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :quantity
  belongs_to :type_fund
end
