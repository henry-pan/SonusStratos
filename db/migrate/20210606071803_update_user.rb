class UpdateUser < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :firstname, ""
    change_column_default :users, :lastname, ""
    change_column_default :users, :city, ""
    change_column_default :users, :country, ""
    change_column_default :users, :bio, ""
  end
end
