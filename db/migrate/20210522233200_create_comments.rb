class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :comment_body, null: false
      t.integer :commenter_id, null: false
      t.integer :track_id, null: false
      t.timestamps 
    end
    add_index :comments, :commenter_id
    add_index :comments, :track_id
  end
end
