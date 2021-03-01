class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :jpname
      t.string :definition
      t.string :jpsentence
      t.string :engsentence
      t.string :category
      t.belongs_to :user

      t.timestamps
    end
  end
end
