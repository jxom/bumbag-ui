import * as React from 'react';
import {
  Box as ReakitBox,
  PopoverDisclosureProps as ReakitPopoverDisclosureProps,
  usePopoverDisclosure as useReakitPopoverDisclosure,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { PopoverStateContext } from './PopoverState';
import * as styles from './Popover.styles';

export type LocalPopoverDisclosureProps = {};
export type PopoverDisclosureProps = BoxProps & ReakitPopoverDisclosureProps & LocalPopoverDisclosureProps;

const useProps = createHook<Partial<PopoverDisclosureProps>>(
  (props, { themeKey }) => {
    const popoverContext = React.useContext(PopoverStateContext);
    props = { ...props, ...popoverContext.popover };

    let { disabled, focusable, visible, toggle, baseId, unstable_referenceRef, ...htmlProps } = props;
    const popoverDisclosureProps = useReakitPopoverDisclosure(
      { disabled, focusable, visible, toggle, baseId, unstable_referenceRef },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...popoverDisclosureProps });

    const className = useClassName({
      style: styles.PopoverDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Popover.Disclosure' }
);

export const PopoverDisclosure = createComponent<Partial<PopoverDisclosureProps>>(
  (props) => {
    const popoverDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: popoverDisclosureProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Popover.Disclosure',
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'Popover.Disclosure',
  }
);
