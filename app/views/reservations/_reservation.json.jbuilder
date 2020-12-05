json.extract! reservation, :id, :SeatCount, :TableCount, :start_time, :end_time, :ResName, :PhoneNumber, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
