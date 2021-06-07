json.partial! "user", user: @user

# Get all of this user's uploads
json.tracks do
  @user.tracks.each do |track|
    json.set! track.id do
      json.partial! "/api/tracks/track", track: Track.find_by(id: track.id)
    end
  end
end
