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
  hasIcon?: boolean;
  isFilled?: boolean;
  isInline?: boolean;
  onClickClose?: ButtonProps['onClick'];
  showCloseButton?: boolean;
  title?: string;
  type?: string;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  closeButtonIconProps?: Omit<IconProps, 'icon'>;
  iconProps?: Omit<IconProps, 'icon'>;
};
export type AlertProps = BoxProps & LocalAlertProps;

const useProps = createHook<AlertProps>(
  (props, themeKey) => {
    const {
      closeButtonProps,
      closeButtonIconProps,
      hasIcon,
      iconProps,
      isFilled,
      isInline,
      onClickClose,
      showCloseButton,
      title,
      type,
      ...restProps
    } = props;
    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Alert,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });
    const alertContentClassName = useClassName({
      style: styles.AlertContent,
      styleProps: props,
      themeKey: `${themeKey}.Content`
    });
    const alertTitleClassName = useClassName({
      style: styles.AlertTitle,
      styleProps: props,
      themeKey: `${themeKey}.Title`
    });
    const alertDescriptionClassName = useClassName({
      style: styles.AlertDescription,
      styleProps: props,
      themeKey: `${themeKey}.Description`
    });
    const alertIconWrapperClassName = useClassName({
      style: styles.AlertIconWrapper,
      styleProps: props,
      themeKey: `${themeKey}.IconWrapper`
    });
    const alertCloseButtonClassName = useClassName({
      style: styles.AlertCloseButton,
      styleProps: props,
      themeKey: `${themeKey}.CloseButton`
    });

    const titleId = useUniqueId('calloutTitle');
    const descriptionId = useUniqueId('calloutDescription');

    const children = (
      <React.Fragment>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {hasIcon && (
              <Box className={alertIconWrapperClassName}>
                <Icon
                  aria-hidden
                  color={isFilled ? `${type}Inverted` : type}
                  icon={type}
                  fontSize={props.children && !isInline ? '400' : '200'}
                  {...iconProps}
                />
              </Box>
            )}
            <Box className={alertContentClassName}>
              {title && (
                <Box className={alertTitleClassName}>
                  <Text fontWeight="semibold" id={titleId}>
                    {title}
                  </Text>
                </Box>
              )}
              <Box className={alertDescriptionClassName} id={descriptionId}>
                {props.children}
              </Box>
            </Box>
          </Box>
          {showCloseButton && (
            <Box display="flex">
              <Button
                className={alertCloseButtonClassName}
                kind="ghost"
                onClick={onClickClose}
                palette={props.isFilled ? `${type}Inverted` : type}
                {...closeButtonProps}
              >
                <Icon fontSize="300" icon="close" {...closeButtonIconProps} />
              </Button>
            </Box>
          )}
        </Box>
      </React.Fragment>
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
