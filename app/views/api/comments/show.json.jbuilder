json.comment do
  json.extract! @comment, :id, :comment_body, :commenter_id, :track_id, :created_at
end

json.commenter @comment.commenter
