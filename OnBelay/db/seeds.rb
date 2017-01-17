# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# reset DB

User.destroy_all
Like.destroy_all
Message.destroy_all
Conversation.destroy_all
Question.destroy_all
Answer.destroy_all
Response.destroy_all

# create two demo users

demo_user_a = User.create(
  username: "chrissharma",
  password: "password",
  discipline: "lead",
  indoorsoutdoors: "outdoors",
  email: "chris@sharma.com",
  age: 35,
  location: "95060",
  summary: "Climbing is this long term, lifelong journey. It’s really important to just take your time with it and keep it fun. I’ve seen a lot of people burn out because it starts becoming this job for them. It stops being fun. For me, it’s been really important to keep it enjoyable. Listen to your motivation.",
  image: "http://res.cloudinary.com/tomogasawara/image/upload/v1484685698/sharma_user_image_de1qct.jpg"
)

demo_user_b = User.create(
  username: "nalle86",
  password: "password",
  discipline: "boulder",
  indoorsoutdoors: "outdoors",
  email: "nalle@lasportiva.com",
  age: 30,
  location: "94705",
  summary: "Waking up today I can’t help but look at the world with different eyes. Having achieved the first ascent of Burden of Dreams marks a new level in my climbing. With a handful of existing 8C+ boulders in the world, proposing 9A is the logical step.",
  image: "http://res.cloudinary.com/tomogasawara/image/upload/v1484685698/nalle_user_image_swwxsv.jpg"
)

# write questions

q1 = Question.create(title: "How long have you been climbing?")

a1 = Answer.create(question_id: q1.id, body: "0-1 years", order: 1)
a2 = Answer.create(question_id: q1.id, body: "2-4 years", order: 2)
a2 = Answer.create(question_id: q1.id, body: "5+ years", order: 2)

q2 = Question.create(title: "Do you know how to lead climb?")

a3 = Answer.create(question_id: q2.id, body: "Yes", order: 1)
a4 = Answer.create(question_id: q2.id, body: "No", order: 2)

q3 = Question.create(title: "What grade do you boulder?")

a5 = Answer.create(question_id: q3.id, body: "VB-V1 Beginner", order: 1)
a6 = Answer.create(question_id: q3.id, body: "V2-V4 Intermediate", order: 2)
a7 = Answer.create(question_id: q3.id, body: "V5-V7 Advanced", order: 3)
a8 = Answer.create(question_id: q3.id, body: "V8+", order: 4)

q4 = Question.create(title: "What grade do you climb on ropes?")

a9 = Answer.create(question_id: q4.id, body: "5.1-5.9 Beginner", order: 1)
a10 = Answer.create(question_id: q4.id, body: "5.10a-5.11a Intermediate", order: 1)
a11 = Answer.create(question_id: q4.id, body: "5.11b-5.13a Advanced", order: 1)
a12 = Answer.create(question_id: q4.id, body: "5.13+", order: 1)

q5 = Question.create(title: "When do you like to climb?")

a13 = Answer.create(question_id: q5.id, body: "In the morning", order: 1)
a14 = Answer.create(question_id: q5.id, body: "In the afternoon", order: 2)
a15 = Answer.create(question_id: q5.id, body: "In the evening", order: 3)
a16 = Answer.create(question_id: q5.id, body: "Any time", order: 4)

q6 = Question.create(title: "What days of the week do you climb?")

a17 = Answer.create(question_id: q6.id, body: "Weekdays", order: 1)
a18 = Answer.create(question_id: q6.id, body: "Weekends", order: 2)
a19 = Answer.create(question_id: q6.id, body: "All week", order: 3)

q7 = Question.create(title: "What beer do you prefer?")

a20 = Answer.create(question_id: q7.id, body: "I don't drink", order: 1)
a21 = Answer.create(question_id: q7.id, body: "Bud Light", order: 2)
a22 = Answer.create(question_id: q7.id, body: "Lagunitas", order: 3)
a23 = Answer.create(question_id: q7.id, body: "Literally anything", order: 4)

q8 = Question.create(title: "What is most important to you?")

a24 = Answer.create(question_id: q8.id, body: "Safety", order: 1)
a25 = Answer.create(question_id: q8.id, body: "Fun", order: 2)

q9 = Question.create(title: "What gym do you climb at?")

a26 = Answer.create(question_id: q9.id, body: "Brigdes", order: 1)
a27 = Answer.create(question_id: q9.id, body: "Planet Granite", order: 2)
a28 = Answer.create(question_id: q9.id, body: "Touchstone", order: 3)
a29 = Answer.create(question_id: q9.id, body: "Other", order: 4)

q10 = Question.create(title: "What is your favorite climb?")

a27 = Answer.create(question_id: q10.id, body: "The Hulk, v6", order: 1)
a28 = Answer.create(question_id: q10.id, body: "The Hulk, v6", order: 2)
a29 = Answer.create(question_id: q10.id, body: "The Hulk, v6", order: 3)

q11 = Question.create(title: "How many days do you climb each week?")

a29 = Answer.create(question_id: q11.id, body: "Less than one", order: 1)
a29 = Answer.create(question_id: q11.id, body: "One or two", order: 2)
a29 = Answer.create(question_id: q11.id, body: "Three or more", order: 3)





count = 0

Question.all.each do |question|
  answer_num = question.answers.length
  rand_answer = rand(answer_num)
  acceptable_length = rand(1..answer_num)
  importance_amounts = [1, 10, 50]
  rand_importance = rand(3)
  acceptables = []

  acceptable_length.times do |num|
    acceptables << question.answers[num].body
  end

  unless count < 10
    Response.create(
      answer_id: question.answers[rand_answer].id,
      user_id: demo_user_a.id,
      acceptable_answers: acceptables,
      importance: importance_amounts[rand_importance],
      explanation: Faker::Hipster.sentence
    )
  end

  count += 1
end


# set up user params

disciplines = ["climb", "boulder", "topRope", "lead"]
climbing_location = ["everywhere", "indoors", "outdoors"]
zips = ["96099", "96094", "96089", "96080", "96067", "96002", "95927",
  "95851", "95757", "95617", "95602", "95518", "95472", "95409", "95402",
  "95389", "95351", "95170", "95157", "95110", "95062", "95030", "95014",
  "94999", "94903", "94804", "94709", "94703", "94702", "94701", "94661",
  "94624", "94622", "94608", "94595", "94557", "94544", "94537", "94520",
  "94402", "94305", "94250", "94199", "94160", "94158", "94147", "94137",
  "94120", "94102", "94086", "94062", "94039", "94014"]

max_id = 0
total = 0

# seed users

while total < 100 do
  user = nil;

  username = Faker::Internet.user_name
  password = "password"
  indoorsoutdoors = climbing_location[rand(3)]
  discipline = disciplines[rand(4)]
  email = Faker::Internet.email
  age = rand(18..65)
  location = zips[rand(zips.length)]
  summary = Faker::Hipster.paragraph


  user = User.create(
    username: username,
    password: password,
    indoorsoutdoors: indoorsoutdoors,
    discipline: discipline,
    email: email,
    age: age,
    location: location,
    summary: summary,
    image: open("http://res.cloudinary.com/tomogasawara/image/upload/v1484685697/default_user_image_ckwjm2.png")
  )


  if user.id
    max_id = user.id if user.id > max_id
    total += 1

    Question.all.each do |question|
      answer_num = question.answers.length
      rand_answer = rand(answer_num)
      acceptable_length = rand(1..2)
      importance_amounts = [1, 10, 50]
      rand_importance = rand(3)
      acceptables = []

      acceptable_length.times do |num|
        acceptables << question.answers[num].body
      end


      Response.create(
        answer_id: question.answers[rand_answer].id,
        user_id: user.id,
        acceptable_answers: acceptables,
        importance: importance_amounts[rand_importance],
        explanation: Faker::Hipster.sentence
      )
    end
  end

end

# seed conversations

unique_conversations = []
max_convo_id = 0

while unique_conversations.length < 100 do

  rand_user_one = rand((max_id-99)..max_id)
  rand_user_two = rand((max_id-99)..max_id)

  while rand_user_two == rand_user_one
    rand_user_two = rand((max_id-99)..max_id)
  end

  if unique_conversations.length % 49 == 0
    conversation_pair = [demo_user_a.id, rand_user_two]
  elsif unique_conversations.length % 48 == 0
    conversation_pair = [rand_user_one, demo_user_a.id]
  else
    conversation_pair = [rand_user_one, rand_user_two]
  end

  unless unique_conversations.include?(conversation_pair)
    unique_conversations << conversation_pair
    conversation = Conversation.create(
      user_one_id: conversation_pair[0],
      user_two_id: conversation_pair[1]
    )
    max_convo_id = conversation.id if conversation.id > max_convo_id
  end

end

# seed 1000 messages

500.times do

  random_conversation = rand((max_convo_id-99)..max_convo_id)
  conversation = Conversation.find(random_conversation)

  if rand(2) == 1
    Message.create(
      author_id: conversation.started_user.id,
      thread_id: conversation.id,
      body: Faker::Hipster.sentence
    )
  else
    Message.create(
      author_id: conversation.received_user.id,
      thread_id: conversation.id,
      body: Faker::Hipster.sentence
    )
  end
end

conversation1 = Conversation.create(
  user_one_id: demo_user_a.id,
  user_two_id: demo_user_b.id
)

Message.create(
  author_id: demo_user_a.id,
  thread_id: conversation1.id,
  body: "Want to hit the valley this weekend?"
)

Message.create(
  author_id: demo_user_b.id,
  thread_id: conversation1.id,
  body: "Sounds good, any routes in mind?"
)

Message.create(
  author_id: demo_user_a.id,
  thread_id: conversation1.id,
  body: "I've been wanting to climb Halfdome for a while."
)
