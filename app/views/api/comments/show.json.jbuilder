json.comment do
  json.extract! @comment, :id, :comment_body, :commenter_id, :track_id, :created_at
  json.posted time_ago_in_words(@comment.created_at)
end

json.commenter do
  json.extract! @comment.commenter, :id, :username
  
  if @comment.commenter.profile_pic.attached?
    json.profilePic url_for(@comment.commenter.profile_pic)
  else
    json.profilePic "https://www.henry-pan.com/seed/sonusstratos/stratos.jpg"
  end
end
