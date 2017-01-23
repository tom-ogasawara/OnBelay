json.likes
@likes.each do |like|
  json.set! like.id do
    json.from_id like.from_id
    json.to_id like.to_id
  end
end
