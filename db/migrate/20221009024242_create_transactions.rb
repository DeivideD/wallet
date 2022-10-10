# frozen_string_literal: true

class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.references :monetary_fund, null: false, foreign_key: true
      t.numeric :quantity
      t.numeric :price

      t.timestamps
    end
  end
end
