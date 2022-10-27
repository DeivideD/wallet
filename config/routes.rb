# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    resources :yelds
    resources :transactions
    resources :monetary_funds
    resources :type_funds

    get '/monetary_funds/type/:type', to: 'monetary_funds#show_by_type'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
