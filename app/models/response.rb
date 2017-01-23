# == Schema Information
#
# Table name: responses
#
#  id                 :integer          not null, primary key
#  answer_id          :integer          not null
#  user_id            :integer          not null
#  acceptable_answers :string           default("{}"), not null, is an Array
#  importance         :integer
#  explanation        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Response < ActiveRecord::Base

  belongs_to :answer

  belongs_to :user

  has_one :question, {
    through: :answer,
    source: :question
  }

end
