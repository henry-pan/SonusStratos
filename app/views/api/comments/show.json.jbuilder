json.comment do
  json.extract! @comment, :id, :comment_body, :commenter_id, :track_id, :created_at
  json.posted time_ago_in_words(@comment.created_at)
end

json.commenter do
  json.partial! "/api/users/user", user: @comment.commenter
end
