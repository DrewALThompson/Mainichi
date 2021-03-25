class CreateUserwords < ActiveRecord::Migration[6.0]
  def change
    create_table :userwords do |t|
      t.string :jpname
      t.string :definition
      t.string :jpsentence
      t.string :engsentence
      t.belongs_to :user

      t.timestamps
    end
  end
end
