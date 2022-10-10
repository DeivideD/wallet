# frozen_string_literal: true

class TransactionSerializer < ActiveModel::Serializer
  attributes :id
  attributes :monetary_fund
  attributes :quantity
  attributes :price
end
