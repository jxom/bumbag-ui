import { palette, theme } from 'styled-tools';
import Label from 'reakit/Label';

import { Box } from '../primitives';
import styled, { css } from '../styled';
import HiddenInput from '../_utils/HiddenInput';
import { LocalCheckboxProps } from './Checkbox';

export const CheckboxIcon = styled(Box)<{ state?: string }>`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 0.2em;
  height: 1em;
  position: relative;
  width: 1em;

  & {
    ${props =>
      props.state &&
      css`
        border-color: ${(props: any) => palette(`${props.state}`)(props)};
        box-shadow: ${(props: any) => palette(`${props.state}`)(props)} 0px 0px 0px 1px !important;
      `};
  }

  & {
    ${theme('fannypack.Checkbox.base')};
  }
`;

export const HiddenCheckbox = HiddenInput<LocalCheckboxProps>({
  Icon: CheckboxIcon,
  checkedIconCss: css<{ indeterminate?: boolean }>`
    background-clip: padding-box;
    content: '';
    left: calc(50% - 0.1875em);
    top: calc(50% - 0.375em);
    position: absolute;

    & {
      ${props =>
        props.indeterminate
          ? css`
              background-color: ${palette('primary')};
              height: 0.125em;
              width: 0.625em;
              top: calc(50% - 0.0625em);
              left: calc(50% - 0.3125em);
            `
          : css`
              border: 0.1em solid ${palette('primary')};
              border-left-width: 0;
              border-top-width: 0;
              height: 0.625em;
              transform: rotate(45deg);
              width: 0.375em;
            `};
    }
  `,
  disabledCheckedIconCss: css`
    border-color: ${palette('gray300')};
  `,
  themePrefix: 'Checkbox'
});

export const Checkbox = styled(Label)`
  display: flex;
  align-items: center;

  & {
    ${theme('fannypack.Checkbox.label')};
  }
`;

export default Checkbox;
