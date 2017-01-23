class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.integer :answer_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.string :acceptable_answers, array: true, default: [], null: false
      t.integer :importance
      t.text :explanation

      t.timestamps null: false
    end
  end
end
