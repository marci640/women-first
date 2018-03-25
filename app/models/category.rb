class Category < ApplicationRecord
  has_many :group_categories
  has_many :groups, through: :group_categories
end
