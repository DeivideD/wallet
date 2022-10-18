# frozen_string_literal: true

class CreateYelds < ActiveRecord::Migration[6.1]
  def change
    create_table :yelds do |t|
      t.references :monetary_fund, null: false, foreign_key: true
      t.numeric :total

      t.timestamps
    end
  end
end
