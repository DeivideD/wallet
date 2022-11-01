# frozen_string_literal: true

class MonetaryFundSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :quantity, :type_fund, :created_at
  belongs_to :type_fund
end
