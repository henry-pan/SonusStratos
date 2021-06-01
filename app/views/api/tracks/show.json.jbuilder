json.partial! "track", track: @track

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :comment_body, :commenter_id, :track_id, :created_at
      json.posted time_ago_in_words(comment.created_at)
    end
  end
end