import { Platform, Text } from 'react-native';
import { styled } from '../styled';
import { font, palette, theme } from '../utils/theme';

export const StyledText = styled(Text)`
  color: ${palette('text')};

  ${(props) =>
    font('default')(props)
      ? `
          font-family: ${font('default')(props)};
        `
      : ''}

  ${
    Platform.OS === 'web'
      ? `
          font-size: unset;
        `
      : ''
  }

  ${theme('native.Text', 'styles.base')};
`;
