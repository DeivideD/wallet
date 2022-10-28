# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_221_026_111_730) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'monetary_funds', force: :cascade do |t|
    t.string 'name'
    t.bigint 'type_fund_id', null: false
    t.string 'category'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.decimal 'entrance_price'
    t.decimal 'quantity'
    t.index ['type_fund_id'], name: 'index_monetary_funds_on_type_fund_id'
  end

  create_table 'transactions', force: :cascade do |t|
    t.bigint 'monetary_fund_id', null: false
    t.decimal 'quantity'
    t.decimal 'price'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['monetary_fund_id'], name: 'index_transactions_on_monetary_fund_id'
  end

  create_table 'type_funds', force: :cascade do |t|
    t.string 'name'
    t.string 'initials'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'yelds', force: :cascade do |t|
    t.bigint 'monetary_fund_id', null: false
    t.decimal 'total'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['monetary_fund_id'], name: 'index_yelds_on_monetary_fund_id'
  end

  add_foreign_key 'monetary_funds', 'type_funds'
  add_foreign_key 'transactions', 'monetary_funds'
  add_foreign_key 'yelds', 'monetary_funds'
end
