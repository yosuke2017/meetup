json.id @user.id
json.user current_user
json.avatar @user.avatar.url(:medium)
json.sub_image1 @user.sub_image1
json.sub_image2 @user.sub_image2
json.sub_image3 @user.sub_image3

