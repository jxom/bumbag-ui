import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Omit } from '../types';
import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Flex, FlexProps } from '../Flex';
import { Button, ButtonProps } from '../Button';
import { Icon, IconProps } from '../Icon';
import { Text } from '../Text';

import * as styles from './Alert.styles';

export type LocalAlertProps = {
  /** Placement of the accent (the side border). */
  accent?: true | 'top' | 'bottom';
  /** Size of the accent (in px). */
  accentSize?: string;
  /** Countdown timer of the alert (in ms). */
  countdown?: number;
  /** Should the alert have an icon depending on its `type`? */
  hasIcon?: boolean;
  /** Is the alert inline, and has the title beside its content? */
  isInline?: boolean;
  /** Function to invoke when the alert close button is pressed. */
  onClickClose?: ButtonProps['onClick'];
  /** Whether or not to show the close button. */
  showCloseButton?: boolean;
  /** The title of the alert. */
  title?: string;
  /** The type of the alert. */
  type?: 'info' | 'success' | 'warning' | 'danger';
  /** The props to spread onto the close button. */
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  /** The props to spread onto the close button icon. */
  closeButtonIconProps?: Omit<IconProps, 'icon'>;
  /** The props to spread onto the alert icon. */
  iconProps?: Omit<IconProps, 'icon'>;
};
export type AlertProps = FlexProps & LocalAlertProps;

export type AlertContextOptions = AlertProps & {
  descriptionId?: string;
  titleId?: string;
  themeKey?: string;
};
export const AlertContext = React.createContext<AlertContextOptions>({});

const useProps = createHook<AlertProps>(
  (props, { themeKey }) => {
    const {
      accent,
      countdown,
      closeButtonProps,
      closeButtonIconProps,
      hasIcon,
      iconProps,
      isInline,
      onClickClose,
      overrides,
      showCloseButton,
      title,
      type,
      variant,
      ...restProps
    } = props;
    const flexProps = Flex.useProps(restProps);

    const className = useClassName({
      style: styles.Alert,
      styleProps: props,
      themeKey,
      prevClassName: flexProps.className,
    });
    const alertCloseButtonClassName = useClassName({
      style: styles.AlertCloseButton,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'CloseButton',
    });

    const titleId = useUniqueId();
    const descriptionId = useUniqueId();

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    let palette = 'default';
    if (variant === 'fill') {
      palette = `${type}Inverted`;
    }
    if (variant === 'tint') {
      palette = type;
    }

    const children = (
      <AlertContext.Provider value={context}>
        {accent && (
          <React.Fragment>
            <AlertAccent overrides={overrides} />
            {countdown ? <AlertAccent overrides={overrides} isBackground /> : null}
          </React.Fragment>
        )}
        <AlertWrapper overrides={overrides}>
          <Flex alignItems="center">
            {hasIcon && <AlertIcon overrides={overrides} />}
            <AlertContent overrides={overrides}>
              {title && <AlertTitle overrides={overrides}>{title}</AlertTitle>}
              <AlertDescription overrides={overrides}>{props.children}</AlertDescription>
            </AlertContent>
          </Flex>
          {showCloseButton && (
            <Flex>
              <Button.Close
                className={alertCloseButtonClassName}
                onClick={onClickClose}
                palette={palette}
                iconProps={closeButtonIconProps}
                {...closeButtonProps}
              />
            </Flex>
          )}
        </AlertWrapper>
      </AlertContext.Provider>
    );

    return {
      ...flexProps,
      'aria-describedby': props.children ? descriptionId : undefined,
      'aria-labelledby': props.title ? titleId : undefined,
      className,
      children,
      role: 'alert',
    };
  },
  {
    defaultProps: {
      accentSize: '4px',
      hasIcon: true,
      type: 'info',
      variant: 'shadowed',
    },
    themeKey: 'Alert',
  }
);

export const Alert = createComponent<AlertProps>(
  (props) => {
    const alertProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: alertProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Alert',
    },
    themeKey: 'Alert',
  }
);

/////////////////////////////////////

export type LocalAlertIconProps = {
  iconProps?: Omit<IconProps, 'icon'>;
};
export type AlertIconProps = BoxProps & LocalAlertIconProps;

export function AlertIcon(props: AlertIconProps) {
  const { iconProps, ...restProps } = props;
  const context = React.useContext(AlertContext);

  const alertIconWrapperClassName = useClassName({
    style: styles.AlertIconWrapper,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'IconWrapper',
  });

  let fontSize = '400';
  if (!context.title || context.isInline) {
    fontSize = '200';
  }

  return (
    <Box className={alertIconWrapperClassName} {...restProps}>
      <Icon
        aria-hidden
        color={context.variant === 'fill' ? `${context.type}Inverted` : context.type}
        fontSize={fontSize}
        icon={context.type}
        {...iconProps}
      />
    </Box>
  );
}

/////////////////////////////////////

export type LocalAlertContentProps = {};
export type AlertContentProps = BoxProps & LocalAlertContentProps;

export function AlertContent(props: AlertContentProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(AlertContext);

  const alertContentClassName = useClassName({
    style: styles.AlertContent,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Content',
  });

  return (
    <Box className={alertContentClassName} {...restProps}>
      {children}
    </Box>
  );
}

/////////////////////////////////////

export type LocalAlertWrapperProps = {};
export type AlertWrapperProps = BoxProps & LocalAlertWrapperProps;

export function AlertWrapper(props: AlertWrapperProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(AlertContext);

  const alertWrapperClassName = useClassName({
    style: styles.AlertWrapper,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Wrapper',
  });

  return (
    <Flex className={alertWrapperClassName} {...restProps}>
      {children}
    </Flex>
  );
}

/////////////////////////////////////

export type LocalAlertAccentProps = {
  isBackground?: boolean;
};
export type AlertAccentProps = BoxProps & LocalAlertAccentProps;

export function AlertAccent(props: AlertAccentProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(AlertContext);

  const alertAccentClassName = useClassName({
    style: styles.AlertAccent,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Accent',
  });

  return (
    <Box className={alertAccentClassName} {...restProps}>
      {children}
    </Box>
  );
}

/////////////////////////////////////

export type LocalAlertTitleProps = {};
export type AlertTitleProps = BoxProps & LocalAlertTitleProps;

export function AlertTitle(props: AlertTitleProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(AlertContext);

  const alertTitleClassName = useClassName({
    style: styles.AlertTitle,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Title',
  });

  return (
    <Box className={alertTitleClassName} {...restProps}>
      <Text fontWeight="semibold" id={context.titleId}>
        {children}
      </Text>
    </Box>
  );
}

/////////////////////////////////////

export type LocalAlertDescriptionProps = {};
export type AlertDescriptionProps = BoxProps & LocalAlertDescriptionProps;

export function AlertDescription(props: AlertDescriptionProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(AlertContext);

  const alertDescriptionClassName = useClassName({
    style: styles.AlertDescription,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Alert',
    themeKeySuffix: 'Description',
  });

  return (
    <Box className={alertDescriptionClassName} id={context.descriptionId} {...restProps}>
      {children}
    </Box>
  );
}
