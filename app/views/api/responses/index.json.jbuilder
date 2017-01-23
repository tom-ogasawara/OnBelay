@responses.each do |response|
  json.set! response.id do
    json.extract! response, :answer_id, :acceptable_answers, :explanation, :question
  end
end
