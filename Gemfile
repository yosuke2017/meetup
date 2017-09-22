source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.4'

gem 'mysql2', '>= 0.3.18', '< 0.5'

gem 'puma', '~> 3.0'

gem 'sass-rails', '~> 5.0'

gem 'uglifier', '>= 1.3.0'

gem 'coffee-rails', '~> 4.2'

gem 'jquery-rails'

gem 'jbuilder', '~> 2.5'

gem 'devise'

gem 'rails-i18n'

gem 'carrierwave', '~>1.0'

gem 'mini_magick'

gem 'fog'

gem 'font-awesome-rails'

gem 'haml-rails'

gem 'paperclip'

gem 'dropzonejs-rails'

group :development, :test do

  gem 'pry-rails'

  gem 'byebug', platform: :mri

  gem 'pry-rails'

  gem 'erb2haml'
end

group :development do

  gem 'web-console', '>= 3.3.0'

  gem 'listen', '~> 3.0.5'

  gem 'spring'

  gem 'spring-watcher-listen', '~> 2.0.0'
end

  gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
