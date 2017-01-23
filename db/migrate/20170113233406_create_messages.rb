class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false, index: true
      t.integer :thread_id, null: false, index: true
      t.text :body, null: false, index: true

      t.timestamps null: false
    end
  end 
end
