# frozen_string_literal: true

class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price, :created_at, :transaction_type
  belongs_to :monetary_fund
end
