import ReakitButton from 'reakit/Button';

import { Box } from '../primitives';
import styled, { css, palette, space, theme } from '../styled';
import Button from '../Button';
import Navigation from '../Navigation';
import Divider from '../Divider';
import Popover from '../Popover';
import Icon from '../Icon/Icon';
import StyledIcon from '../Icon/styled';
import { LocalMenuProps } from './Menu';
import { LocalMenuItemProps } from './MenuItem';

export const MenuItem = styled(ReakitButton)<LocalMenuItemProps>`
  background-color: unset;
  cursor: pointer;
  display: block;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  padding: ${space(1.5)}rem ${space(4)}rem;
  text-align: left;
  width: 100%;

  a& {
    color: unset;
    fill: unset;
    text-decoration: unset;

    &:hover {
      color: unset;
      fill: unset;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;

    & {
      ${theme('fannypack.Menu.Item.disabled')};
    }
  }

  &:not(:disabled):focus {
    outline: unset;
    background-color: ${palette('white600')};

    & {
      ${theme('fannypack.Menu.Item.focus')};
    }
  }
  &:not(:disabled):hover {
    background-color: ${palette('white600')};

    & {
      ${theme('fannypack.Menu.Item.hover')};
    }
  }
  &:not(:disabled):focus:active,
  &:not(:disabled):hover:active {
    background-color: ${palette('white700')};
  }

  ${props =>
    props.isActive &&
    css`
      background-color: ${palette('white700')};

      &&:hover,
      &&:focus {
        background-color: ${palette('white800')};
      }

      & {
        ${theme('fannypack.Menu.Item.active')};
      }
    `}

  & ${StyledIcon} {
    top: 0.15em;
  }

  & {
    ${theme('fannypack.Menu.Item.base')};
  }
`;

export const MenuButton = styled(Button)`
  & {
    ${theme('fannypack.Menu.Button.base')};
  }
`;

export const MenuDivider = styled(Divider)`
  margin: 0;
  width: 100%;

  & {
    ${theme('fannypack.Menu.Divider.base')};
  }
`;

export const MenuIcon = styled(Icon)`
  margin-right: ${space(2)}rem;

  & {
    ${theme('fannypack.Menu.Item.icon')};
  }
`;

export const MenuGroup = styled(Box)`
  margin: ${space(2)}rem 0;
  width: 100%;

  & {
    ${theme('fannypack.Menu.Group.base')};
  }
`;

export const MenuGroupTitle = styled(Box)`
  color: ${palette('text200')};
  font-size: ${theme('fannypack.fontSizes.100')}rem;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  letter-spacing: 1px;
  padding: ${space(2)}rem ${space(4)}rem;
  padding-top: ${space(1)}rem;
  text-transform: uppercase;

  & {
    ${theme('fannypack.Menu.Group.title')};
  }
`;

export const MenuPopover = styled(Popover)`
  padding: 0px;
  width: 200px;

  & {
    ${theme('fannypack.Menu.Popover.base')};
  }
`;

export default styled(Navigation)<LocalMenuProps>`
  display: flex;
  align-items: flex-start;

  ${props =>
    props.isHorizontal
      ? css`
          flex-direction: row;

          & ${MenuGroup} {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }

          & ${MenuItem} {
            width: unset;
          }

          & {
            ${theme('fannypack.Menu.horizontal')};
          }
        `
      : css`
          flex-direction: column;

          & {
            ${theme('fannypack.Menu.vertical')};
          }
        `};

  & {
    ${theme('fannypack.Menu.base')};
  }
`;
