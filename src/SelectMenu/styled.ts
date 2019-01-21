import styled, { css, palette, space, theme } from '../styled';
import { Box, Flex } from '../primitives';
import Button from '../Button';
import Icon from '../Icon';
import Input from '../Input';
import Menu from '../Menu';
import Spinner from '../Spinner';
import Tag from '../Tag';
import { MenuGroupTitle } from '../Menu/styled';

export const SelectMenuItem = styled(Menu.Item)`
  font-weight: ${theme('fannypack.fontWeights.normal')};

  &[disabled] {
    ${theme('fannypack.SelectMenu.Item.disabled')};
  }

  &:not(:disabled):focus {
    ${theme('fannypack.SelectMenu.Item.focus')};
  }

  &:not(:disabled):hover {
    ${theme('fannypack.SelectMenu.Item.hover')};
  }

  ${props =>
    props.isActive &&
    css`
      background-color: ${palette('primary')};
      color: ${palette('white')};

      &&:hover,
      &&:focus {
        background-color: ${palette('primary600')};
      }

      &&:hover:active {
        background-color: ${palette('primary700')};
      }

      & {
        ${theme('fannypack.SelectMenu.Item.active')};
      }
    `};

  ${theme('fannypack.SelectMenu.Item.base')};
`;

export const SelectMenuIcon = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 2px;
  z-index: 1;
  fill: ${palette('text')};

  ${theme('fannypack.SelectMenu.Icon.base')};
`;

export const SelectMenuLoadingSpinner = styled(Spinner)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 12px;
  right: 7px;
  z-index: 1;

  ${theme('fannypack.SelectMenu.LoadingSpinner.base')};
`;

export const SelectMenuStaticItem = styled(Flex)`
  justify-content: center;
  padding: 0.5rem 0;

  ${theme('fannypack.SelectMenu.StaticItem.base')};
`;

export const SelectMenuLoadingItemSpinner = styled(Spinner)`
  width: 15px;
  height: 15px;

  ${theme('fannypack.SelectMenu.LoadingItemSpinner.base')};
`;

export const SelectMenuButton = styled(Menu.Button)`
  background: linear-gradient(rgb(255, 255, 255), rgb(249, 250, 251));
  padding-right: ${space(8)}rem;
  font-weight: ${theme('fannypack.fontWeights.normal')};

  ${theme('fannypack.SelectMenu.Button.base')};
`;

export const SelectMenuDivider = styled(Menu.Divider)`
  ${theme('fannypack.SelectMenu.Divider.base')};
`;

export const SelectMenuGroup = styled(Menu.Group)<{ isDropdown?: boolean; isMultiSelect?: boolean }>`
  margin: 0;
  overflow-y: scroll;
  max-height: 300px;

  ${props =>
    props.isDropdown &&
    css`
      & {
        max-height: 230px;
      }
    `};

  ${theme('fannypack.SelectMenu.Group.base')};
`;

export const SelectMenuGroupTitle = styled(MenuGroupTitle)`
  ${theme('fannypack.SelectMenu.Group.title')};
`;

export const SelectMenuItemIcon = styled(Icon)`
  ${theme('fannypack.SelectMenu.Item.icon')};
`;

export const SelectMenuPopover = styled(Menu.Popover)`
  width: 250px;

  ${theme('fannypack.SelectMenu.Popover.base')};
`;

export const SelectMenuSearchInput = styled(Input)`
  border: none;
  border-bottom: 1px solid ${palette('white900')};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: none;
  width: 100%;

  &:focus {
    border-bottom: none;
    box-shadow: ${(props: any) => palette('primary')(props)} inset 0px 0px 0px 2px !important;
  }
`;

export const SelectMenuSection = styled(Box)`
  background: ${palette('white600')};
  width: 100%;
`;
export const SelectMenuBottomSection = styled(SelectMenuSection)`
  border-top: 1px solid ${palette('white900')};
  display: flex;
  justify-content: space-between;
  padding: ${space(1)}rem ${space(2)}rem;

  ${theme('fannypack.SelectMenu.BottomSection.base')};
`;
export const SelectMenuTopSection = styled(SelectMenuSection)`
  border-bottom: 1px solid ${palette('white900')};
  padding: ${space(2)}rem;

  ${theme('fannypack.SelectMenu.TopSection.base')};
`;

export const SelectMenuActionButton = styled(Button)`
  font-size: ${theme('fannypack.fontSizes.100')}rem;
  padding: 0 ${space(2)}rem;

  ${theme('fannypack.SelectMenu.ActionButton.base')};
`;

export const SelectMenuTag = styled(Tag)`
  ${theme('fannypack.SelectMenu.Tag.base')};
`;

export default styled(Menu)`
  ${theme('fannypack.SelectMenu.base')};
`;
