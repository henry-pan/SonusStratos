json.extract! track, :id, :title, :description, :plays, :uploader_id

json.posted time_ago_in_words(track.created_at)
json.numComments track.comments.length

if track.seed_cover != ""
  json.albumArt "https://www.henry-pan.com/seed/sonusstratos/covers/#{track.seed_cover}.jpg"
else
  if track.album_art.attached?
    json.albumArt url_for(track.album_art)
  else
    if track.uploader.profile_pic.attached?
      json.albumArt url_for(track.uploader.profile_pic)
    else
      json.albumArt "https://www.henry-pan.com/seed/sonusstratos/avatars/Stratos.jpg"
    end
  end
end

if track.seed_track != ""
  json.audioFile "https://www.henry-pan.com/seed/sonusstratos/tracks/#{track.id}.ogg"
else
  if track.audio_file.attached?
    json.audioFile url_for(track.audio_file)
  else
    json.audioFile "https://www.henry-pan.com/seed/sonusstratos/sample.ogg"
  end
end
