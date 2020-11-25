import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Disclosure, DisclosureProps } from '../Disclosure';
import { DrawerDisclosure, DrawerDisclosureProps } from '../Drawer';

import { usePage } from './usePage';
import * as styles from './Page.styles';

export type LocalPageWithHeaderDisclosureProps = {};
export type PageWithHeaderDisclosureProps = BoxProps & LocalPageWithHeaderDisclosureProps;

const useProps = createHook<PageWithHeaderDisclosureProps>(
  (props, { themeKey }) => {
    const page = usePage();
    const htmlProps = Disclosure.useProps({
      ...props,
      ...page.header.disclosure,
    });

    const className = useClassName({
      style: styles.PageWithHeaderDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'PageWithHeader.Disclosure' }
);

export const PageWithHeaderDisclosure = createComponent<PageWithHeaderDisclosureProps>(
  (props) => {
    const PageWithHeaderDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: PageWithHeaderDisclosureProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'PageWithHeader.Disclosure',
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'PageWithHeader.Disclosure',
  }
);
