class Appeal < ApplicationRecord
  validates :name, presence: true
  validates :outline, presence: true
  validates :country_code, presence: true
  belongs_to :user
  has_many :groups
end

