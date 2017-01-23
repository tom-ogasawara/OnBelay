class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.integer :question_id, null: false, index: true
      t.integer :order, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
