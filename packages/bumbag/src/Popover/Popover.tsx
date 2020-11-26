import * as React from 'react';
import {
  Box as ReakitBox,
  PopoverProps as ReakitPopoverProps,
  usePopover as useReakitPopover,
  PopoverArrowProps as ReakitPopoverArrowProps,
  usePopoverArrow as useReakitPopoverArrow,
} from 'reakit';

import { AnimateProps } from '../types';
import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { ActionButtons, ActionButtonsProps } from '../ActionButtons';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Flex, FlexProps } from '../Flex';
import { Text, TextProps } from '../Text';

import { PopoverStateContext } from './PopoverState';
import * as styles from './Popover.styles';

export type LocalPopoverProps = {
  /** Sets the footer component of the popover. */
  footer?: string | React.ReactElement<any>;
  /** Indicates if the popover should have an arrow. */
  hasArrow?: boolean;
  /** Function to invoke when the popover is closed. */
  onClickClose?: ButtonProps['onClick'];
  /** Indicates if the action button should be visible. */
  showActionButtons?: boolean;
  /** Indicates if the close button should be visible. */
  showCloseButton?: boolean;
  /** Indicates if the action button should be visible. */
  title?: string | React.ReactElement<any>;
  /** Indicates if the popover should be rendered in a portal. */
  usePortal?: boolean;
  actionButtonsProps?: ActionButtonsProps;
  arrowProps?: PopoverArrowProps;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  standalone?: boolean;
} & AnimateProps;
export type PopoverProps = BoxProps & ReakitPopoverProps & LocalPopoverProps;

export type PopoverContextOptions = Omit<PopoverProps, 'baseId'> & {
  descriptionId?: string;
  titleId?: string;
  themeKey?: string;
};
export const PopoverContext = React.createContext<PopoverContextOptions>({});

const useProps = createHook<Partial<PopoverProps>>(
  (props, { themeKey }) => {
    const popoverContext = React.useContext(PopoverStateContext);
    props = { ...props, ...popoverContext.popover };

    const {
      actionButtonsProps = {},
      arrowProps = {},
      closeButtonProps = {},
      footer,
      hasArrow,
      hide,
      hideOnEsc,
      hideOnClickOutside,
      modal,
      onClickClose,
      overrides,
      preventBodyScroll,
      showActionButtons,
      showCloseButton,
      standalone,
      title,
      usePortal,
      visible,
      animating,
      animated,
      baseId,
      unstable_initialFocusRef,
      unstable_finalFocusRef,
      unstable_orphan,
      unstable_autoFocusOnHide,
      unstable_autoFocusOnShow,
      unstable_popoverRef,
      unstable_popoverStyles,
      stopAnimation,
      ...restProps
    } = props;
    const popoverProps = useReakitPopover(
      {
        hide,
        hideOnEsc,
        hideOnClickOutside,
        modal: process.env.NODE_ENV === 'test' ? false : usePortal || modal,
        preventBodyScroll,
        visible,
        animating,
        animated,
        baseId,
        unstable_initialFocusRef,
        unstable_finalFocusRef,
        unstable_orphan,
        unstable_autoFocusOnHide,
        unstable_autoFocusOnShow,
        unstable_popoverRef,
        unstable_popoverStyles,
        stopAnimation,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...popoverProps });

    const className = useClassName({
      style: styles.Popover,
      styleProps: { ...props, prevTransformValue: unstable_popoverStyles.transform },
      themeKey,
      prevClassName: boxProps.className,
    });
    const popoverCloseClassName = useClassName({
      style: styles.PopoverClose,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Close',
      prevClassName: closeButtonProps.className,
    });

    const titleId = useUniqueId();
    const descriptionId = useUniqueId();

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const handleClickClose = React.useCallback(
      (e) => {
        onClickClose && onClickClose(e);
        hide && hide();
      },
      [hide, onClickClose]
    );

    const children = (
      <PopoverContext.Provider value={context}>
        {standalone ? (
          props.children
        ) : (
          <React.Fragment>
            {hasArrow && (
              <PopoverArrow
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
            {title && (
              <PopoverHeader overrides={overrides}>
                {typeof title === 'string' ? <PopoverTitle overrides={overrides}>{title}</PopoverTitle> : title}
                {showCloseButton && (
                  <Button.Close
                    className={popoverCloseClassName}
                    onClick={handleClickClose}
                    size="small"
                    {...closeButtonProps}
                  />
                )}
              </PopoverHeader>
            )}
            <PopoverContent overrides={overrides}>{props.children}</PopoverContent>
            {(footer || showActionButtons) && (
              <PopoverFooter overrides={overrides}>
                {footer && <Box>{footer}</Box>}
                {showActionButtons && (
                  <Box>
                    <ActionButtons
                      {...actionButtonsProps}
                      onClickCancel={actionButtonsProps.onClickCancel || hide}
                      size="small"
                    />
                  </Box>
                )}
              </PopoverFooter>
            )}
          </React.Fragment>
        )}
      </PopoverContext.Provider>
    );

    return {
      'aria-describedby': props.children ? descriptionId : undefined,
      'aria-labelledby': props.title ? titleId : undefined,
      ...boxProps,
      children,
      className,
    };
  },
  {
    defaultProps: {
      duration: '150ms',
    },
    themeKey: 'Popover',
  }
);

export const Popover = createComponent<Partial<PopoverProps>>(
  (props) => {
    const popoverProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: popoverProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Popover',
    },
    themeKey: 'Popover',
  }
);

//////////////////////////////

export type LocalPopoverContentProps = {};
export type PopoverContentProps = BoxProps & LocalPopoverContentProps;

const usePopoverContentProps = createHook<PopoverContentProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverContent,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { id: props.id || contextProps.descriptionId, ...boxProps, className };
  },
  { themeKey: 'Popover.Content' }
);

export const PopoverContent = createComponent<PopoverContentProps>(
  (props) => {
    const calloutContentProps = usePopoverContentProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutContentProps,
    });
  },
  {
    attach: { useProps: usePopoverContentProps, displayName: 'Popover.Content' },
    themeKey: 'Popover.Content',
  }
);

//////////////////////////////

export type LocalPopoverHeaderProps = {};
export type PopoverHeaderProps = FlexProps & LocalPopoverHeaderProps;

const usePopoverHeaderProps = createHook<PopoverHeaderProps>(
  (props, { themeKey }) => {
    const flexProps = Flex.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverHeader,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: flexProps.className,
    });

    return { ...flexProps, className };
  },
  { themeKey: 'Popover.Header' }
);

export const PopoverHeader = createComponent<PopoverHeaderProps>(
  (props) => {
    const calloutHeaderProps = usePopoverHeaderProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutHeaderProps,
    });
  },
  {
    attach: { useProps: usePopoverHeaderProps, displayName: 'Popover.Header' },
    themeKey: 'Popover.Header',
  }
);

//////////////////////////////

export type LocalPopoverTitleProps = {};
export type PopoverTitleProps = TextProps & LocalPopoverTitleProps;

const usePopoverTitleProps = createHook<PopoverTitleProps>(
  (props, { themeKey }) => {
    const textProps = Text.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverTitle,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: textProps.className,
    });

    return { id: contextProps.titleId, ...textProps, className };
  },
  { themeKey: 'Popover.Title' }
);

export const PopoverTitle = createComponent<PopoverTitleProps>(
  (props) => {
    const calloutTitleProps = usePopoverTitleProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutTitleProps,
    });
  },
  {
    attach: { useProps: usePopoverTitleProps, displayName: 'Popover.Title' },
    defaultProps: {
      use: 'span',
    },
    themeKey: 'Popover.Title',
  }
);

//////////////////////////////

export type LocalPopoverFooterProps = {};
export type PopoverFooterProps = FlexProps & LocalPopoverFooterProps;

const usePopoverFooterProps = createHook<PopoverFooterProps>(
  (props, { themeKey }) => {
    const flexProps = Flex.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverFooter,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: flexProps.className,
    });

    return { ...flexProps, className };
  },
  { themeKey: 'Popover.Footer' }
);

export const PopoverFooter = createComponent<PopoverFooterProps>(
  (props) => {
    const calloutFooterProps = usePopoverFooterProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutFooterProps,
    });
  },
  {
    attach: { useProps: usePopoverFooterProps, displayName: 'Popover.Footer' },
    themeKey: 'Popover.Footer',
  }
);

//////////////////////////////

export type LocalPopoverArrowProps = {};
export type PopoverArrowProps = BoxProps & ReakitPopoverArrowProps & LocalPopoverArrowProps;

const usePopoverArrowProps = createHook<Partial<PopoverArrowProps>>(
  (props, { themeKey }) => {
    const popoverContext = React.useContext(PopoverStateContext);
    props = { ...props, ...popoverContext.popover };

    let { placement, size, unstable_arrowRef, unstable_arrowStyles, ...htmlProps } = props;

    const contextProps = React.useContext(PopoverContext);
    const popoverArrowProps = useReakitPopoverArrow(
      {
        // @ts-ignore
        placement: placement || contextProps.placement,
        size,
        // @ts-ignore
        unstable_arrowRef: unstable_arrowRef || contextProps.unstable_arrowRef,
        // @ts-ignore
        unstable_arrowStyles: unstable_arrowStyles || contextProps.unstable_arrowRef,
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...popoverArrowProps });

    const className = useClassName({
      style: styles.PopoverArrow,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return {
      ...htmlProps,
      className,
    };
  },
  { themeKey: 'Popover.Arrow' }
);

export const PopoverArrow = createComponent<Partial<PopoverArrowProps>>(
  (props) => {
    const popoverArrowProps = usePopoverArrowProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: popoverArrowProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Popover.Arrow',
    },
    themeKey: 'Popover.Arrow',
  }
);
