json.array! @messages do |message|
  json.id message.id
  json.body message.body
  json.user_name message.user.nickname
  json.main_image message.user.main_image.url
  json.image message.image.url(:message_image)
  json.created_time message.created_at.strftime("%Y/%m/%d %H:%M")
end

