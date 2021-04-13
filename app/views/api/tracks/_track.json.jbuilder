json.extract! track, :id, :title, :description, :plays, :uploader_id

json.uploader track.uploader.username
json.posted time_ago_in_words(track.created_at)