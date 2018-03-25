json.array! @categories.each do |category| 
  json.id category.id 
  json.category_name category.category_name
end