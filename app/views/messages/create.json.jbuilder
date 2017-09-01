json.id @message.id
json.body @message.body
json.user_name @message.user.nickname
json.image @message.image.url(:message_image)
json.created_time @message.created_at.strftime("%Y/%m/%d %H:%M")
json.current_user_id current_user.id
json.message_user_id @message.user_id

