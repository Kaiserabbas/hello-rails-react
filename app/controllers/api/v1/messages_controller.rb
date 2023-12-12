class Api::V1::MessagesController < ApplicationController
    before_action :set_default_format

    def index
        @message = Message.order(Arel.sql('RANDOM()')).first
        render json: @message
    end
    private
    def set_default_format
        request.format = :json
    end
end
