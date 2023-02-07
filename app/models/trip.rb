class Trip < ApplicationRecord
  belongs_to :user
  has_many :activities, dependent: :destroy
  has_many :memories, through: :activities
end
