class RootController < ApplicationController
  def home
    @greeting = Greeting.order(Arel.sql('RANDOM()')).first
    render json: @greeting.greeting
  end
end
