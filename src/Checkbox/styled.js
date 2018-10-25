// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { tint } from 'polished';
import Label from 'reakit/Label';
import Input from 'reakit/Input';

import { Box } from '../primitives';

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
        border-color: ${props => tint(0.3, palette(props.state)(props))};
        box-shadow: ${props => tint(0.3, palette(props.state)(props))} 0px 0px 0px 1px !important;
      `};
  }

  & {
    ${theme('Checkbox.icon.base')};
  }
`;
export const HiddenInput = styled(Input)`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;

  &[disabled] + ${CheckboxIcon} {
    background-color: ${palette('whiteDarker')};
    box-shadow: unset;

    & {
      ${theme('Checkbox.icon.disabled')};
    }
  }
  &:focus + ${CheckboxIcon} {
    border-color: ${props => tint(0.3, palette('primary')(props))};
    box-shadow: ${props => tint(0.3, palette('primary')(props))} 0px 0px 0px 1px !important;

    & {
      ${theme('Checkbox.icon.focus')};
    }
  }
  &:checked + ${CheckboxIcon} {
    border-color: ${props => tint(0.3, palette('primary')(props))};

    & {
      ${props =>
        props.state &&
        css`
          box-shadow: ${props => tint(0.3, palette('primary')(props))} 0px 0px 0px 1px !important;
        `};
    }

    &::before {
      background-clip: padding-box;
      border: 0.1rem solid ${props => tint(0.3, palette('primary')(props))};
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

      & {
        ${theme('Checkbox.icon.tick')};
      }
    }

    & {
      ${theme('Checkbox.icon.checked')};
    }
  }
`;

export default styled(Label)`
  display: flex;
  align-items: center;

  ${theme('Checkbox.base')};
`;
