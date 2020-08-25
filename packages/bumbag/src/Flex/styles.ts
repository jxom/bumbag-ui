import { css, cssClass } from '../styled';
import { theme } from '../utils';

const FLEX_HORIZONTAL_ALIGN_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const FLEX_VERTICAL_ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

export const Flex = (styleProps) => cssClass`
  display: flex;

  ${getFlexAlignmentAttributes(styleProps)}

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export function getFlexAlignmentAttributes(styleProps) {
  return css`
    && {
      ${(styleProps.alignY || styleProps.alignX) &&
      css`
        flex-direction: unset;

        ${styleProps.alignY &&
        css`
          align-items: ${FLEX_VERTICAL_ALIGN_MAP[styleProps.alignY]};
          ${!styleProps.alignX &&
          css`
            justify-content: unset;
          `}
        `}

        ${styleProps.alignX &&
        css`
          justify-content: ${FLEX_HORIZONTAL_ALIGN_MAP[styleProps.alignX]};
          ${!styleProps.alignY &&
          css`
            align-items: unset;
          `}
        `}
      `}
    }
  `;
}
