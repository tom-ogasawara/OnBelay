# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  thread_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ActiveRecord::Base

  validates :author_id, :thread_id, :body, presence: true

  belongs_to :author, {
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
  }

  belongs_to :conversation, {
    touch: true,
    class_name: :Conversation,
    primary_key: :id,
    foreign_key: :thread_id
  }
end
