# frozen_string_literal: true

class MonetaryFundsController < ApplicationController
  before_action :set_monetary_fund, only: %i[show update destroy]

  # GET /monetary_funds
  def index
    @monetary_funds = MonetaryFund.all

    render json: @monetary_funds
  end

  def show_by_type
    @monetary_funds = MonetaryFund.by_type_fund(params[:type])

    render json: @monetary_funds
  end

  # GET /monetary_funds/1
  def show
    render json: @monetary_fund
  end

  # POST /monetary_funds
  def create
    @monetary_fund = MonetaryFund.new(monetary_fund_params)

    if @monetary_fund.save
      render json: @monetary_fund, status: :created, location: @monetary_fund
    else
      render json: @monetary_fund.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /monetary_funds/1
  def update
    if @monetary_fund.update(monetary_fund_params)
      render json: @monetary_fund
    else
      render json: @monetary_fund.errors, status: :unprocessable_entity
    end
  end

  # DELETE /monetary_funds/1
  def destroy
    @monetary_fund.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_monetary_fund
    @monetary_fund = MonetaryFund.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def monetary_fund_params
    params.require(:monetary_fund).permit(:name, :type_fund_id, :category, :type)
  end
end
