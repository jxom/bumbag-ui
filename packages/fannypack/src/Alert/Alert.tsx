import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Omit } from '../types';
import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Icon, IconProps } from '../Icon';
import { Text } from '../Text';

import * as styles from './styles';

export type LocalAlertProps = {
  accent?: true | 'top' | 'bottom';
  hasIcon?: boolean;
  isFilled?: boolean;
  isInline?: boolean;
  onClickClose?: ButtonProps['onClick'];
  showCloseButton?: boolean;
  standalone?: boolean;
  title?: string;
  type?: string;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  closeButtonIconProps?: Omit<IconProps, 'icon'>;
  iconProps?: Omit<IconProps, 'icon'>;
};
export type AlertProps = BoxProps & LocalAlertProps;

export type AlertContextOptions = AlertProps & { descriptionId?: string; titleId?: string; themeKey?: string };
export const AlertContext = React.createContext<AlertContextOptions>({});

const useProps = createHook<AlertProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      closeButtonProps,
      closeButtonIconProps,
      hasIcon,
      iconProps,
      isFilled,
      isInline,
      onClickClose,
      overrides,
      showCloseButton,
      standalone,
      title,
      type,
      ...restProps
    } = props;
    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Alert,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });
    const alertCloseButtonClassName = useClassName({
      style: styles.AlertCloseButton,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'CloseButton'
    });

    const titleId = useUniqueId('alertTitle');
    const descriptionId = useUniqueId('alertDescription');

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const children = (
      <AlertContext.Provider value={context}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {standalone ? (
              props.children
            ) : (
              <React.Fragment>
                {hasIcon && <AlertIcon overrides={overrides} />}
                <AlertContent overrides={overrides}>
                  {title && <AlertTitle overrides={overrides}>{title}</AlertTitle>}
                  <AlertDescription overrides={overrides}>{props.children}</AlertDescription>
                </AlertContent>
              </React.Fragment>
            )}
          </Box>
          {showCloseButton && (
            <Box display="flex">
              <Button.Close
                className={alertCloseButtonClassName}
                onClick={onClickClose}
                palette={props.isFilled ? `${type}Inverted` : type}
                iconProps={closeButtonIconProps}
                {...closeButtonProps}
              />
            </Box>
          )}
        </Box>
      </AlertContext.Provider>
    );

    return {
      ...boxProps,
      'aria-describedby': props.children ? descriptionId : undefined,
      'aria-labelledby': props.title ? titleId : undefined,
      className,
      children,
      role: 'alert'
    };
  },
  {
    defaultProps: {
      type: 'info'
    },
    themeKey: 'Alert'
  }
);

export const Alert = createComponent<AlertProps>(
  props => {
    const alertProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: alertProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Alert'
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
    themeKeySuffix: 'IconWrapper'
  });

  return (
    <Box className={alertIconWrapperClassName} {...restProps}>
      <Icon
        aria-hidden
        color={context.isFilled ? `${context.type}Inverted` : context.type}
        fontSize={props.children || !context.isInline ? '400' : '200'}
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
    themeKeySuffix: 'Content'
  });

  return (
    <Box className={alertContentClassName} {...restProps}>
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
    themeKeySuffix: 'Title'
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
    themeKeySuffix: 'Description'
  });

  return (
    <Box className={alertDescriptionClassName} id={context.descriptionId} {...restProps}>
      {children}
    </Box>
  );
}
