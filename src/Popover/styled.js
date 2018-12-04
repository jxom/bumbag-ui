import Popover from 'reakit/Popover';
import { theme } from 'styled-tools';
import styled from '../styled';
import Button from '../Button';

export const PopoverHide = styled(Popover.Hide)`
  ${theme('fannypack.Popover.Hide.base')};
`;

export const PopoverShow = styled(Popover.Show)`
  ${theme('fannypack.Popover.Show.base')};
`;

export const PopoverToggle = styled(Popover.Toggle)`
  ${theme('fannypack.Popover.Toggle.base')};
`;

export const PopoverClose = styled(Button)`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 0;
  top: 0;
  padding: 0px;
  text-align: right;

  ${theme('fannypack.Popover.Close.base')};
`;

export default styled(Popover)`
  display: block;

  ${theme('fannypack.Popover.base')};
`;
