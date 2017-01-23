class RenameLatLng < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :latitude, :lat
    rename_column :users, :longitude, :lng
  end
end
