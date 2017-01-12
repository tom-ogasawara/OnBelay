class AddColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :summary, :text
    add_column :users, :doing, :text
    add_column :users, :good_at, :text
    add_column :users, :favorites, :text
    add_column :users, :thinking, :text
    add_column :users, :friday, :text
    add_column :users, :message_if, :text
    add_column :users, :prof_pic_id, :integer, index: true
    add_column :users, :latitude, :float
    add_column :users, :longitude, :float
  end
end
