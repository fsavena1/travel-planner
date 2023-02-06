# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting seeds"

10.times {
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        user_name: Faker::Internet.username,
        email: Faker::Internet.free_email,
        avatar: Faker::Avatar.image,
        password: "testpassword"
        )
}

puts "users seeded "

puts "seeding trips"

Trip.create(destination: "alaska" , image: "https://www.travelalaska.com/sites/default/files/2022-01/Haida-GlacierBay-GettyImages-1147753605.jpg"  , date_start: "01052021" , date_end: "01152021", user_id:rand(1..10) )
Trip.create(destination: "montana" , image: "https://www.montana.edu/about/images/bozeman-aerial.png" , date_start: "05252322" , date_end: "06052022", user_id:rand(1..10) )
Trip.create(destination: "Canada" , image: "https://www.montana.edu/about/images/bozeman-aerial.png" , date_start: "05252322" , date_end: "06052022", user_id:rand(1..10) )
Trip.create(destination: "Utah" , image: "https://www.montana.edu/about/images/bozeman-aerial.png" , date_start: "04212023" , date_end: "05212023", user_id:rand(1..10) )
Trip.create(destination: "Florida " , image: "https://www.montana.edu/about/images/bozeman-aerial.png" , date_start: "09212022" , date_end: "10102022", user_id:rand(1..10) )
Trip.create(destination: "Bahamas " , image: "https://www.montana.edu/about/images/bozeman-aerial.png" , date_start: "10102023" , date_end: "10202023", user_id:rand(1..10) )
Trip.create(destination: "Mexico " , image: "https://www.montana.edu/about/images/bozeman-aerial.png" , date_start: "11012023" , date_end: "11082023", user_id:rand(1..10) )
Trip.create(destination: "Europe" , image: "https://www.montana.edu/about/images/bozeman-aerial.png" , date_start: "5252023" , date_end: "05282023", user_id:rand(1..10) )

puts "trips seeded"

puts "seeding activities"

10.times {
    Activity.create(
        name: "trip activity",
        description: "fun stuff ",
        link: "fake link",
        date: Faker::Date.between(from: '2014-09-23', to: '2015-09-25'),
        user_id: rand(1..10),
        trip_id:rand(1..8)
    )
}

puts "activityseeded "

puts "seeding memories"


10.times {
    Memory.create(
        image: "test image ",
        caption: "test memory caption",
       
        activity_id:rand(1..10)
    )
}

puts "done seeding"