@users.each do |user|
  json.set! user.id do
    json.questions user.questions
    json.responses user.responses
    json.id user.id
    json.username user.username
    json.indoorsoutdoors user.indoorsoutdoors
    json.discipline user.discipline
    json.age user.age
    json.location user.location
    json.image_url asset_path(user.image.url)
  end
end
