# frozen_string_literal: true

class MonetaryFund < ApplicationRecord
  belongs_to :type_fund

  validates :name, presence: true

  scope :by_type_fund, lambda { |type|
    joins(:type_fund).where(type_fund: { initials: type })
  }
end
