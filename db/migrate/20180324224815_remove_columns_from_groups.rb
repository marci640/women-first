class RemoveColumnsFromGroups < ActiveRecord::Migration[5.1]
  def change
    remove_column :groups, :email
    remove_column :groups, :phone
  end
end
