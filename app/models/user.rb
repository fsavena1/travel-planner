class User < ApplicationRecord
    has_many :trips 
    has many :activities, through: :trips
    has many :memories, through: :activities

    has_secure_password
end
