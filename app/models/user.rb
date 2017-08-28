class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :appeals

  has_many :groups

  has_many :messages

  mount_uploader :sub_image1, ImageUploader

  mount_uploader :sub_image2, ImageUploader

  mount_uploader :sub_image3, ImageUploader

  has_attached_file :avatar,
        styles:  { medium: "376x376#", original: "340x340#", thumb: "100x100#" }
  validates_attachment_content_type :avatar,
        content_type: ["image/jpg","image/jpeg","image/png"]

end


