class AppealsController < ApplicationController

  def index
    @appeal = Appeal.new
    @appeals = Appeal.includes(:user).order('created_at DESC')
    # @my_appeal = Appeal.where(user_id: current_user.id).last
  end

  def show
    @groups = Group.where(appeal_id: params[:id])
    @appeal = Appeal.find(params[:id])
    @group = Group.new
    group = Group.find_by(appeal_id: params[:id], user_id: current_user.id)

    if group.present?
      redirect_to group_messages_path(group)
    end

  end

  def new
    @appeal = Appeal.new
  end

  def create
    @appeal = Appeal.new(appeal_params)
    if @appeal.save
      redirect_to appeals_path
    else
      render :new
    end
  end

  def edit
    @groups = Group.where(appeal_id: params[:id])
    @appeal = Appeal.find(params[:id])
    if current_user.id != @appeal.user.id
      redirect_to appeals_path
    end
  end

  def update
    @groups = Group.where(appeal_id: params[:id])
    @appeal = Appeal.find(params[:id])
    if @appeal.update(update_params)
      redirect_to appeal_path(@appeal)
    else
      render :edit
    end
  end

  private

   def appeal_params
    params.require(:appeal).permit(:name, :outline).merge(user_id: current_user.id, country_code: params[:country_code], region_code: params[:region_code])
   end

   def update_params
    params.require(:appeal).permit(:name, :outline).merge(user_id: current_user.id)
   end

end

