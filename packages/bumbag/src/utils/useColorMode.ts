import * as React from 'react';
import { ColorModeContext } from '../Provider/ColorModeContext';

export function useColorMode() {
  return React.useContext(ColorModeContext);
}
