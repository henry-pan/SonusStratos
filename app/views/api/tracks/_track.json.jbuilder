json.extract! track, :id, :title, :description, :plays, :uploader_id

json.uploader track.uploader.username
json.posted time_ago_in_words(track.created_at)

if track.album_art.attached?
  json.albumArt url_for(track.album_art)
else
  if track.uploader.profile_pic.attached?
    json.albumArt url_for(track.uploader.profile_pic)
  else
    json.albumArt "https://www.henry-pan.com/seed/sonusstratos/stratos.jpg"
  end
end

if track.audio_file.attached?
  json.audioFile url_for(track.audio_file)
else
  json.audioFile ""
end

if track.uploader.profile_pic.attached?
  json.uploaderPic url_for(track.uploader.profile_pic)
else
  json.uploaderPic "https://www.henry-pan.com/seed/sonusstratos/stratos.jpg"
end
