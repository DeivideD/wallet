# frozen_string_literal: true

class MonetaryFund < ApplicationRecord
  belongs_to :type_fund

  validates :name, presence: true
end
