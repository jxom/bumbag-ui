import * as React from 'react';
import {
  Box as ReakitBox,
  useTooltip as useReakitTooltip,
  useTooltipArrow as useReakitTooltipArrow,
  useTooltipReference as useReakitTooltipReference,
  TooltipProps as ReakitTooltipProps,
  TooltipArrowProps as ReakitTooltipArrowProps,
  TooltipReferenceProps as ReakitTooltipReferenceProps
} from 'reakit';

import { Box, BoxProps } from '../Box';
import { AnimateProps } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';

import * as styles from './styles';

export type LocalTooltipProps = {
  hasArrow?: boolean;
  arrowProps?: TooltipArrowProps;
} & AnimateProps;
export type TooltipProps = BoxProps & ReakitTooltipProps & LocalTooltipProps;

const useProps = createHook<TooltipProps>(
  (props, themeKey) => {
    let {
      arrowProps,
      children,
      hasArrow,
      overrides,
      visible,
      unstable_hiddenId,
      unstable_animating,
      unstable_animated,
      unstable_popoverRef,
      unstable_popoverStyles,
      unstable_portal,
      unstable_stopAnimation,
      unstable_setIsMounted,
      ...restProps
    } = props;

    const tooltipProps = useReakitTooltip(
      {
        visible,
        unstable_hiddenId,
        unstable_animating,
        unstable_animated,
        unstable_popoverRef,
        unstable_popoverStyles,
        unstable_portal,
        unstable_stopAnimation,
        unstable_setIsMounted
      },
      restProps
    );
    const boxProps = Box.useProps({ ...props, ...tooltipProps });

    const className = useClassName({
      style: styles.Tooltip,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          {hasArrow && (
            <TooltipArrow
              overrides={overrides}
              // @ts-ignore
              placement={props.placement}
              // @ts-ignore
              unstable_arrowRef={props.unstable_arrowRef}
              // @ts-ignore
              unstable_arrowStyles={props.unstable_arrowStyles}
              {...arrowProps}
            />
          )}
          {children}
        </React.Fragment>
      )
    };
  },
  { themeKey: 'Tooltip' }
);

export const Tooltip = createComponent<TooltipProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Tooltip'
  }
);

////////////////////////////////////////////////////////////

export type LocalTooltipReferenceProps = {};
export type TooltipReferenceProps = BoxProps & ReakitTooltipReferenceProps & LocalTooltipReferenceProps;

const useTooltipReferenceProps = createHook<TooltipReferenceProps>(
  (props, themeKey) => {
    let { show, hide, unstable_referenceRef, unstable_hiddenId, ...restProps } = props;

    const tooltipReferenceProps = useReakitTooltipReference(
      {
        show,
        hide,
        unstable_referenceRef,
        unstable_hiddenId
      },
      restProps
    );
    const boxProps = Box.useProps({ ...props, ...tooltipReferenceProps });

    const className = useClassName({
      style: styles.TooltipReference,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Tooltip.Reference' }
);

export const TooltipReference = createComponent<TooltipReferenceProps>(
  props => {
    const tooltipReferenceProps = useTooltipReferenceProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: tooltipReferenceProps
    });
  },
  {
    attach: {
      useProps: useTooltipReferenceProps
    },
    themeKey: 'Tooltip.Reference'
  }
);

////////////////////////////////////////////////////////////

export type LocalTooltipArrowProps = {};
export type TooltipArrowProps = BoxProps & ReakitTooltipArrowProps & LocalTooltipArrowProps;

const useTooltipArrowProps = createHook<TooltipArrowProps>(
  (props, themeKey) => {
    let { unstable_arrowRef, unstable_arrowStyles, placement, size, ...restProps } = props;

    const tooltipArrowProps = useReakitTooltipArrow(
      {
        placement,
        size,
        unstable_arrowRef,
        unstable_arrowStyles
      },
      restProps
    );
    const boxProps = Box.useProps({ ...props, ...tooltipArrowProps });

    const className = useClassName({
      style: styles.TooltipArrow,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return {
      ...boxProps,
      className,
      children: (
        <svg viewBox="0 0 30 30">
          <path
            className="stroke"
            d="M23.7,27.1L17,19.9C16.5,19.3,15.8,19,15,19s-1.6,0.3-2.1,0.9l-6.6,7.2C5.3,28.1,3.4,29,2,29h26
    C26.7,29,24.6,28.1,23.7,27.1z"
          />
          <path
            className="fill"
            d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
          />
        </svg>
      )
    };
  },
  { themeKey: 'Tooltip.Arrow' }
);

export const TooltipArrow = createComponent<TooltipArrowProps>(
  props => {
    const tooltipArrowProps = useTooltipArrowProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: tooltipArrowProps
    });
  },
  {
    attach: {
      useProps: useTooltipArrowProps
    },
    themeKey: 'Tooltip.Arrow'
  }
);
