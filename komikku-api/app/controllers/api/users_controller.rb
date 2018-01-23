class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render '/api/users/show'
        else
            render json: @users.errors.full_messages, status: 401
        end
    end

    private

    def users_params
        params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
    end
end
