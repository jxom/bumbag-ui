import { css, cssClass } from '../styled';
import { breakpoint, space, theme } from '../utils';
import { getAlignmentAttributes } from '../Box/styles';

const verticalBreakpoints = {
  tablet: 'mobile',
  desktop: 'tablet',
  widescreen: 'desktop',
  fullHD: 'widescreen',
};

export const Level = (styleProps) => cssClass`
  &&& {
    ${breakpoint(
      styleProps.orientation === 'horizontal' && styleProps.verticalBelow
        ? `max-${verticalBreakpoints[styleProps.verticalBelow]}`
        : null,
      css`
        flex-direction: column;

        & > *:not(:last-child) {
          margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;
        }

        ${getAlignmentAttributes(styleProps)}
      `,
      {
        else: css`
          justify-content: space-between;

          ${styleProps.orientation === 'vertical' &&
          css`
            flex-direction: column;
          `}
        `,
      }
    )(styleProps)};
  }


  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
