json.array! @groups.each do |group| 
  json.id group.id 
  json.company_name group.company_name
  json.url group.url
  json.city group.city
  json.photo_url group.photo_url
  json.categories group.categories.each do |category|
    json.id category.id 
    json.category_name category.category_name
  end
end