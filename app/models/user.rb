class User < ApplicationRecord
    has_many :trips 
    has_many :activities, through: :trips
    has_many :memories, through: :activities

    has_secure_password
end
