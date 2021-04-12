class UserwordsController < ApplicationController
    def create
        word = Userword.new(user_id: params[:user], jpname: params[:jpname], definition: params[:definition], jpsentence: params[:jpsentence], engsentence: params[:engsentence])
        puts word.user
        if word.save
            user = User.find_by(id: params[:user])
            user_data = {name: user.name, id: user.id, userwords: user.userwords}
            render json: {message: 'Word saved', user: user_data}
        else
            user = User.find_by(id: params[:user])
            render json: {message: 'Word failed to create', user: user_data}
        end
    end
end
