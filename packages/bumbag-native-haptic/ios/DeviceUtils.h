//
//  DeviceUtils.h
//  RNReactNativeHapticFeedback
//
//  Created by Michael Kuczera on 26.05.18.
//

#import <Foundation/Foundation.h>

@interface DeviceUtils : NSObject

+ (NSString *) platform;
+ (int)deviceVersion:(NSString*)deviceType;

@end;
