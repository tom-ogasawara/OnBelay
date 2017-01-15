class RemoveColumnsFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :doing
    remove_column :users, :good_at
    remove_column :users, :favorites
    remove_column :users, :thinking
    remove_column :users, :friday

    add_column :users, :location, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :discipline, :string, null: false
    add_column :users, :indoorsoutdoors, :string, null: false
  end
end
