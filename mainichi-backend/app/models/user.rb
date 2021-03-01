class User < ApplicationRecord
    has_many :words
    has_many :userwords
end
