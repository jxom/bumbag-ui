import { palette, theme } from 'styled-tools';
import Input from '@jmoxey/reakit/Input';

import styled, { css } from '../styled';

function HiddenInput<T>({
  Icon,
  checkedCss,
  disabledCheckedCss,
  disabledCheckedIconCss,
  disabledUncheckedIconCss,
  checkedIconCss,
  uncheckedIconCss,
  themePrefix
}: any) {
  return styled(Input)<T>`
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    position: absolute;
    width: 1px;

    & + ${Icon} {
      &::before {
        ${uncheckedIconCss};

        & {
          ${theme(`fannypack.${themePrefix}.icon.unchecked`)};
        }
      }
    }
    &[disabled] + ${Icon} {
      background-color: ${palette('whiteDarker')};
      box-shadow: unset;

      &::before {
        ${disabledUncheckedIconCss};
        & {
          ${theme(`fannypack.${themePrefix}.icon.uncheckedDisabled`)};
        }
      }

      & {
        ${theme(`fannypack.${themePrefix}.disabled`)};
      }
    }
    &:checked:focus + ${Icon} {
      border-color: ${(props: any) => palette(`${props.palette || 'primary'}Lighter`)};
      box-shadow: ${(props: any) => palette(`${props.palette || 'primary'}Lighter`)} 0px 0px 0px 1px !important;

      & {
        ${theme(`fannypack.${themePrefix}.focusChecked`)};
      }
    }
    &:focus + ${Icon} {
      border-color: ${palette('primaryLighter')};
      box-shadow: ${palette('primaryLighter')} 0px 0px 0px 1px !important;

      & {
        ${theme(`fannypack.${themePrefix}.focus`)};
      }
    }
    &:not([disabled]):checked + ${Icon} {
      border-color: ${(props: any) => palette(`${props.palette || 'primary'}Lighter`)};
      ${checkedCss};
    }
    &:checked + ${Icon} {
      ${disabledCheckedCss};

      & {
        ${(props: any) =>
          props.state &&
          css`
            box-shadow: ${palette('primaryLighter')} 0px 0px 0px 1px !important;
          `};
      }

      &::before {
        ${checkedIconCss};
        ${theme(`fannypack.${themePrefix}.icon.checked`)};
      }

      & {
        ${theme(`fannypack.${themePrefix}.checked`)};
      }
    }
    &[disabled]:checked + ${Icon}::before {
      ${disabledCheckedIconCss};

      & {
        ${theme(`fannypack.${themePrefix}.icon.checkedDisabled`)};
      }
    }
  `;
}

export default HiddenInput;
