import { SectionListProps as RNSectionListProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './List.styles';

export type LocalListSectionProps = {};
export type ListSectionProps = BoxProps & RNSectionListProps<unknown> & LocalListSectionProps;

const useProps = createHook<ListSectionProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'native.List.Section' }
);

export const ListSection = createComponent<ListSectionProps>(
  (props) => {
    const listProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledListSection,
      htmlProps: listProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.List.Section',
    },
    themeKey: 'native.List.Section',
  }
);
