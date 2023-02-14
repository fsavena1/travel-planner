class Trip < ApplicationRecord
  validates :destination, :date_start, :date_end, presence: true

  belongs_to :user
  has_many :activities, dependent: :destroy
  has_many :memories, through: :activities

  scope :sorted_by_start_date, -> { order(date_start: :asc) }


  def sorted_activities
    activities.order(date: :asc)
  end

end
