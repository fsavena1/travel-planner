class TripSerializer < ActiveModel::Serializer
  attributes :id, :destination, :image, :date_start, :date_end
  has_one :user
end
