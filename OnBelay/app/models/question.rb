# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  title      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base

  validates :title, presence: true;

  has_many :answers

  has_many :responses, {
    through: :answers,
    source: :responses
  }

end
