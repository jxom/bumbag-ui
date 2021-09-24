
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface RNReactNativeHapticFeedback : NSObject <RCTBridgeModule>

typedef enum {
    selection,
    impactLight,
    impactMedium,
    impactHeavy,
    notificationSuccess,
    notificationWarning,
    notificationError
}FeedbackType;

- (Boolean)supportsHaptic;

@end
  
