class AddHeightColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :height, :string
  end
end
