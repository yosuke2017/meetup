class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @appeals = @user.appeals.order('created_at DESC').limit(10)
  end

  def edit
    @user = User.find(current_user.id)
    @appeals = @user.appeals.order('created_at DESC').limit(10)
  end

  def update
    @user = User.find(current_user.id)
    if @user.update(user_params)
      redirect_to user_path(current_user)
    else
      render :edit
    end
  end

  private

    def user_params
      params.require(:user).permit(:nickname, :age, :job, :introduction, :avatar, :sub_image1, :sub_image2, :sub_image3)
    end

end
