class RemoveColumnsFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :doing

    add_column :users, :location, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :discipline, :string, null: false
    add_column :users, :indoorsoutdoors, :string, null: false
  end
end
