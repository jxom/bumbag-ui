// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { tint } from 'polished';
import Label from 'reakit/Label';

import { Box } from '../primitives';
import HiddenInput from '../_utils/HiddenInput';

export const SwitchIcon = styled(Box)`
  background-color: ${palette('whiteDarker')};
  border: 1px solid #bdbdbd;
  border-radius: 1em;
  height: 1.5em;
  position: relative;
  width: 3em;

  & {
    ${props =>
      props.state &&
      css`
        border-color: ${props => palette(`${props.state}Lighter`)};
        box-shadow: ${props => palette(`${props.state}Lighter`)} 0px 0px 0px 1px !important;
      `};
  }

  & {
    ${theme('fannypack.Switch.base')};
  }
`;

export const HiddenSwitch = HiddenInput({
  Icon: SwitchIcon,
  checkedCss: css`
    background-color: ${props => palette(props.palette || 'primary')};
    transition: all ease 0.2s;
  `,
  disabledCheckedCss: css`
    background-color: ${props => tint(0.5, palette(props.palette || 'primary')(props))};
    border-color: ${props => tint(0.5, palette(props.palette || 'primary')(props))};
  `,
  disabledUncheckedIconCss: css`
    background: ${palette('whiteDarker')};
  `,
  checkedIconCss: css`
    border-color: ${props => palette(props.palette || 'primary')};
    left: 1.7em;
  `,
  disabledCheckedIconCss: css`
    border-color: ${props => tint(0.5, palette(props.palette || 'primary')(props))};
  `,
  uncheckedIconCss: css`
    background: white;
    content: '';
    border-radius: 100%;
    border: 1px solid #bdbdbd;
    height: 1em;
    width: 1em;
    top: 0.2em;
    left: 0.2em;
    transition: all ease 0.2s;
    position: absolute;
  `,
  themePrefix: 'Switch'
});

export default styled(Label)`
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;

  & {
    ${theme('fannypack.Switch.label')};
  }
`;
