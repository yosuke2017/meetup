class Group < ApplicationRecord
  has_many :messages
  belongs_to :appeal
  belongs_to :user

  def last_message
    if @message = self.messages.first
      if @message.body.present?
        return @message.body
      else
        return "画像が送信されました"
      end
    else
      return "まだメッセージはありません"
    end
  end

end

