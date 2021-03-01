class Word < ApplicationRecord
    belongs_to :user

    validates :jpname, presence: true
    validates :definition, presence: true
    validates :jpsentence, presence: true
    validates :engsentence, presence: true
    validates :category, presence: true

end
