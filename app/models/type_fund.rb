# frozen_string_literal: true

class TypeFund < ApplicationRecord
  has_many :monetary_fund

  validates :name, presence: true
  validates :name, uniqueness: { case_sensitive: false }
end
