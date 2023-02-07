class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :link, :date
  has_one :user
  has_one :trip
  has_many :memories
end
