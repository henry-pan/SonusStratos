class Comment < ApplicationRecord
  validates :comment_body, :commenter_id, :track_id, presence: true
  validates :comment_body, length: { minimum: 1 }

  belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :track,
    foreign_key: :track_id,
    class_name: :Track

end