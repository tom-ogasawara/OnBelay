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

class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :age, inclusion: { in: 18..150 }
  validates :location, length: { is: 5 }

  attr_reader :password

  geocoded_by :location
  after_initialize :ensure_session_token
  after_validation :geocode, if: -> (obj) {
    obj.location.present? and obj.location_changed?
  }

  acts_as_mappable default_units: :miles,
                   distance_field_name: :distance,
                   lat_column_name: :lat,
                   lng_column_name: :lng

  has_attached_file :image, default_url: "default_user_image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :messages, {
    class_name: :Message,
    primary_key: :id,
    foreign_key: :author_id
  }

  has_many :started_conversations,
    -> {order "updated_at ASC"},
    class_name: :Conversation,
    primary_key: :id,
    foreign_key: :user_one_id


  has_many :received_conversations,
    -> {order "updated_at ASC"},
    class_name: :Conversation,
    primary_key: :id,
    foreign_key: :user_two_id


  has_many :responses

  has_many :answers, {
    through: :responses,
    source: :answer
  }

  has_many :questions, {
    through: :responses,
    source: :question
  }

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def find_users_within(miles)
    User.within(miles, origin: self)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

end
