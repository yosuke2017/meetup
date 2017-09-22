class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @appeals = @user.appeals.order('created_at DESC').limit(5)
  end

  def edit
    @user = User.find(current_user.id)
    @appeals = @user.appeals.order('created_at DESC').limit(10)
  end

  def update
    @user = User.find(current_user.id)
    if @user.update(user_params)
      respond_to do |format|
        format.html { redirect_to user_path(current_user) }
        format.json
      end
    else
      render :edit
    end
  end

  private
    def user_params
      params.require(:user).permit(:nickname, :introduction, :main_image, :sub_image1, :sub_image2, :sub_image3, :remove_main_image, :remove_sub_image1, :remove_sub_image2, :remove_sub_image3).merge(age: params[:age], height: params[:height], background: params[:background], job: params[:job])
    end

end
