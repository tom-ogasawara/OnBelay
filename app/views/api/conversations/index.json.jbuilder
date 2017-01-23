json.order @conversations.map(&:id)
@conversations.each do |conversation|
  json.set! conversation.id do
    json.started_user conversation.started_user
    json.received_user conversation.received_user
    json.user_one_id conversation.user_one_id
    json.user_two_id conversation.user_two_id
    last_message = conversation.messages.last
    if last_message
      json.last_message do
        json.extract! last_message, :body
        json.created_at time_ago_in_words(last_message.created_at)
      end
    end
  end
end
