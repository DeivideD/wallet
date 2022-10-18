# frozen_string_literal: true

require 'test_helper'

class YeldsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @yeld = yelds(:one)
  end

  test 'should get index' do
    get yelds_url, as: :json
    assert_response :success
  end

  test 'should create yeld' do
    assert_difference('Yeld.count') do
      post yelds_url, params: { yeld: { monetary_funds_id: @yeld.monetary_funds_id, total: @yeld.total } }, as: :json
    end

    assert_response 201
  end

  test 'should show yeld' do
    get yeld_url(@yeld), as: :json
    assert_response :success
  end

  test 'should update yeld' do
    patch yeld_url(@yeld), params: { yeld: { monetary_funds_id: @yeld.monetary_funds_id, total: @yeld.total } },
                           as: :json
    assert_response 200
  end

  test 'should destroy yeld' do
    assert_difference('Yeld.count', -1) do
      delete yeld_url(@yeld), as: :json
    end

    assert_response 204
  end
end
