class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.references :appeal, foreign_key: 'appeal_id', null:false
      t.references :user, foreign_key: 'user_id', null:false
      t.integer :receiver_id, null:false
      t.timestamps
    end
  end
end

