# frozen_string_literal: true

class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price
  belongs_to :monetary_fund
end