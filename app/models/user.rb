class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :appeals, dependent: :destroy

  has_many :groups

  has_many :messages

  mount_uploader :main_image, ImageUploader

  mount_uploader :sub_image1, ImageUploader

  mount_uploader :sub_image2, ImageUploader

  mount_uploader :sub_image3, ImageUploader

end

