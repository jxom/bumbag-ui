import { View } from 'react-native';
import { styled } from '../styled';
import { space, theme } from '../utils/theme';
import { breakpoint } from '../utils/breakpoint';

export const StyledSet = styled(View)`
  align-items: flex-start;

  ${getOrientationProps}
  ${getSpacingProps}
  ${getFillProps}
  ${getResponsiveProps}

  ${theme('native.Set', 'styles.base')};
`;

function getOrientationProps({ orientation, ...props }: any) {
  if (orientation === 'horizontal') {
    return `
      flex-direction: row;
      flex-wrap: wrap;
      ${theme('native.Set', 'styles.horizontal')(props)};
    `;
  }
  if (orientation === 'vertical') {
    return `
      flex-direction: column;
      ${theme('native.Set', 'styles.vertical')(props)};
    `;
  }
  return '';
}

function getSpacingProps({ spacing, ...props }: any) {
  return `
    margin-left: -${space(spacing)(props)}px;
    margin-top: -${space(spacing)(props)}px;
  `;
}

function getFillProps({ isFilled }: any) {
  if (isFilled) {
    return `
      align-items: stretch;
    `;
  }
  return `
    align-items: flex-start
  `;
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
