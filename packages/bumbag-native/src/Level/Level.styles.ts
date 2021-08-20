import { styled } from '../styled';
import { theme } from '../utils/theme';
import { breakpoint } from '../utils/breakpoint';
import { getAlignmentStyles } from '../utils/getCSSFromStyleObject';

export const StyledLevel = styled.View`
  justify-content: space-between;

  ${getOrientationAttributes}
  ${getResponsiveAttributes}

  ${theme('native.Level', 'styles.base')};
`;

function getOrientationAttributes({ orientation }: any) {
  if (orientation === 'horizontal') {
    return `
      flex-direction: row;
    `;
  }
  if (orientation === 'vertical') {
    return `
      flex-direction: column;
    `;
  }
  return '';
}

function getResponsiveAttributes({ orientation, verticalBelow, ...props }: any) {
  if (orientation === 'horizontal' && verticalBelow) {
    return breakpoint('width', {
      [`max-${verticalBelow}`]: `
        justify-content: flex-start;
        flex-direction: column;

        ${props.alignY ? getAlignmentStyles({ attribute: 'alignY', value: props.alignY, props }) : ''}
        ${props.alignX ? getAlignmentStyles({ attribute: 'alignX', value: props.alignX, props }) : ''}
      `,
    })(props);
  }
  return '';
}
