import _Tabs from 'reakit/Tabs';
import { palette, theme } from 'styled-tools';

import styled, { css, selector } from '../styled';
import { LocalTabsProps } from './Tabs';
import { LocalTabProps } from './Tab';
import { LocalTabPanelProps } from './TabPanel';

export const TabPanel = styled(_Tabs.Panel)<LocalTabPanelProps>`
  & {
    ${theme('fannypack.Tabs.Panel.base')};
  }
`;

export const Tab = styled(_Tabs.Tab)<LocalTabProps>`
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 2.5em;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5rem;

  &.active {
    background-color: white;
    color: ${palette('primary')};
    fill: ${palette('primary')};
    ${theme('fannypack.Tabs.Tab.active')};
  }
  &:focus {
    outline: none;
    ${theme('fannypack.Tabs.Tab.focus')};
  }
  &:not(.active):hover {
    background-color: ${palette('white700')};
    border-bottom: 1px solid ${palette('textTint')};
    ${theme('fannypack.Tabs.Tab.hover')};
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  & {
    ${theme('fannypack.Tabs.Tab.base')};
  }
`;

const alignPropeties: any = {
  center: css`
    justify-content: center;
  `,
  right: css`
    justify-content: flex-end;
  `
};

export const Tabs = styled(_Tabs)<LocalTabsProps>`
  align-items: center;
  border-bottom: 1px solid ${palette('textTint')};
  display: flex;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  list-style: none;

  ${props =>
    props.isFitted &&
    css`
      & ${selector(Tab)} {
        flex: 1;
      }
    `};

  & ${selector(Tab)} {
    ${props =>
      props.type === 'default' &&
      css`
        & {
          ${theme('fannypack.Tabs.Tab.default.base')};
        }
      `};

    ${props =>
      props.type === 'boxed' &&
      css`
        border: 1px solid transparent;
        & {
          ${theme('fannypack.Tabs.Tab.boxed.base')};
        }
      `};
  }
  & ${selector(Tab)}.active {
    ${props =>
      props.type === 'default' &&
      css`
        box-shadow: inset 0 -2px 0 0 ${palette('primary')};
        & {
          ${theme('fannypack.Tabs.Tab.default.active')};
        }
      `};
    ${props =>
      props.type === 'boxed' &&
      css`
        border: 1px solid ${palette('textTint')};
        border-bottom-color: transparent;
        & {
          ${theme('fannypack.Tabs.Tab.boxed.active')};
        }
      `};
  }

  & {
    ${props => props.align && alignPropeties[props.align || '']};
  }

  & {
    ${theme('fannypack.Tabs.base')};
  }
`;

export default Tabs;
