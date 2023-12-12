Rails.application.routes.draw do
  root 'root#home'

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index] do
        collection do
          get 'new_greeting'
        end
      end
    end
  end
end
