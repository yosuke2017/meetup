class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :age, :string
    add_column :users, :job, :string
    add_column :users, :background, :string
  end
end
