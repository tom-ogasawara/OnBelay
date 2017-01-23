# == Schema Information
#
# Table name: conversations
#
#  id          :integer          not null, primary key
#  user_one_id :integer          not null
#  user_two_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Conversation < ActiveRecord::Base

  validates :user_one_id, :user_two_id, presence: true

  has_many :messages,
    -> {order "created_at ASC"},
    class_name: :Message,
    primary_key: :id,
    foreign_key: :thread_id


  belongs_to :started_user, {
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_one_id
  }

  belongs_to :received_user, {
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_two_id
  }
end
