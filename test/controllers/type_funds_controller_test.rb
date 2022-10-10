# frozen_string_literal: true

require 'test_helper'

class TypeFundsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @type_fund = type_funds(:one)
  end

  test 'should get index' do
    get type_funds_url, as: :json
    assert_response :success
  end

  test 'should create type_fund' do
    assert_difference('TypeFund.count') do
      post type_funds_url, params: { type_fund: { initials: @type_fund.initials, name: @type_fund.name } }, as: :json
    end

    assert_response 201
  end

  test 'should show type_fund' do
    get type_fund_url(@type_fund), as: :json
    assert_response :success
  end

  test 'should update type_fund' do
    patch type_fund_url(@type_fund), params: { type_fund: { initials: @type_fund.initials, name: @type_fund.name } },
                                     as: :json
    assert_response 200
  end

  test 'should destroy type_fund' do
    assert_difference('TypeFund.count', -1) do
      delete type_fund_url(@type_fund), as: :json
    end

    assert_response 204
  end
end
