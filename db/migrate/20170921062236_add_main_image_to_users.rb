class AddMainImageToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :main_image, :string
  end
end
