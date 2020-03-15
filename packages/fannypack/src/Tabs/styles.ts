import { css, cssClass } from '../styled';
import { borderRadius, palette, theme, fontWeight } from '../utils';

export const Tab = styleProps => cssClass`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 2.75em;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0 0.8rem;
  transition: box-shadow 0.1s ease-in-out 0s, background-color 0.1s, color 0.1s;

  ${styleProps.disabled &&
    css`
      color: ${palette('gray300')(styleProps)};
    `}

  ${styleProps.variant === 'boxed' &&
    css`
      border: 1px solid transparent;
    `}

  ${styleProps.variant === 'button' &&
    css`
      border-radius: ${borderRadius('default')(styleProps)};
    `}

    ${
      styleProps.orientation === 'vertical'
        ? css`
            width: 100%;
            border-top-left-radius: ${borderRadius('default')(styleProps)};
            border-bottom-left-radius: ${borderRadius('default')(styleProps)};
            margin-right: -2px;

            &:not(:last-child) {
              margin-bottom: 0.5rem;
            }
          `
        : css`
            border-top-left-radius: ${borderRadius('default')(styleProps)};
            border-top-right-radius: ${borderRadius('default')(styleProps)};

            &:not(:last-child) {
              margin-right: 0.5rem;
            }
          `
    }

  &[aria-selected='true'] {
    color: ${palette(styleProps.palette, styleProps.palette)(styleProps)};
    fill: ${palette(styleProps.palette, styleProps.palette)(styleProps)};

    ${styleProps.variant === 'default' &&
      css`
        background-color: white;

        ${styleProps.orientation === 'vertical'
          ? css`
              box-shadow: inset -2px 0 0 0 ${palette(styleProps.palette, styleProps.palette)(styleProps)};
            `
          : css`
              box-shadow: inset 0 -2px 0 0 ${palette(styleProps.palette, styleProps.palette)(styleProps)};
            `}
      `}

    ${styleProps.variant === 'boxed' &&
      css`
        border: 1px solid ${palette('white900')(styleProps)};

        ${styleProps.orientation === 'vertical'
          ? css`
              border-right-color: white;
            `
          : css`
              border-bottom-color: white;
            `}
      `}

    ${styleProps.variant === 'button' &&
      css`
        background-color: ${palette(styleProps.palette, styleProps.palette)(styleProps)};
        color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
      `}

    & {
      ${theme(styleProps.themeKey, `css.selected`)(styleProps)};
    }
  }

  &:focus {
    outline: unset;

    ${styleProps.variant === 'default' &&
      css`
        ${styleProps.orientation === 'vertical'
          ? css`
              box-shadow: inset -2px 0 0 0 ${palette(styleProps.palette, styleProps.palette)(styleProps)};
            `
          : css`
              box-shadow: inset 0 -2px 0 0 ${palette(styleProps.palette, styleProps.palette)(styleProps)};
            `}
      `}

    ${(styleProps.variant === 'boxed' || styleProps.variant === 'button') &&
      css`
        box-shadow: ${palette(styleProps.palette, styleProps.palette)(styleProps)} 0px 0px 0px 1px,
          ${palette(`${styleProps.palette}200`)(styleProps)} 0px 0px 0px 3px;
      `}

    & {
      ${theme(styleProps.themeKey, `css.focus`)(styleProps)};
    }
  }

  &:not([aria-selected='true']):hover {
    ${styleProps.variant !== 'button' &&
      css`
        color: ${palette(styleProps.palette, styleProps.palette)(styleProps)};
      `}

    ${styleProps.variant === 'button' &&
      css`
        background-color: ${palette('white700')(styleProps)};
      `}

    & {
      ${theme(styleProps.themeKey, `css.hover`)(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const Tabs = styleProps => cssClass`
  width: 100%;

  ${styleProps.isFitted &&
    css`
      & .fp-TabsTab {
        flex: 1;
      }
    `}

  ${styleProps.orientation === 'vertical' &&
    css`
      display: flex;
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TabsList = styleProps => cssClass`
  align-items: center;
  display: flex;
  font-weight: ${fontWeight('semibold')(styleProps)};

  ${styleProps.orientation === 'vertical' &&
    css`
      flex-direction: column;
    `}

  ${(styleProps.variant === 'boxed' || styleProps.variant === 'default') &&
    css`
      ${styleProps.orientation === 'vertical'
        ? css`
            border-right: 1px solid ${palette('white900')(styleProps)};
          `
        : css`
            border-bottom: 1px solid ${palette('white900')(styleProps)};
          `}
    `}


  ${getAlignAttributes(styleProps)}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TabsPanel = styleProps => cssClass`
  &:focus {
    outline: none;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

function getAlignAttributes(styleProps) {
  const sizeAttributes = {
    left: css`
      & {
        justify-content: start;

        ${theme(styleProps.themeKey, `css.align.left`)(styleProps)};
      }
    `,
    center: css`
      justify-content: center;

      & {
        ${theme(styleProps.themeKey, `css.align.center`)(styleProps)};
      }
    `,
    right: css`
      justify-content: flex-end;

      & {
        ${theme(styleProps.themeKey, `css.align.right`)(styleProps)};
      }
    `
  };
  return sizeAttributes[styleProps.align || 'left'];
}
