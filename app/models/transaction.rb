# frozen_string_literal: true

class Transaction < ApplicationRecord
  belongs_to :monetary_fund
end
