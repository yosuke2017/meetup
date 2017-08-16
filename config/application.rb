require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Meetup
  class Application < Rails::Application
    config.generators do |g|
      g.helper false
      g.test_framework false
      g.assets false
    end
    config.i18n.default_locale = :ja
    config.active_record.default_timezone = :local
    config.time_zone = 'Tokyo'
  end
end

