class YeldSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_one :monetary_fund
end
