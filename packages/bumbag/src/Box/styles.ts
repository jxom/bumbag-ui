import { css, cssClass } from '../styled';
import { altitude, breakpoint, theme } from '../utils/theme';
import { ThemeConfig } from '../types';

const FLEX_ALIGN_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export const style = (styleProps) => cssClass`
  & {
    ${styleProps.style};
  }

  ${
    (styleProps.alignY || styleProps.alignX) &&
    css`
      display: flex;

      ${
        !styleProps.display &&
        css`
          flex-direction: column;
        `
      }

      ${
        styleProps.alignY &&
        css`
          justify-content: ${FLEX_ALIGN_MAP[styleProps.alignY]};
        `
      }

      ${
        styleProps.alignX &&
        css`
          align-items: ${FLEX_ALIGN_MAP[styleProps.alignX]};
        `
      }
    `
  }

  ${
    styleProps.altitude &&
    css`
      & {
        ${altitude(styleProps.altitude)(styleProps)};
      }
    `
  };
`;

export const Box = (styleProps) => cssClass`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  & {
    ${theme(styleProps.themeKey, 'css.root')(styleProps)};
  }
`;
