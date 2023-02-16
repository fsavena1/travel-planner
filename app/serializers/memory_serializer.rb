class MemorySerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :image, :caption, :activity_id
  belongs_to :activity

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end 

end
