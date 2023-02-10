class Trip < ApplicationRecord
  validates :destination, :date_start, :date_end, presence: true

  belongs_to :user
  has_many :activities, dependent: :destroy
  has_many :memories, through: :activities

  scope :sorted_by_start_date, -> { order(date_start: :asc) }

  # scope :owned_by, -> (user) { where(user: user) }


  # def self.by_date(date_start, date_end)
  #   where("date_start BETWEEN ? AND ?", date_start, date_end)
  # end



end
