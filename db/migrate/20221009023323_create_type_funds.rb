# frozen_string_literal: true

class CreateTypeFunds < ActiveRecord::Migration[6.1]
  def change
    create_table :type_funds do |t|
      t.string :name
      t.string :initials

      t.timestamps
    end
  end
end
