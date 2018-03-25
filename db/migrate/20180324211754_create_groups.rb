class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :company_name
      t.string :url
      t.string :city
      t.string :email
      t.string :phone
      t.string :photo_url

      t.timestamps
    end
  end
end
