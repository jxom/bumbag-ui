import { css, cssClass } from '../styled';
import { palette, theme } from '../utils';

export const OptionButtons = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const OptionButton = (styleProps) => cssClass`
  ${
    styleProps.isFullWidth &&
    css`
      flex: 1;
    `
  };

  ${
    styleProps.checked &&
    css`
      border: 1px solid transparent;
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const OptionButtonsWrapper = (styleProps) => cssClass`
  ${
    !styleProps.isFullWidth &&
    css`
      width: fit-content;
    `
  };

  ${
    styleProps.state &&
    css`
      box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 0px 0px
        3px;

      & > *[aria-checked='false'] {
        border-color: ${palette(`${styleProps.state}`)(styleProps)};
      }
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const OptionButtonsField = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
