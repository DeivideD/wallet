# frozen_string_literal: true

require 'test_helper'

class MonetaryFundsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @monetary_fund = monetary_funds(:one)
  end

  test 'should get index' do
    get monetary_funds_url, as: :json
    assert_response :success
  end

  test 'should create monetary_fund' do
    assert_difference('MonetaryFund.count') do
      post monetary_funds_url,
           params: { monetary_fund: { category: @monetary_fund.category, name: @monetary_fund.name, type_fund_id: @monetary_fund.type_fund_id } }, as: :json
    end

    assert_response 201
  end

  test 'should show monetary_fund' do
    get monetary_fund_url(@monetary_fund), as: :json
    assert_response :success
  end

  test 'should update monetary_fund' do
    patch monetary_fund_url(@monetary_fund),
          params: { monetary_fund: { category: @monetary_fund.category, name: @monetary_fund.name, type_fund_id: @monetary_fund.type_fund_id } }, as: :json
    assert_response 200
  end

  test 'should destroy monetary_fund' do
    assert_difference('MonetaryFund.count', -1) do
      delete monetary_fund_url(@monetary_fund), as: :json
    end

    assert_response 204
  end
end
