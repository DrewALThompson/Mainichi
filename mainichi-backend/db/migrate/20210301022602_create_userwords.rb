class CreateUserwords < ActiveRecord::Migration[6.0]
  def change
    create_table :userwords do |t|
      t.string :jpname
      t.string :definition
      t.string :sentence
      t.string :category
      t.belongs_to :user

      t.timestamps
    end
  end
end
