class MemorySerializer < ActiveModel::Serializer
  attributes :id, :image, :caption
  has_one :activity
end
