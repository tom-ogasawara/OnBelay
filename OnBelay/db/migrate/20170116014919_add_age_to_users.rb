class AddAgeToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :age, :integer, null: false
  end
end
