import { css, cssClass } from '../styled';
import { altitude, theme } from '../utils/theme';

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

export const style = (styleProps) => cssClass`
  & {
    ${styleProps.style};
  }

  ${getAlignmentAttributes(styleProps)};

  ${
    styleProps.altitude &&
    css`
      & {
        ${altitude(styleProps.altitude)(styleProps)} !important;
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
    ${theme(styleProps.themeKey, 'styles.base')(styleProps)};
  }
`;

export function getAlignmentAttributes(styleProps) {
  return css`
    ${(styleProps.alignY || styleProps.alignX) &&
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
          justify-content: ${FLEX_VERTICAL_ALIGN_MAP[styleProps.alignY]};
        `
      }

      ${
        styleProps.alignX &&
        css`
          align-items: ${FLEX_HORIZONTAL_ALIGN_MAP[styleProps.alignX]};
        `
      }
    `}
  `;
}
