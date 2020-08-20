# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Blog.delete_all

# for demo user login
User.create!(
  username: 'demouser',
  email: 'demo@user.com',
  password: 'demouser'
)

Blog.create!(
  title: "simple text",
  body: "What a great day to be alive!",
  author_id: 1
)