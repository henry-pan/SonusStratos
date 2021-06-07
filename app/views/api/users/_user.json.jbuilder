json.extract! user, :id, :username, :firstname, :lastname, :city, :country, :bio

json.numTracks user.tracks.length

if user.profile_pic.attached?
  json.profilePic url_for(user.profile_pic)
else
  json.profilePic "https://www.henry-pan.com/seed/sonusstratos/stratos.jpg"
end
