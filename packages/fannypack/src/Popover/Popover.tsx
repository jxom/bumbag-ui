import * as React from 'react';
import {
  Box as ReakitBox,
  PopoverProps as ReakitPopoverProps,
  usePopover as useReakitPopover,
  PopoverArrowProps as ReakitPopoverArrowProps,
  usePopoverArrow as useReakitPopoverArrow
} from 'reakit';
import _omit from 'lodash/omit';

import { AnimateProps } from '../types';
import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { ActionButtons, ActionButtonsProps } from '../ActionButtons';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Text, TextProps } from '../Text';

import * as styles from './styles';

export type LocalPopoverProps = {
  footer?: string | React.ReactElement<any>;
  hasArrow?: boolean;
  onClickClose?: ButtonProps['onClick'];
  showActionButtons?: boolean;
  showCloseButton?: boolean;
  title?: string | React.ReactElement<any>;
  usePortal?: boolean;
  standalone?: boolean;
  actionButtonsProps?: ActionButtonsProps;
  arrowProps?: PopoverArrowProps;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
} & AnimateProps;
export type PopoverProps = BoxProps & ReakitPopoverProps & LocalPopoverProps;

export type PopoverContextOptions = Omit<PopoverProps, 'baseId'> & {
  descriptionId?: string;
  titleId?: string;
  themeKey?: string;
};
export const PopoverContext = React.createContext<PopoverContextOptions>({});

const useProps = createHook<PopoverProps>(
  (props, themeKey) => {
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
      unstable_animating,
      unstable_animated,
      baseId,
      unstable_initialFocusRef,
      unstable_finalFocusRef,
      unstable_portal,
      unstable_orphan,
      unstable_autoFocusOnHide,
      unstable_autoFocusOnShow,
      unstable_popoverRef,
      unstable_popoverStyles,
      unstable_stopAnimation,
      unstable_setIsMounted,
      ...restProps
    } = props;
    const popoverProps = useReakitPopover(
      {
        hide,
        hideOnEsc,
        hideOnClickOutside,
        modal: usePortal || modal,
        preventBodyScroll,
        visible,
        unstable_animating,
        unstable_animated,
        baseId,
        unstable_initialFocusRef,
        unstable_finalFocusRef,
        unstable_portal,
        unstable_orphan,
        unstable_autoFocusOnHide,
        unstable_autoFocusOnShow,
        unstable_popoverRef,
        unstable_popoverStyles,
        unstable_stopAnimation,
        unstable_setIsMounted
      },
      restProps
    );
    const boxProps = Box.useProps({ ...props, ...popoverProps });

    const className = useClassName({
      style: styles.Popover,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });
    const popoverCloseClassName = useClassName({
      style: styles.PopoverClose,
      styleProps: props,
      themeKey: 'Popover.Close',
      prevClassName: closeButtonProps.className
    });

    const titleId = useUniqueId('popoverTitle');
    const descriptionId = useUniqueId('popoverContent');

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const handleClickClose = React.useCallback(
      e => {
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
      className
    };
  },
  {
    defaultProps: {
      duration: '150ms'
    },
    themeKey: 'Popover'
  }
);

export const Popover = createComponent<PopoverProps>(
  props => {
    const popoverProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: popoverProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Popover'
  }
);

//////////////////////////////

export type LocalPopoverContentProps = {};
export type PopoverContentProps = BoxProps & LocalPopoverContentProps;

const usePopoverContentProps = createHook<PopoverContentProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverContent,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className
    });

    return { id: props.id || contextProps.descriptionId, ...boxProps, className };
  },
  { themeKey: 'Popover.Content' }
);

export const PopoverContent = createComponent<PopoverContentProps>(
  props => {
    const calloutContentProps = usePopoverContentProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutContentProps
    });
  },
  {
    attach: { useProps: usePopoverContentProps },
    themeKey: 'Popover.Content'
  }
);

//////////////////////////////

export type LocalPopoverHeaderProps = {};
export type PopoverHeaderProps = BoxProps & LocalPopoverHeaderProps;

const usePopoverHeaderProps = createHook<PopoverHeaderProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverHeader,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Popover.Header' }
);

export const PopoverHeader = createComponent<PopoverHeaderProps>(
  props => {
    const calloutHeaderProps = usePopoverHeaderProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutHeaderProps
    });
  },
  {
    attach: { useProps: usePopoverHeaderProps },
    themeKey: 'Popover.Header'
  }
);

//////////////////////////////

export type LocalPopoverTitleProps = {};
export type PopoverTitleProps = TextProps & LocalPopoverTitleProps;

const usePopoverTitleProps = createHook<PopoverTitleProps>(
  (props, themeKey) => {
    const textProps = Text.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverTitle,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: textProps.className
    });

    return { id: contextProps.titleId, ...textProps, className };
  },
  { themeKey: 'Popover.Title' }
);

export const PopoverTitle = createComponent<PopoverTitleProps>(
  props => {
    const calloutTitleProps = usePopoverTitleProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutTitleProps
    });
  },
  {
    attach: { useProps: usePopoverTitleProps },
    defaultProps: {
      use: 'span'
    },
    themeKey: 'Popover.Title'
  }
);

//////////////////////////////

export type LocalPopoverFooterProps = {};
export type PopoverFooterProps = BoxProps & LocalPopoverFooterProps;

const usePopoverFooterProps = createHook<PopoverFooterProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(PopoverContext);

    const className = useClassName({
      style: styles.PopoverFooter,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Popover.Footer' }
);

export const PopoverFooter = createComponent<PopoverFooterProps>(
  props => {
    const calloutFooterProps = usePopoverFooterProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutFooterProps
    });
  },
  {
    attach: { useProps: usePopoverFooterProps },
    themeKey: 'Popover.Footer'
  }
);

//////////////////////////////

export type LocalPopoverArrowProps = {};
export type PopoverArrowProps = BoxProps & ReakitPopoverArrowProps & LocalPopoverArrowProps;

const usePopoverArrowProps = createHook<PopoverArrowProps>(
  (props, themeKey) => {
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
        unstable_arrowStyles: unstable_arrowStyles || contextProps.unstable_arrowRef
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...popoverArrowProps });

    const className = useClassName({
      style: styles.PopoverArrow,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return {
      ...htmlProps,
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
  { themeKey: 'Popover.Arrow' }
);

export const PopoverArrow = createComponent<PopoverArrowProps>(
  props => {
    const popoverArrowProps = usePopoverArrowProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: popoverArrowProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Popover.Arrow'
  }
);
