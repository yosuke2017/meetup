class GroupsController < ApplicationController

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to group_messages_path(@group)
    end
  end

  def log
    @appeals = Appeal.where(user_id: current_user.id).order("created_at DESC")
    @groups = Group.includes(:messages).order("messages.created_at DESC")
  end

   private

     def group_params
      params.permit(:appeal_id, :receiver_id).merge(user_id: current_user.id)
     end

end

