# SonusStratos

[Live on Heroku!](https://sonusstratos.herokuapp.com/#/)

SonusStratos is a audio sharing application that allows users to post audio tracks and listen to audio tracks posted by other users. Users may also post comments on audio tracks.

# Built With

* Ruby on Rails
* PostgreSQL
* React
* Redux
* SCSS
* Amazon Web Services (AWS) S3
* Heroku

# Features

## Discover

Users can view and listen to all the tracks uploaded to SonusStratos on the Discover page. Each track can be played by clicking the play button, which opens the playbar and plays the track. By clicking on the title or album art of a track, users can navigate to the track's page to view other details like the description or user comments.

## Uploading / Track Pages

Logged in users can upload new tracks to SonusStratos. Each track can optionally be given an album art. Once uploaded, users can edit the title, description, and album art by accessing the track's page.

## Continuous Play

Once a track is played, it appears on the playbar on the bottom of the screen. The track will continue to play even as users navigate around the site. In addition, users can restart the track, toggle looping, and adjust the volume. Users can click on the seek bar to jump around the current track. Clicking the duration on the right of the seek bar will toggle between track duration and duration remaining.

## Comments

Logged in users can leave comments on tracks by navigating to a track's page and entering a comment in the comment box. Users can delete their own comments, and the uploader of the track can delete any comment on their track. When the uploader leaves a comment on their own track, their comment is highlighted in gray.

## User Pages

Users can edit their username, full name, city, country, bio, and profile picture on their user page. This page also displays the tracks the user has uploaded.

# Planned Features

* Likes - Allow for users to "like" a track, which makes it appear on their user page sidebar.
* Dark Mode - A toggle to change the color scheme of the site.
