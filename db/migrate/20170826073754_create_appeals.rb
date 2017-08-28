class CreateAppeals < ActiveRecord::Migration[5.0]
  def change
    create_table :appeals do |t|
      t.string :name, null:false
      t.text :outline, null:false
      t.string :country_code, null:false
      t.string :region_code
      t.integer :user_id, null:false
      t.timestamps
    end
  end
end

