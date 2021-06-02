json.tracks do
  @tracks.each do |track|
    json.set! track.id do
      json.partial! "track", track: track
    end
  end
end

json.users do
  @tracks.each do |track|
    json.set! track.uploader_id do
      json.partial! "/api/users/user", user: track.uploader
    end
  end
end
