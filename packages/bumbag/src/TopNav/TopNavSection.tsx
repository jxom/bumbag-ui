import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { List, ListProps } from '../List';

import { TopNavContext } from './TopNav';
import * as styles from './TopNav.styles';

export type LocalTopNavSectionProps = {};
export type TopNavSectionProps = ListProps & LocalTopNavSectionProps;

const useProps = createHook<TopNavSectionProps>(
  (props, { themeKey }) => {
    const { children, overrides, title, ...restProps } = props;

    const listProps = List.useProps({ ...restProps, orientation: 'horizontal' });

    const { overrides: topNavOverrides } = React.useContext(TopNavContext);

    const className = useClassName({
      style: styles.TopNavSection,
      styleProps: { ...props, overrides: { ...topNavOverrides, ...overrides } },
      themeKey,
      prevClassName: listProps.className,
    });

    return {
      ...listProps,
      className,
    };
  },
  { themeKey: 'TopNav.Section' }
);

export const TopNavSection = createComponent<TopNavSectionProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'TopNav.Section',
    },
    defaultProps: {
      use: 'ul',
    },
    themeKey: 'TopNav.Section',
  }
);
