class Memory < ApplicationRecord
  validates :image, presence: true

  belongs_to :activity
end
