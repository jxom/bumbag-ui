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
  themeKey
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
      ${styleProps.state &&
        css`
          border-color: ${palette(`${styleProps.state}`)(styleProps)};
        `}

      &::before {
        ${uncheckedIconCss};

        & {
          ${theme(`${themeKey}.unchecked`)(styleProps)};
        }
      }
    }
    &:not(:checked) + .${iconClassName} {
      ${styleProps.state &&
        css`
          box-shadow: ${palette(`${styleProps.state}Tint`)(styleProps)} 0px 0px 0px 3px !important;
        `}
    }
    &[disabled] + .${iconClassName} {
      background-color: ${palette('white700')(styleProps)};
      box-shadow: unset;

      &::before {
        ${disabledUncheckedIconCss};
        & {
          ${theme(`${themeKey}.uncheckedDisabled`)(styleProps)};
        }
      }

      & {
        ${theme(`${themeKey}.disabled`)(styleProps)};
      }
    }
    &:hover + .${iconClassName} {
      box-shadow: ${palette(`${styleProps.state || 'primary'}Tint`)(styleProps)} 0px 0px 0px 2px !important;
      border-color: ${palette(`${styleProps.state || 'primary'}100`)(styleProps)};
    }
    &:focus + .${iconClassName} {
      border-color: ${palette(`${styleProps.palette || 'primary'}`)(styleProps)};
      box-shadow: ${palette(`${styleProps.palette || 'primary'}100`)(styleProps)} 0px 0px 0px 3px !important;

      & {
        ${theme(`${themeKey}.focusChecked`)(styleProps)};
      }
    }
    &:not([disabled]):checked + .${iconClassName} {
      border-color: ${palette(`${styleProps.palette || 'primary'}`)(styleProps)};
      ${checkedCss};
    }
    &:checked + .${iconClassName} {
      ${disabledCheckedCss};

      &::before {
        ${checkedIconCss};
      }

      & {
        ${theme(`${themeKey}.checked`)(styleProps)};
      }
    }
    &[disabled]:checked + .${iconClassName}::before {
      ${disabledCheckedIconCss};

      & {
        ${theme(`${themeKey}.checkedDisabled`)(styleProps)};
      }
    }

    & {
      ${theme(`${styleProps.themeKey}.base`)(styleProps)};
    }
  `;
}
