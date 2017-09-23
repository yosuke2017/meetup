class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :fog

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :sub_image do
    process resize_to_fit: [120,120]
  end

  version :message_image do
    process resize_to_fit: [200, 200]
  end

  version :show_image do
    process resize_to_fit: [200, 150]
  end

  version :main_image do
    process resize_to_fit: [305, 315]
  end


end

