# frozen_string_literal: true

class TypeFund < ApplicationRecord
  has_many :monetary_fund

  validates :name, presence: true
end
