class UserwordsController < ApplicationController
    def create
        word = Userword.new(user_id: params[:user], jpname: params[:jpname], definition: params[:definition], jpsentence: params[:jpsentence], engsentence: params[:engsentence])
        user = User.find(params[:user])
        if word.save
            render json: {message: 'Word saved', userwords: user.userwords }
        else
            render json: {message: 'Word failed to create'}
        end
    end

    def destroy
        word = Userword.find(params[:wordId])
        user = User.find(params[:user])
        word.destroy
        render json: {userwords: user.userwords}

    end
end
