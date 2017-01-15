class AddIndexToUsers < ActiveRecord::Migration[5.0]
  def change
    add_index :users, :session_token, unique: true
    add_index :users, :indoorsoutdoors
    add_index :users, :discipline
  end
end
