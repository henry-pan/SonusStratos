class AddBio < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :bio, :text
  end
end
