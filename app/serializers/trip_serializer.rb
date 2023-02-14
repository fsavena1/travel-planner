class TripSerializer < ActiveModel::Serializer
  attributes :id, :destination, :image, :date_start, :date_end, :latitude, :longitude
  has_one :user
  has_many :activities
  has_many :memories

  
end
