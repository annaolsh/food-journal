class CreateJournals < ActiveRecord::Migration[5.0]
  def change
    create_table :journals do |t|
      t.string :food_name
      t.string :cuisine
      t.integer :calories
      t.date :date
      t.integer :user_id

      t.timestamps
    end
  end
end
