import { Animated as _Animated } from 'react-native';
import { AnimatedText } from './AnimatedText';

export * from './AnimatedText';
export const Animated = Object.assign(_Animated, {
  Text: AnimatedText,
});
