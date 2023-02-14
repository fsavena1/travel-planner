class Activity < ApplicationRecord
  validates :name, :date,  presence: true

 

  has_many :memories
  belongs_to :user
  belongs_to :trip
end
