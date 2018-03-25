require 'csv'

namespace :import do 
  desc "Import data from csv"
  task groups: :environment do 
    filename = File.join Rails.root, "groups.csv"
    CSV.foreach(filename, headers: true) do |row|
      Group.create({
    company_name: row[0],
    url: row[1],
    city: row[2],
    photo_url: row[3]
      })
    end
  end 
end 

namespace :import do 
  desc "Import data from csv"
  task lookup: :environment do 
    filename = File.join Rails.root, "group_categories.csv"
    CSV.foreach(filename, headers: true) do |row|
      GroupCategory.create({
    group_id: row[0],
    category_id: row[1]
      })
    end
  end 
end 