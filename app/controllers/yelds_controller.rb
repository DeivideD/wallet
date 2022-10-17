class YeldsController < ApplicationController
  before_action :set_yeld, only: [:show, :update, :destroy]

  # GET /yelds
  def index
    @yelds = Yeld.all

    render json: @yelds
  end

  # GET /yelds/1
  def show
    render json: @yeld
  end

  # POST /yelds
  def create
    @yeld = Yeld.new(yeld_params)

    if @yeld.save
      render json: @yeld, status: :created, location: @yeld
    else
      render json: @yeld.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /yelds/1
  def update
    if @yeld.update(yeld_params)
      render json: @yeld
    else
      render json: @yeld.errors, status: :unprocessable_entity
    end
  end

  # DELETE /yelds/1
  def destroy
    @yeld.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_yeld
      @yeld = Yeld.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def yeld_params
      params.require(:yeld).permit(:monetary_funds_id, :total)
    end
end
