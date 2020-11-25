import * as React from 'react';
import {
  Box as ReakitBox,
  DisclosureProps as ReakitDisclosureProps,
  useDisclosure as useReakitDisclosure,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { DisclosureContext } from './DisclosureState';
import * as styles from './Disclosure.styles';

export type LocalDisclosureProps = {};
export type DisclosureProps = BoxProps & ReakitDisclosureProps & LocalDisclosureProps;

const useProps = createHook<DisclosureProps>(
  (props, { themeKey }) => {
    const disclosureContext = React.useContext(DisclosureContext);
    props = { ...props, ...disclosureContext.disclosure };

    let { disabled, focusable, visible, toggle, baseId, ...htmlProps } = props;
    const DisclosureProps = useReakitDisclosure({ disabled, focusable, visible, toggle, baseId }, htmlProps);
    htmlProps = Box.useProps({ ...htmlProps, ...DisclosureProps });

    const className = useClassName({
      style: styles.Disclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Disclosure' }
);

export const Disclosure = createComponent<DisclosureProps>(
  (props) => {
    const DisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DisclosureProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Disclosure',
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'Disclosure',
  }
);
