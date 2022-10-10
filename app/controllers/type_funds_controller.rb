# frozen_string_literal: true

class TypeFundsController < ApplicationController
  before_action :set_type_fund, only: %i[show update destroy]

  # GET /type_funds
  def index
    @type_funds = TypeFund.all

    render json: @type_funds
  end

  # GET /type_funds/1
  def show
    render json: @type_fund
  end

  # POST /type_funds
  def create
    @type_fund = TypeFund.new(type_fund_params)

    if @type_fund.save
      render json: @type_fund, status: :created, location: @type_fund
    else
      render json: @type_fund.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /type_funds/1
  def update
    if @type_fund.update(type_fund_params)
      render json: @type_fund
    else
      render json: @type_fund.errors, status: :unprocessable_entity
    end
  end

  # DELETE /type_funds/1
  def destroy
    @type_fund.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_type_fund
    @type_fund = TypeFund.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def type_fund_params
    params.require(:type_fund).permit(:name, :initials)
  end
end
