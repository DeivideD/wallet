# frozen_string_literal: true

class Transaction < ApplicationRecord
  belongs_to :monetary_fund

  validates :transaction_type, presence: true

  validates :transaction_type, inclusion: { in: %w[in out] }
end
