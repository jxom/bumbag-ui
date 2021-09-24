require 'json'

Pod::Spec.new do |s|
  s.name         = "RNReactNativeHapticFeedback"
  s.version      = "1.11.0"
  s.summary      = "React Native Haptic Feedback"
  s.description  = <<-DESC
                  react-native-haptic-feedback
                   DESC
  s.homepage     = "https://github.com/mkuczera/react-native-haptic-feedback"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "m.kuczera@gmail.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/mkuczera/react-native-haptic-feedback.git", :tag => "master" }
  s.source_files  = "ios/*.{h,m}"
  s.requires_arc = true

  s.dependency 'React-Core'
end

  
