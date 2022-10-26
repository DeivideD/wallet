# frozen_string_literal: true

class MonetaryFundSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :quantity, :entrnce_price
  belongs_to :type_fund
end
