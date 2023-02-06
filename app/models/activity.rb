class Activity < ApplicationRecord
  has_many :memories
  belongs_to :user
  belongs_to :trip
end
