class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end

  def after_sign_in_path_for(resource)
    appeals_path
  end

  # def after_sign_in_path_for(resource)
  #   groups_path
  # end
end

