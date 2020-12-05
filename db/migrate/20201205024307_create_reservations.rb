class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.integer :SeatCount, default: 2, limit: 8
      t.integer :TableCount, limit: 10
      t.datetime :start_time
      t.datetime :end_time
      t.string :ResName
      t.integer :PhoneNumber

      t.timestamps
    end
  end
end
