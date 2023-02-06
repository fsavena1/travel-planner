class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :destination
      t.string :image
      t.string :date_start
      t.string :date_end
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
