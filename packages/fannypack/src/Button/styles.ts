import getDefaultPalette from '../theme/palette';
import { css, cssClass } from '../styled';
import { borderRadius, darken, palette, space, theme } from '../utils';

const defaultPalette = getDefaultPalette({});

export const Button = styleProps => cssClass`
  align-items: center;
  background-color: ${palette(styleProps.palette)(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  cursor: pointer;
  display: inline-flex;
  font-weight: ${theme('fontWeights.semibold')(styleProps)};
  min-height: 2.5em;
  justify-content: center;
  padding: 0 0.8rem;
  text-decoration: none;
  hyphens: auto;
  transition: box-shadow 0.1s ease-in-out 0s, border 0.1s, background-color 0.1s;

  ${styleProps.palette === 'default' &&
    css`
      border: 1px solid ${palette('gray100')(styleProps)};
    `};

  & {
    ${theme('Button.base')(styleProps)};
  }

  &[disabled],
  &[aria-disabled="true"] {
    ${getDisabledProperties(styleProps)};
  }

  ${styleProps.size && getSizeProperties(styleProps)}
  ${styleProps.isLoading && getLoadingProperties(styleProps)};
  ${styleProps.isStatic && getStaticProperties(styleProps)};
  ${isInteractive(styleProps) && getInteractiveProperties(styleProps)};

  ${styleProps.kind === 'outlined' && getOutlinedProperties(styleProps)};
  ${styleProps.kind === 'link' && getLinkProperties(styleProps)};
  ${styleProps.kind === 'ghost' && getGhostProperties(styleProps)};
`;

export const ButtonIcon = styleProps => cssClass`
  ${styleProps.isBefore &&
    css`
      margin-left: -${space(1)(styleProps)}em;
      margin-right: ${space(2)(styleProps)}em;

      & {
        ${theme(`${styleProps.themeKey}.before`)(styleProps)};
      }
    `};

  ${styleProps.isAfter &&
    css`
      margin-left: ${space(2)(styleProps)}em;
      margin-right: -${space(1)(styleProps)}em;

      & {
        ${theme(`${styleProps.themeKey}.after`)(styleProps)};
      }
    `};

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const ButtonSpinnerWrapper = styleProps => cssClass`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  & + .fp-Text {
    opacity: 0;
  }

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const ButtonSpinner = styleProps => cssClass`
  && {
    font-size: 1.25em;
  }

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const isInteractive = styleProps => !styleProps.isStatic && !styleProps.isLoading && !styleProps.disabled;

export const getDisabledProperties = styleProps => css`
  & {
    cursor: not-allowed;
    opacity: 0.7;
    outline: unset;
    pointer-events: unset;
  }
  & {
    ${theme(`${styleProps.themeKey}.disabled`)(styleProps)};
  }
`;

export const getSizeProperties = styleProps => {
  const styles = {
    small: css`
      & {
        font-size: ${theme('fontSizes.100')(styleProps)}em;
        min-height: ${space(8)(styleProps)}em;
        padding: 0 ${space(2)(styleProps)}rem;
      }
      & {
        ${theme(`${styleProps.themeKey}.sizes.small`)(styleProps)};
      }
    `,
    default: css`
      & {
        ${theme(`${styleProps.themeKey}.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      & {
        min-height: ${space(12)(styleProps)}em;
        padding: 0 ${space(5)(styleProps)}rem;
      }
      & {
        ${theme(`${styleProps.themeKey}.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      & {
        font-size: ${theme('fontSizes.300')(styleProps)}em;
        min-height: ${space(12)(styleProps)}em;
        padding: 0 ${space(6)(styleProps)}rem;
      }
      & {
        ${theme(`${styleProps.themeKey}.sizes.large`)(styleProps)};
      }
    `
  };
  return styles[styleProps.size];
};

export const getLoadingProperties = styleProps => css`
  & {
    cursor: not-allowed;
    position: relative;

    &:focus {
      box-shadow: unset !important;
      outline: unset !important;
    }
  }
  & {
    ${theme(`${styleProps.themeKey}.loading`)(styleProps)};
  }
`;

export const getStaticProperties = styleProps => css`
  & {
    cursor: default;
    outline: unset;

    &:focus {
      box-shadow: unset !important;
      outline: unset !important;
    }
  }
  & {
    ${theme(`${styleProps.themeKey}.static`)(styleProps)};
  }
`;

export const getInteractiveProperties = styleProps => css`
  &:focus {
    outline: unset;
    z-index: 2;
    box-shadow: ${palette(styleProps.palette === 'default' ? 'gray' : styleProps.palette)(styleProps)} 0px 0px 0px 1px,
      ${palette(styleProps.palette === 'default' ? 'gray200' : `${styleProps.palette}200`)(styleProps)} 0px 0px 0px 3px;

    ${styleProps.palette === 'default' &&
      css`
        border-color: transparent;
      `};

    ${theme(`${styleProps.themeKey}.focus`)(styleProps)};
  }

  ${styleProps.kind !== 'link' &&
    css`
      &:hover {
        background-color: ${darken(0.1, palette(styleProps.palette)(styleProps))};

        & {
          ${theme(`${styleProps.themeKey}.hover`)(styleProps)};
        }
      }
    `};

  ${styleProps.kind !== 'link' &&
    css`
      &:hover:active {
        background-color: ${darken(0.15, palette(styleProps.palette)(styleProps))};

        & {
          ${theme(`${styleProps.themeKey}.hoveractive`)(styleProps)};
        }
      }
    `};
`;

export const getLinkProperties = styleProps => css`
  & {
    border: 0;
    background: unset;
    color: ${styleProps.palette === 'default'
      ? palette('text', defaultPalette.text)(styleProps)
      : palette(styleProps.palette)(styleProps)};
    fill: ${styleProps.palette === 'default'
      ? palette('text', defaultPalette.text)(styleProps)
      : palette(styleProps.palette)(styleProps)};
    text-decoration: underline;

    &:hover {
      color: ${styleProps.palette === 'default'
        ? darken(0.5, palette('text', defaultPalette.text)(styleProps))
        : darken(0.5, palette(styleProps.palette)(styleProps))};
      fill: ${styleProps.palette === 'default'
        ? darken(0.5, palette('text', defaultPalette.text)(styleProps))
        : darken(0.5, palette(styleProps.palette)(styleProps))};
    }
  }

  & {
    ${theme(`${styleProps.themeKey}.link`)(styleProps)};
  }
`;

export const getOutlinedProperties = styleProps => css`
  & {
    background-color: unset;
    border: 1px solid ${palette()(styleProps)};
    color: ${palette()(styleProps)};
    fill: ${palette()(styleProps)};

    ${isInteractive(styleProps) &&
      css`
        &:hover {
          background-color: ${palette()(styleProps)};
          color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
          fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
        }
      `};
  }
  & {
    ${theme(`${styleProps.themeKey}.outlined`)(styleProps)};
  }
`;

export const getGhostProperties = styleProps => css`
  & {
    background-color: unset;
    border: unset;
    color: ${styleProps.palette === 'default' ? palette('defaultInverted')(styleProps) : palette()(styleProps)};
    fill: ${styleProps.palette === 'default' ? palette('defaultInverted')(styleProps) : palette()(styleProps)};

    &:hover {
      background-color: ${darken(0.05, palette('default')(styleProps))};
    }
    &:hover:active {
      background-color: ${darken(0.1, palette('default')(styleProps))};
    }
  }
  & {
    ${theme(`${styleProps.themeKey}.ghost`)(styleProps)};
  }
`;
