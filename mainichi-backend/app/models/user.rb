class User < ApplicationRecord
    has_many :words
    has_many :userwords

    has_secure_password

    validates :name, presence: true,
            length: { minimum: 2, maximum: 254},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜ーa-zA-Z]/ },
            uniqueness: true

    validates :password, presence: true,
            length: { minimum: 2, maximum: 254},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜ーa-zA-Z]/ }
end
