import { Platform, Text } from 'react-native';
import { styled } from '../styled';
import { palette, theme } from '../utils/theme';

export const StyledText = styled(Text)`
  color: ${palette('text')};

  ${Platform.OS === 'web' &&
  `
      font: unset;
      font-family: unset;
      font-size: unset;
    `}

  ${theme('native.Text', 'styles.base')};
`;
