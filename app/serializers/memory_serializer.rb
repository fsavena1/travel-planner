class MemorySerializer < ActiveModel::Serializer
  attributes :id, :image, :caption, :activity_id
  belongs_to :activity
end
