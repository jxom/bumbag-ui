import { theme } from 'styled-tools';
import Sidebar from 'reakit/Sidebar';
import styled, { css, palette, space } from '../styled';
import Button from '../Button';
import { SidebarCloseProps } from './SidebarClose';
import { SidebarHideProps } from './SidebarHide';
import { SidebarShowProps } from './SidebarShow';
import { SidebarProps } from './Sidebar';

export const SidebarClose = styled(Button)<SidebarCloseProps>`
  position: fixed;
  min-height: 24px;
  padding: 0 ${space(1, 'minor')}rem;
  top: ${space(2, 'minor')}rem;

  ${props =>
    props.sidebarAlign === 'left'
      ? css`
          left: calc(${(props: any) => props.sidebarWidth} + ${space(2, 'minor')}rem);
        `
      : css`
          right: calc(${(props: any) => props.sidebarWidth} + ${space(2, 'minor')}rem);
        `};

  &:hover {
    color: ${palette('white700')};
    fill: ${palette('white700')};
  }

  & {
    ${theme('fannypack.Sidebar.Close.base')};
  }
`;

export const SidebarHide = styled(Sidebar.Hide)<SidebarHideProps>`
  ${theme('fannypack.Modal.Hide.base')};
`;

export const SidebarShow = styled(Sidebar.Show)<SidebarShowProps>`
  ${theme('fannypack.Modal.Show.base')};
`;

export default styled(Sidebar)<SidebarProps>`
  background-color: white;
  box-shadow: ${props => (props.align === 'left' ? '3px' : '-3px')} 0px 12px 0px rgba(0, 0, 0, 0.1);
  width: ${props => props.width};

  ${theme('fannypack.Modal.base')};
`;
