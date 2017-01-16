# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  summary            :text
#  message_if         :text
#  prof_pic_id        :integer
#  latitude           :float
#  longitude          :float
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  discipline         :string           not null
#  indoorsoutdoors    :string           not null
#  location           :string           not null
#  email              :string           not null
#  age                :integer          not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
