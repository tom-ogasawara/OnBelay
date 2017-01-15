# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  order       :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ActiveRecord::Base
  validates :question_id, :body, :order, presence: true

  belongs_to :question
  has_many :responses

end
