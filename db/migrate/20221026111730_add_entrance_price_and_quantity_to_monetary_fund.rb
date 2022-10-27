# frozen_string_literal: true

class AddEntrancePriceAndQuantityToMonetaryFund < ActiveRecord::Migration[6.1]
  def change
    add_column :monetary_funds, :entrance_price, :numeric
    add_column :monetary_funds, :quantity, :numeric
  end
end
