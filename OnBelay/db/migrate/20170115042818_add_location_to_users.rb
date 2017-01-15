class AddLocationToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :location, :string, null: false
    add_column :users, :email, :string, null: false

    add_index :users, :email, unique: true
    add_index :users, :location
  end
end
