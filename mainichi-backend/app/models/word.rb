class Word < ApplicationRecord

    validates :jpname, presence: true,
            length: {minimum: 1, maximum: 64},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜]/ },
            uniqueness: true

    validates :definition, presence: true,
            length: {minimum: 1, maximum: 128},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜ーa-zA-Z]/ }

    validates :jpsentence, presence: true,
            length: {minimum: 1, maximum: 128},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜]/ }

    validates :engsentence, presence: true,
            length: {minimum: 1, maximum: 128},
            format: { with: /\A[ーa-zA-Z]/ }

    validates :category, presence: true

end
