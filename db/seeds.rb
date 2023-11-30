# frozen_string_literal: true

require 'faker'

Product.delete_all

30.times do
  Product.create(
    name: Faker::Commerce.product_name,
    quantity: rand(1..10)
  )
end
