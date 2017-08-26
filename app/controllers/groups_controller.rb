class GroupsController < ApplicationController
  def index
    @group = Group.new
    @groups = Group.includes(:user).order('created_at DESC')
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to groups_path
    else
      render :new
    end
  end

  private

   def group_params
    params.require(:group).permit(:name, :outline).merge(user_id: current_user.id, country_code: params[:country_code], region_code: params[:region_code])
   end

end

