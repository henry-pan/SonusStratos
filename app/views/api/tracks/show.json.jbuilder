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
  @track.comments.each do |comment|
    json.set! comment.commenter_id do
      user = User.find_by(id: comment.commenter_id)
      json.extract! user, :id, :username
      
      if user.profile_pic.attached?
        json.profilePic url_for(user.profile_pic)
      else
        json.profilePic "https://www.henry-pan.com/seed/sonusstratos/stratos.jpg"
      end
    end
  end
end
