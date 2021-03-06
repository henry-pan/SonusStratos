class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, length: { minimum: 1, allow_nil: true }, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # Additional validation to exclude TLD-less emails
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

  attr_reader :password
  after_initialize :ensure_session_token

  # Active Storage
  has_one_attached :profile_pic

  has_many :tracks,
    foreign_key: :uploader_id,
    class_name: :Track,
    dependent: :destroy

  has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment,
    dependent: :destroy

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
