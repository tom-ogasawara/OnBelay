# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  from_id    :integer          not null
#  to_id      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base

  validates :from_id, :to_id, presence: true
  validates_uniqueness_of :from_id, scope: [:to_id]

  belongs_to :liker, {
    class_name: :User,
    primary_key: :id,
    foreign_key: :from_id
  }

  belongs_to :likee, {
    class_name: :User,
    primary_key: :id,
    foreign_key: :to_id
  }

end
