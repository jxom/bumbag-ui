import { Platform, Text } from 'react-native';
import { css, styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledText = styled(Text)`
  ${Platform.OS === 'web' &&
  `
      font-family: unset;
      font-size: unset;
    `}

  ${theme('Text', 'styles.base')};
`;
