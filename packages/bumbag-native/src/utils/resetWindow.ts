import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  window.addEventListener = () => {};
  window.removeEventListener = () => {};
}
