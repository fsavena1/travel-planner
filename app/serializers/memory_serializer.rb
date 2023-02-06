class MemorySerializer < ActiveModel::Serializer
  attributes :id, :image, :caption
  has_one :user
  has_one :activity
end
