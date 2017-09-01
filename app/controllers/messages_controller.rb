class MessagesController < ApplicationController

  def index
    @group = Group.find(params[:group_id])
    @message = Message.new
    @messages = Message.where(group_id: params[:group_id]).includes(:group)
  end

  def create
    @group = Group.find(params[:group_id])
    @message = Message.new(message_params)
    if @message.save
      redirect_to group_messages_path(@group)
      # respond_to do |format|
      #   format.html { redirect_to group_messages_path(@group) }
      #   format.json
      # end
    else
      flash.now[:alert] = "メッセージを入力してください"
      render :index
    end
  end


   private

    def message_params
     params.require(:message).permit(:body, :image).merge(user_id: current_user.id, group_id: params[:group_id])
    end


end

