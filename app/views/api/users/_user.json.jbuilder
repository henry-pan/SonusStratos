json.extract! user, :id, :username, :firstname, :lastname, :city, :country, :bio, :seed

json.numTracks user.tracks.length

if user.seed
  json.profilePic "https://www.henry-pan.com/seed/sonusstratos/avatars/#{user.username}.jpg"
else
  if user.profile_pic.attached?
    json.profilePic url_for(user.profile_pic)
  else
    json.profilePic "https://www.henry-pan.com/seed/sonusstratos/avatars/Stratos.jpg"
  end
end
