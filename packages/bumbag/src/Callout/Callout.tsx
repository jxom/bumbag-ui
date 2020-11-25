import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Button, ButtonProps } from '../Button';
import { Box, BoxProps } from '../Box';
import { Card, CardProps } from '../Card';
import { Icon, IconProps } from '../Icon';
import { ModalContext } from '../Modal';
import { Overlay, OverlayProps } from '../Overlay';
import { Text, TextProps } from '../Text';

import * as styles from './Callout.styles';

export type LocalCalloutProps = {
  /** The title of the callout. */
  title?: string | React.ReactElement<any>;
  /** Indicates if the callout has a tint. */
  hasTint?: boolean;
  /** Function to invoke when the close button is pressed. */
  onClickClose?: ButtonProps['onClick'];
  /** Indicates if a close button should be visible. */
  showCloseButton?: boolean;
  /** Indicates if the callout is standalone. */
  standalone?: boolean;
  /** Type of callout. */
  type?: 'info' | 'danger' | 'warning' | 'success';
  /** Footer of the callout. */
  footer?: string | React.ReactElement<any>;
  /** Props to spread on the close button. */
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  /** Props to spread on the icon. */
  iconProps?: IconProps;
};
export type CalloutProps = CardProps & LocalCalloutProps;

export type CalloutContextOptions = CalloutProps & { descriptionId?: string; titleId?: string };
export const CalloutContext = React.createContext<CalloutContextOptions>({});

const useProps = createHook<CalloutProps>(
  (props, { themeKey }) => {
    const {
      closeButtonProps = {},
      iconProps,
      onClickClose,
      overrides,
      footer,
      standalone,
      showCloseButton,
      title,
      ...restProps
    } = props;

    const cardProps = Card.useProps({ ...restProps, standalone: true });

    const className = useClassName({
      style: styles.Callout,
      styleProps: props,
      themeKey,
      prevClassName: cardProps.className,
    });
    const calloutCloseClassName = useClassName({
      style: styles.CalloutClose,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Close',
      prevClassName: closeButtonProps.className,
    });

    const titleId = useUniqueId();
    const descriptionId = useUniqueId();

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const children = (
      <CalloutContext.Provider value={context}>
        <Box display="flex">
          {standalone ? (
            props.children
          ) : (
            <React.Fragment>
              <CalloutIcon iconProps={iconProps} overrides={overrides} />
              <Box>
                {title && (
                  <CalloutHeader overrides={overrides}>
                    {typeof title === 'string' ? <CalloutTitle overrides={overrides}>{title}</CalloutTitle> : title}
                  </CalloutHeader>
                )}
                <CalloutContent overrides={overrides}>{props.children}</CalloutContent>
                {footer && <CalloutFooter overrides={overrides}>{footer}</CalloutFooter>}
              </Box>
            </React.Fragment>
          )}
        </Box>
        {showCloseButton && (
          <Button.Close
            className={calloutCloseClassName}
            onClick={onClickClose}
            size={title ? undefined : 'small'}
            {...closeButtonProps}
          />
        )}
      </CalloutContext.Provider>
    );

    return {
      ...cardProps,
      'aria-describedby': props.children ? descriptionId : undefined,
      'aria-labelledby': props.title ? titleId : undefined,
      className,
      children,
    };
  },
  { defaultProps: { type: 'info' }, themeKey: 'Callout' }
);

export const Callout = createComponent<CalloutProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Callout',
    },
    themeKey: 'Callout',
  }
);

//////////////////////////////

export type LocalCalloutContentProps = {};
export type CalloutContentProps = BoxProps & LocalCalloutContentProps;

const useCalloutContentProps = createHook<CalloutContentProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(CalloutContext);

    const className = useClassName({
      style: styles.CalloutContent,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { id: props.id || contextProps.descriptionId, ...boxProps, className };
  },
  { themeKey: 'Callout.Content' }
);

export const CalloutContent = createComponent<CalloutContentProps>(
  (props) => {
    const calloutContentProps = useCalloutContentProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutContentProps,
    });
  },
  {
    attach: { useProps: useCalloutContentProps, displayName: 'Callout.Content' },
    themeKey: 'Callout.Content',
  }
);

//////////////////////////////

export type LocalCalloutHeaderProps = {};
export type CalloutHeaderProps = BoxProps & LocalCalloutHeaderProps;

const useCalloutHeaderProps = createHook<CalloutHeaderProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(CalloutContext);

    const className = useClassName({
      style: styles.CalloutHeader,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Callout.Header' }
);

export const CalloutHeader = createComponent<CalloutHeaderProps>(
  (props) => {
    const calloutHeaderProps = useCalloutHeaderProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutHeaderProps,
    });
  },
  {
    attach: { useProps: useCalloutHeaderProps, displayName: 'Callout.Header' },
    themeKey: 'Callout.Header',
  }
);

//////////////////////////////

export type LocalCalloutTitleProps = {};
export type CalloutTitleProps = TextProps & LocalCalloutTitleProps;

const useCalloutTitleProps = createHook<CalloutTitleProps>(
  (props, { themeKey }) => {
    const textProps = Text.useProps(props);
    const contextProps = React.useContext(CalloutContext);

    const className = useClassName({
      style: styles.CalloutTitle,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: textProps.className,
    });

    return { id: contextProps.titleId, ...textProps, className };
  },
  { themeKey: 'Callout.Title' }
);

export const CalloutTitle = createComponent<CalloutTitleProps>(
  (props) => {
    const calloutTitleProps = useCalloutTitleProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutTitleProps,
    });
  },
  {
    attach: { useProps: useCalloutTitleProps, displayName: 'Callout.Title' },
    defaultProps: {
      use: 'span',
    },
    themeKey: 'Callout.Title',
  }
);

//////////////////////////////

export type LocalCalloutFooterProps = {};
export type CalloutFooterProps = BoxProps & LocalCalloutFooterProps;

const useCalloutFooterProps = createHook<CalloutFooterProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(CalloutContext);

    const className = useClassName({
      style: styles.CalloutFooter,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Callout.Footer' }
);

export const CalloutFooter = createComponent<CalloutFooterProps>(
  (props) => {
    const calloutFooterProps = useCalloutFooterProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutFooterProps,
    });
  },
  {
    attach: { useProps: useCalloutFooterProps, displayName: 'Callout.Footer' },
    themeKey: 'Callout.Footer',
  }
);

//////////////////////////////

export type LocalCalloutIconProps = {
  iconProps?: Omit<IconProps, 'icon'>;
};
export type CalloutIconProps = BoxProps & LocalCalloutIconProps;

const useCalloutIconProps = createHook<CalloutIconProps>(
  (props, { themeKey }) => {
    const { iconProps, ...restProps } = props;

    const boxProps = Box.useProps(restProps);
    const contextProps = React.useContext(CalloutContext);

    const className = useClassName({
      style: styles.CalloutIconWrapper,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    const icon = (
      <Icon
        aria-hidden
        color={contextProps.type}
        fontSize={!contextProps.title ? '300' : undefined}
        icon={contextProps.type}
        {...iconProps}
      />
    );

    let children = <CalloutContent id={undefined}>{icon}</CalloutContent>;
    if (contextProps.title) {
      children = (
        <CalloutHeader>
          <CalloutTitle id={undefined}>{icon}</CalloutTitle>
        </CalloutHeader>
      );
    }

    return { ...boxProps, className, children };
  },
  { themeKey: 'Callout.IconWrapper' }
);

export const CalloutIcon = createComponent<CalloutIconProps>(
  (props) => {
    const calloutIconProps = useCalloutIconProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutIconProps,
    });
  },
  {
    attach: { useProps: useCalloutIconProps, displayName: 'Callout.IconWrapper' },
    themeKey: 'Callout.IconWrapper',
  }
);

//////////////////////////////

export type LocalCalloutOverlayProps = {};
export type CalloutOverlayProps = CalloutProps & OverlayProps & LocalCalloutOverlayProps;

const useCalloutOverlayProps = createHook<CalloutOverlayProps>(
  (props, { themeKey }) => {
    const { variant, ...restProps } = props;

    const { modal } = React.useContext(ModalContext);

    const calloutProps = Callout.useProps({
      onClickClose: restProps.hide || modal.hide,
      ...restProps,
      wrapElement: (children) => (
        // @ts-ignore
        <Overlay placement="bottom-end" {...restProps}>
          {children}
        </Overlay>
      ),
    });
    const contextProps = React.useContext(CalloutContext);

    const className = useClassName({
      style: styles.CalloutOverlay,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: calloutProps.className,
    });

    return { ...calloutProps, className };
  },
  { defaultProps: { showCloseButton: true }, themeKey: 'Callout.Overlay' }
);

export const CalloutOverlay = createComponent<CalloutOverlayProps>(
  (props) => {
    const calloutOverlayProps = useCalloutOverlayProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutOverlayProps,
    });
  },
  {
    attach: { useProps: useCalloutOverlayProps, displayName: 'Callout.Overlay' },
    themeKey: 'Callout.Overlay',
  }
);
