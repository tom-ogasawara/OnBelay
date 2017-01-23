class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :discipline, null: false
      t.string :indoorsoutdoors, null: false
      t.integer :age, null: false
      t.string :location, null: false
      t.float :latitude
      t.float :longitude
      t.integer :prof_pic_id
      t.text :summary


      t.timestamps null: false
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :indoorsoutdoors
    add_index :users, :discipline
    add_index :users, :prof_pic_id
    add_index :users, :age
    add_index :users, :location
    add_index :users, :session_token, unique: true
  end
end
