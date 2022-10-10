# frozen_string_literal: true

class CreateMonetaryFunds < ActiveRecord::Migration[6.1]
  def change
    create_table :monetary_funds do |t|
      t.string :name
      t.references :type_fund, null: false, foreign_key: true
      t.string :category

      t.timestamps
    end
  end
end
