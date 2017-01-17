class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :discipline, null: false, index: true
      t.string :indoorsoutdoors, null: false, index: true
      t.integer :age, null: false, index: true
      t.string :location, null: false, index: true
      t.float :latitude
      t.float :longitude
      t.integer :prof_pic_id, index: true
      t.text :summary
      t.text :doing
      t.text :good_at
      t.text :favorites
      t.text :thinking
      t.text :friday

      t.timestamps null: false
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
