class Memory < ApplicationRecord
  validates :image, presence: true

  belongs_to :activity
  has_one_attached :image
end
