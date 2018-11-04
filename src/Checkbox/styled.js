// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { tint } from 'polished';
import Label from 'reakit/Label';

import { Box } from '../primitives';
import HiddenInput from '../_utils/HiddenInput';

export const CheckboxIcon = styled(Box)`
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
    ${theme('fannypack.Checkbox.icon.base')};
  }
`;

export const HiddenCheckbox = HiddenInput({
  Icon: CheckboxIcon,
  checkedIconCss: css`
    background-clip: padding-box;
    border: 0.1rem solid ${palette('primaryLighter')};
    border-left-width: 0;
    border-top-width: 0;
    content: '';
    height: 10px;
    left: 50%;
    margin-left: -3px;
    margin-top: -6px;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 6px;
  `,
  disabledCss: css`
    border-color: ${palette('grayLighter')};
  `,
  themePrefix: 'Checkbox'
});

export default styled(Label)`
  display: flex;
  align-items: center;

  ${theme('fannypack.Checkbox.base')};
`;
