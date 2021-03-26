class UsersController < ApplicationController

    def create
        if params[:password] === params[:password_confirmation]
          if User.find_by(name: params[:name])
            user = User.find_by(name: params[:name])
            if user.authenticate(params[:password])
              render json: user
            else 
              render json: {message: "You done goofed."}
            end
          else
            user = User.new(name: params[:name], password: params[:password], password_confirmation: params[:password_confirmation])
            user.save
            render json: user
          end
        end
    end


end
