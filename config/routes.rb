# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    resources :transactions
    resources :monetary_funds
    resources :type_funds
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
