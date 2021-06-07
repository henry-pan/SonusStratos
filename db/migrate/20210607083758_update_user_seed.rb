class UpdateUserSeed < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :seed, :boolean, default: false
  end
end
