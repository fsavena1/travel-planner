class Trip < ApplicationRecord
  validates :destination, :date_start, :date_end, presence: true




  belongs_to :user
  has_many :activities, dependent: :destroy
  has_many :memories, through: :activities

  scope :owned_by, -> (user) { where(user: user) }
end
