class User < ApplicationRecord
    validates :first_name, :last_name, :user_name, :email, presence: true
    validates :user_name, :email, uniqueness: true

    validates :password, length: {minimum: 4 }


    has_many :trips 
    has_many :activities, through: :trips
    has_many :memories, through: :activities

    has_secure_password
end
