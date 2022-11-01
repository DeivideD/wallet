# frozen_string_literal: true

class YeldSerializer < ActiveModel::Serializer
  attributes :id, :total, :created_at, :monetary_fund
  has_one :monetary_fund
end
