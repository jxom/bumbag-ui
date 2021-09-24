import { BoxTouchable } from 'bumbag-native/Box';
import { styled } from 'bumbag-native/styled';
import { theme } from 'bumbag-native/utils/theme';

export const Haptic = styled(BoxTouchable)`
  ${theme('native.Haptic', 'styles.base')};
`;
