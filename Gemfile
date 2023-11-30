# frozen_string_literal: true

source "https://rubygems.org"

ruby file: '.ruby-version'

gem "puma"
gem "rails"
gem "sqlite3"
gem "turbo-rails"
gem "vite_rails"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

group :development, :test do
  gem "debug"

  gem 'rubocop'
  gem 'rubocop-performance'
  gem 'rubocop-rails'

  gem 'faker'
end
