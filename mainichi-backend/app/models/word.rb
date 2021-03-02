class Word < ApplicationRecord
    belongs_to :user

    validates :jpname, presence: true,
            length: {minimum: 2, maximum: 64},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜]/ },
            uniqueness: true

    validates :definition, presence: true,
            length: {minimum: 2, maximum: 128},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜ーa-zA-Z]/ }

    validates :jpsentence, presence: true,
            length: {minimum: 2, maximum: 128},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜]/ }

    validates :engsentence, presence: true,
            length: {minimum: 2, maximum: 128},
            format: { with: /\A[ーa-zA-Z]/ }

    validates :category, presence: true
    
    validates :romkat, presence: true,
            length: {minimum: 2, maximum: 64},
            format: { with: /\A[一-龯ぁ-ゔゞァ-・ヽヾ゛゜]/ }

end
