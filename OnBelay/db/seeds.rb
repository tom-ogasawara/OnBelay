# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Like.destroy_all
Message.destroy_all
Conversation.destroy_all
Question.destroy_all
Answer.destroy_all
Response.destroy_all


demo_user = User.create(
username: "chrissharma",
password: "password",
discipline: "lead",
indoorsoutdoors: "outdoors",
email: "chris@sharma.com",
age: 35,
location: "95060",
summary: "Venga",
image: File.open("#{Rails.root}/app/assets/images/sharma_user_image.jpg")
)

q1 = Question.create(title: "How long have you been climbing?")

a1 = Answer.create(question_id: q1.id, body: "0-1 years", order: 1)
a2 = Answer.create(question_id: q1.id, body: "2-4 years", order: 2)
a2 = Answer.create(question_id: q1.id, body: "5+ years", order: 2)

q2 = Question.create(title: "Do you know how to lead climb?")

a3 = Answer.create(question_id: q2.id, body: "Yes", order: 1)
a4 = Answer.create(question_id: q2.id, body: "No", order: 2)

# q3 = Question.create(title: "?")
