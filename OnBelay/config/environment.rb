# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# config/environments/production.rb
config.serve_static_files = true
# ...
config.log_level = :debug
