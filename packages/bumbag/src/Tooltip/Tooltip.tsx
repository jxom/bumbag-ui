import * as React from 'react';
import {
  Box as ReakitBox,
  useTooltip as useReakitTooltip,
  useTooltipArrow as useReakitTooltipArrow,
  useTooltipReference as useReakitTooltipReference,
  TooltipProps as ReakitTooltipProps,
  TooltipArrowProps as ReakitTooltipArrowProps,
  TooltipReferenceProps as ReakitTooltipReferenceProps,
} from 'reakit';

import { Box, BoxProps } from '../Box';
import { AnimateProps, Placement } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';

import { TooltipInitialState, useTooltipState } from './TooltipState';
import * as styles from './Tooltip.styles';

export type LocalTooltipProps = {
  content: string | React.ReactElement<any>;
  placement?: Placement;
  baseId?: string;
  tooltipContentProps?: TooltipContentProps;
  tooltipState?: TooltipInitialState;
} & LocalTooltipContentProps;
export type TooltipProps = BoxProps & LocalTooltipProps;

const useProps = createHook<TooltipProps>(
  (props) => {
    let {
      arrowProps,
      children,
      content,
      expand,
      fade,
      hasArrow,
      overrides,
      placement,
      slide,
      baseId,
      tooltipContentProps,
      tooltipState,
    } = props;

    const boxProps = Box.useProps({ ...props, content: undefined });
    // @ts-ignore
    const tooltip = useTooltipState({ placement, animated: expand || fade || slide, baseId, ...tooltipState });

    return {
      children: (
        <React.Fragment>
          <TooltipReference overrides={overrides} {...boxProps} {...tooltip}>
            {React.isValidElement(children)
              ? /*
                // @ts-ignore */
                (referenceProps) => React.cloneElement(children, { ...referenceProps, ...children.props })
              : children}
          </TooltipReference>
          <TooltipContent
            arrowProps={arrowProps}
            expand={expand}
            fade={fade}
            hasArrow={hasArrow}
            overrides={overrides}
            slide={slide}
            {...tooltipContentProps}
            {...tooltip}
          >
            {content}
          </TooltipContent>
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Tooltip', defaultProps: { placement: 'top' } }
);

export const Tooltip = createComponent<TooltipProps>(
  (props) => {
    const tooltipProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tooltipProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Tooltip',
    },
    themeKey: 'Tooltip',
  }
);

////////////////////////////////////////////////////////////

export type LocalTooltipContentProps = {
  hasArrow?: boolean;
  arrowProps?: TooltipArrowProps;
} & AnimateProps;
export type TooltipContentProps = BoxProps & ReakitTooltipProps & LocalTooltipContentProps;

const useTooltipContentProps = createHook<TooltipContentProps>(
  (props, { themeKey }) => {
    let {
      arrowProps,
      children,
      hasArrow,
      overrides,
      visible,
      baseId,
      animating,
      animated,
      unstable_popoverRef,
      unstable_popoverStyles,
      unstable_portal,
      stopAnimation,
      ...restProps
    } = props;

    const tooltipProps = useReakitTooltip(
      {
        visible,
        baseId,
        animating,
        animated,
        unstable_popoverRef,
        unstable_popoverStyles,
        unstable_portal,
        stopAnimation,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...props, ...tooltipProps });

    const className = useClassName({
      style: styles.TooltipContent,
      styleProps: { ...props, prevTransformValue: unstable_popoverStyles.transform },
      themeKey,
      prevClassName: boxProps.className,
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
      ),
    };
  },
  { themeKey: 'Tooltip.Content' }
);

export const TooltipContent = createComponent<TooltipContentProps>(
  (props) => {
    const tooltipContentProps = useTooltipContentProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: tooltipContentProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Tooltip.Content',
    },
    themeKey: 'Tooltip.Content',
  }
);

////////////////////////////////////////////////////////////

export type LocalTooltipReferenceProps = {};
export type TooltipReferenceProps = BoxProps & ReakitTooltipReferenceProps & LocalTooltipReferenceProps;

const useTooltipReferenceProps = createHook<TooltipReferenceProps>(
  (props, { themeKey }) => {
    let { show, hide, unstable_referenceRef, baseId, ...restProps } = props;

    const tooltipReferenceProps = useReakitTooltipReference(
      {
        show,
        hide,
        unstable_referenceRef,
        baseId,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...props, ...tooltipReferenceProps });

    const className = useClassName({
      style: styles.TooltipReference,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Tooltip.Reference' }
);

export const TooltipReference = createComponent<TooltipReferenceProps>(
  (props) => {
    const tooltipReferenceProps = useTooltipReferenceProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: tooltipReferenceProps,
    });
  },
  {
    attach: {
      useProps: useTooltipReferenceProps,
      displayName: 'Tooltip.Reference',
    },
    themeKey: 'Tooltip.Reference',
  }
);

////////////////////////////////////////////////////////////

export type LocalTooltipArrowProps = {};
export type TooltipArrowProps = BoxProps & ReakitTooltipArrowProps & LocalTooltipArrowProps;

const useTooltipArrowProps = createHook<TooltipArrowProps>(
  (props, { themeKey }) => {
    let { unstable_arrowRef, unstable_arrowStyles, placement, size, ...restProps } = props;

    const tooltipArrowProps = useReakitTooltipArrow(
      {
        placement,
        size,
        unstable_arrowRef,
        unstable_arrowStyles,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...props, ...tooltipArrowProps });

    const className = useClassName({
      style: styles.TooltipArrow,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return {
      ...boxProps,
      className,
    };
  },
  { themeKey: 'Tooltip.Arrow' }
);

export const TooltipArrow = createComponent<TooltipArrowProps>(
  (props) => {
    const tooltipArrowProps = useTooltipArrowProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: tooltipArrowProps,
    });
  },
  {
    attach: {
      useProps: useTooltipArrowProps,
      displayName: 'Tooltip.Arrow',
    },
    themeKey: 'Tooltip.Arrow',
  }
);
