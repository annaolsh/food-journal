# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Journal.create([{food_name: 'Pancakes', cuisine: 'French', calories: '150', date: '', user_id: '1', }])

User.create([{name: "Anna"}, {name: "Daniel"}, {name: "Sylvee"}, {name: "Tina"}])
Food.create([
  {name: "Pizza"},
  {name: "BiBimBap"},
  {name: "Ice cream"},
  {name: "Tuna sandwich"},
  {name: "Potato salad"},
  {name: "French fries"},
  {name: "Borscht"},
  {name: "Korean BBQ"}
])
UserFood.create([
  {user_id: 1, food_id: 1, calories: 10, date: "2017-05-04"},
  {user_id: 1, food_id: 2, calories: 30, date: "2017-05-05"},
  {user_id: 1, food_id: 3, calories: 175, date: "2017-05-06"},
  {user_id: 1, food_id: 4, calories: 250, date: "2017-05-07"},
  {user_id: 1, food_id: 5, calories: 175, date: "2017-05-08"},
  {user_id: 1, food_id: 6, calories: 65, date: "2017-05-09"},
  {user_id: 1, food_id: 7, calories: 30, date: "2017-05-10"},
  {user_id: 1, food_id: 8, calories: 95, date: "2017-05-11"},
])
