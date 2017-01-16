# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Conversation.destroy_all
Message.destroy_all
Question.destroy_all
Like.destroy_all
Answer.destroy_all
Response.destroy_all


demo_user = User.create(
username: "chrissharma",
password: "password",
discipline: "lead",
indoorsoutdoors: "man",
email: "chris@sharma.com",
age: 35,
location: "95060",
summary: "Venga",
image: File.open("#{Rails.root}/app/assets/images/sharma_user_image.jpg")
)
