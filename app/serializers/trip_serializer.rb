class TripSerializer < ActiveModel::Serializer
  attributes :id, :destination, :image, :date_start, :date_end
  has_one :user
  has_many :activities
  has_many :memories
end
