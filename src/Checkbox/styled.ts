// @flow
import { palette, theme } from 'styled-tools';
// @ts-ignore
import Label from '@jmoxey/reakit/Label';

import { Box } from '../primitives';
import { styled, css } from '../styled';
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
        border-color: ${props => palette(`${props.state}Lighter`)(props)};
        box-shadow: ${props => palette(`${props.state}Lighter`)(props)} 0px 0px 0px 1px !important;
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
    left: calc(50% - 3px);
    top: calc(50% - 6px);
    position: absolute;

    & {
      ${props =>
        props.indeterminate
          ? css`
              background-color: #7467c0;
              height: 2px;
              width: 10px;
              top: calc(50% - 1px);
              left: calc(50% - 5px);
            `
          : css`
              border: 0.1rem solid ${palette('primaryLighter')};
              border-left-width: 0;
              border-top-width: 0;
              height: 10px;
              transform: rotate(45deg);
              width: 6px;
            `};
    }
  `,
  disabledCheckedIconCss: css`
    border-color: ${palette('grayLighter')};
  `,
  themePrefix: 'Checkbox'
});

export default styled(Label)`
  display: flex;
  align-items: center;

  & {
    ${theme('fannypack.Checkbox.label')};
  }
`;
