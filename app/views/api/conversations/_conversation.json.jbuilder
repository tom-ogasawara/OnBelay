json.conversationId conversation.id
json.started_user conversation.started_user
json.received_user conversation.received_user
json.messages do
  messages.each do |message|
    json.set! message.id do
      json.author_id message.author_id
      json.body message.body
      json.created_at message.created_at
    end
  end
end
