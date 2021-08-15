import { Animated, Platform, Text } from 'react-native';
import { styled } from '../styled';
import { palette, theme } from '../utils/theme';

function getTextStyles(props) {
  return `
    color: ${palette('text')(props)};

    ${
      Platform.OS === 'web'
        ? `
            font-size: unset;
          `
        : ''
    }

    ${theme('native.Text', 'styles.base')(props)};
  `;
}

export const StyledText = styled(Text)`
  ${getTextStyles}
`;

export const StyledAnimatedText = styled(Animated.Text)`
  ${getTextStyles}
`;
