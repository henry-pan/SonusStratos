class Track < ApplicationRecord
  validates :title, :uploader_id, presence: true
  validates :title, uniqueness: { scope: :uploader_id }

  # Active Storage
  has_one_attached :album_art
  has_one_attached :audio_file

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :comments,
    foreign_key: :track_id,
    class_name: :Comment

end