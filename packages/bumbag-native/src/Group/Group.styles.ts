import { View } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';
import { breakpoint } from '../utils/breakpoint';

export const StyledGroup = styled(View)`
  ${getOrientationAttributes}
  ${getResponsiveProps}

  ${theme('native.Group', 'styles.base')};
`;

function getOrientationAttributes({ orientation, ...props }: any) {
  if (orientation === 'horizontal') {
    return `
      flex-direction: row;
      ${theme('native.Group', 'styles.horizontal')(props)};
    `;
  }
  if (orientation === 'vertical') {
    return `
      flex-direction: column;
      ${theme('native.Group', 'styles.vertical')(props)};
    `;
  }
  return '';
}

function getResponsiveProps({ verticalBelow, ...props }: any) {
  if (verticalBelow) {
    return breakpoint('width', {
      [`max-${verticalBelow}`]: `
        flex-direction: column;
      `,
    })(props);
  }
  return '';
}
