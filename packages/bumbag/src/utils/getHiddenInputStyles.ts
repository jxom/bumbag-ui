import { css, cssClass } from '../styled';
import { palette, theme } from '../utils';

export function getHiddenInputStyles({
  iconClassName,
  checkedCss,
  disabledCheckedCss,
  disabledCheckedIconCss,
  disabledUncheckedIconCss,
  checkedIconCss,
  uncheckedIconCss,
  styleProps,
  themeKey,
}: any) {
  // @ts-ignore
  return cssClass`
    height: 1em;
    width: 1em;
    overflow: hidden;
    position: absolute;
    opacity: 0;

    &:focus {
      outline: none;
    }

    & + .${iconClassName} {
      ${
        styleProps.state &&
        css`
          border-color: ${palette(`${styleProps.state}`, { dark: `${styleProps.state}300` })(styleProps)};
        `
      }

      &::before {
        ${uncheckedIconCss};

        & {
          ${theme(themeKey, `unchecked`)(styleProps)};
        }
      }
    }
    &:not(:checked) + .${iconClassName} {
      ${
        styleProps.state &&
        css`
          box-shadow: ${palette(`${styleProps.state}Tint`, { dark: `${styleProps.state}Shade` })(styleProps)} 0px 0px
            0px 3px !important;
        `
      }
    }
    &[disabled] + .${iconClassName} {
      background-color: ${palette('white700', { dark: 'black200' })(styleProps)};
      box-shadow: unset;

      &::before {
        ${disabledUncheckedIconCss};
        & {
          ${theme(themeKey, `uncheckedDisabled`)(styleProps)};
        }
      }

      & {
        ${theme(themeKey, `disabled`)(styleProps)};
      }
    }
    &:focus + .${iconClassName} {
      border-color: ${palette(`${styleProps.palette || 'primary'}`, { dark: `${styleProps.palette || 'primary'}300` })(
        styleProps
      )};
      box-shadow: ${palette(`${styleProps.palette || 'primary'}100`, { dark: `${styleProps.palette || 'primary'}900` })(
        styleProps
      )} 0px 0px 0px 3px !important;

      & {
        ${theme(themeKey, `focusChecked`)(styleProps)};
      }
    }
    &:not([disabled]):checked + .${iconClassName} {
      border-color: ${palette(`${styleProps.palette || 'primary'}`, { dark: `${styleProps.palette || 'primary'}300` })(
        styleProps
      )};
      ${checkedCss};
    }
    &:checked + .${iconClassName} {
      ${disabledCheckedCss};

      &::before {
        ${checkedIconCss};
      }

      & {
        ${theme(themeKey, `checked`)(styleProps)};
      }
    }
    &[disabled]:checked + .${iconClassName}::before {
      ${disabledCheckedIconCss};

      & {
        ${theme(themeKey, `checkedDisabled`)(styleProps)};
      }
    }

    & {
      ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
    }
  `;
}
