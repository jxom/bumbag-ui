import { css, cssClass } from '../styled';
import { theme } from '../utils';

const FLEX_ALIGN_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export const Flex = (styleProps) => cssClass`
  && {
    display: flex;
    flex-direction: unset;
  }

  ${
    (styleProps.alignY || styleProps.alignX) &&
    css`
      ${styleProps.alignY &&
      css`
        align-items: ${FLEX_ALIGN_MAP[styleProps.alignY]};
        ${!styleProps.alignX &&
        css`
          justify-content: unset;
        `}
      `}

      ${styleProps.alignX &&
      css`
        justify-content: ${FLEX_ALIGN_MAP[styleProps.alignX]};
        ${!styleProps.alignY &&
        css`
          align-items: unset;
        `}
      `}
    `
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
