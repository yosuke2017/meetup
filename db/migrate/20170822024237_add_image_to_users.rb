class AddImageToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sub_image1, :string
    add_column :users, :sub_image2, :string
    add_column :users, :sub_image3, :string
  end
end

