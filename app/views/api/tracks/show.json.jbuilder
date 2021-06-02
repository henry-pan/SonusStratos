json.partial! "track", track: @track

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :comment_body, :commenter_id, :track_id, :created_at
      json.posted time_ago_in_words(comment.created_at)
    end
  end
end

json.users do
  # Get uploader of the track
  json.set! @track.uploader.id do
    json.partial! "/api/users/user", user: @track.uploader
  end

  # Get everyone who commented on this track
  @track.comments.each do |comment|
    json.set! comment.commenter_id do
      json.partial! "/api/users/user", user: User.find_by(id: comment.commenter_id)
    end
  end
end
