# frozen_string_literal: true

class AddTransactionTypeToTransactions < ActiveRecord::Migration[6.1]
  def change
    add_column :transactions, :transaction_type, :string
  end
end
