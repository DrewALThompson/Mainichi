class Userword < ApplicationRecord

    validates :jpname, presence: true,
        
    validates :definition, presence: true
    validates :jpsentence, presence: true
    validates :engsentence, presence: true

end
