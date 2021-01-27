import { Platform, Text } from 'react-native';
import { styled } from '../styled';
import { fontSize, theme } from '../utils/theme';

export const StyledText = styled(Text)`
  ${Platform.OS === 'web' &&
  `
      font: unset;
      font-family: unset;
      font-size: unset;
    `}

  ${theme('native.Text', 'styles.base')};
`;
