class UpdateTrackSeed < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :seed_cover, :string, default: ""
    add_column :tracks, :seed_track, :string, default: ""
  end
end
