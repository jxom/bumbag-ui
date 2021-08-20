require 'json'

Pod::Spec.new do |s|
  s.name         = "RNCPicker"
  s.version      = "1.16.1"
  s.summary      = "RNCPicker"
  s.license      = "MIT"

  s.authors      = "RNC"
  s.homepage     = "github.com"
  s.platforms    = { :ios => "9.0", :osx => "10.14" }

  s.source       = { :git => "https://github.com/react-native-picker/picker.git", :tag => "v#{s.version}" }
  s.ios.source_files  = "ios/**/*.{h,m}"
  s.osx.source_files  = "macos/**/*.{h,m}"


  s.dependency 'React-Core'
end
