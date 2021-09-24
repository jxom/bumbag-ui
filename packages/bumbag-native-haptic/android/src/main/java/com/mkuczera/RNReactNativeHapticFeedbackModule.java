
package com.mkuczera;

import android.os.Vibrator;
import android.content.Context;
import android.provider.Settings;
import android.view.HapticFeedbackConstants;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

public class RNReactNativeHapticFeedbackModule extends ReactContextBaseJavaModule {

  ReactApplicationContext reactContext;

  public RNReactNativeHapticFeedbackModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNReactNativeHapticFeedback";
  }

  @ReactMethod
  public void trigger(String type, ReadableMap options) {
    // Check system settings, if disabled and we're not explicitly ignoring then return immediatly
    boolean ignoreAndroidSystemSettings = options.getBoolean("ignoreAndroidSystemSettings");
    int hapticEnabledAndroidSystemSettings = Settings.System.getInt(this.reactContext.getContentResolver(), Settings.System.HAPTIC_FEEDBACK_ENABLED, 0);
    if (ignoreAndroidSystemSettings == false && hapticEnabledAndroidSystemSettings == 0) return;

    Vibrator v = (Vibrator) reactContext.getSystemService(Context.VIBRATOR_SERVICE);
    if (v == null) return;
    long durations[] = {0, 20};
    int hapticConstant = 0;

    switch (type) {
      case "impactLight":
        durations = new long[]{0, 20};
        break;
      case "impactMedium":
        durations = new long[]{0, 40};
        break;
      case "impactHeavy":
        durations = new long[]{0, 60};
        break;
      case "notificationSuccess":
        durations = new long[]{0, 40 ,60, 20};
        break;
      case "notificationWarning":
        durations = new long[]{0, 20, 60, 40};
        break;
      case "notificationError":
        durations = new long[]{0, 20, 40, 30, 40, 40};
        break;
      case "clockTick":
        hapticConstant = HapticFeedbackConstants.CLOCK_TICK;
        break;
      case "contextClick":
        hapticConstant = HapticFeedbackConstants.CONTEXT_CLICK;
        break;
      case "keyboardPress":
        hapticConstant = HapticFeedbackConstants.KEYBOARD_PRESS;
        break;
      case "keyboardRelease":
        hapticConstant = HapticFeedbackConstants.KEYBOARD_RELEASE;
        break;
      case "keyboardTap":
        hapticConstant = HapticFeedbackConstants.KEYBOARD_TAP;
        break;
      case "longPress":
        hapticConstant = HapticFeedbackConstants.LONG_PRESS;
        break;
      case "textHandleMove":
        hapticConstant = HapticFeedbackConstants.TEXT_HANDLE_MOVE;
        break;
      case "virtualKey":
        hapticConstant = HapticFeedbackConstants.VIRTUAL_KEY;
        break;
      case "virtualKeyRelease":
        hapticConstant = HapticFeedbackConstants.VIRTUAL_KEY_RELEASE;
        break;
      }

      if (hapticConstant != 0) {
        v.vibrate(hapticConstant);
      } else {
        v.vibrate(durations, -1);
      }
  }
}
