# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(user_name:"Vivek", password:"password")
Cheese.create(name:"Cheddar", user_id: 1)

99.times do
  User.create(user_name:Faker::Internet.user_name, password:"password")
end

cheeses = ["Cheddar", "Gouda", "Brie", "Pepper Jack", "Meunster", "Provolone", "Swiss", "Parmesan", "Gruyere", "Gorgonzola"]
10.times do
  Cheese.create(name:cheeses.pop, description: Faker::Company.bs, user_id: rand(1..5))
end

25.times do
  Favorite.create(user_id: rand(1..99), cheese_id:rand(1..10))
end
