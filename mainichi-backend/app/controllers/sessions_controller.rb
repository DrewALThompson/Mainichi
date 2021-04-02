class SessionsController < ApplicationController
    def create
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            render json: {name: user.name, id: user.id, userwords: user.userwords}
        elsif user && !user.authenticate(params[:password])
            render json: {message: 'Password Incorrect'}
        else
            render json: {message: "User not found."}
        end
    end
end
