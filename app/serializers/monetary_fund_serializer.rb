# frozen_string_literal: true

class MonetaryFundSerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  belongs_to :type_fund
end
