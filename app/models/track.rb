class Track < ApplicationRecord
  validates :title, :uploader_id, presence: true
  validates :title, uniqueness: { scope: :uploader_id }, length: { minimum: 1 }

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User

end