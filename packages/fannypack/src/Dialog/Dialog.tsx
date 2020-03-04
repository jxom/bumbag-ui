import * as React from 'react';
import { Box as ReakitBox, DialogOptions as ReakitDialogOptions } from 'reakit';

import { useClassName, createComponent, createElement, createHook, omitCSSProps, useUniqueId } from '../utils';
import { ActionButtons, ActionButtonsProps } from '../ActionButtons';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Icon, IconProps } from '../Icon';
import { Modal, ModalProps } from '../Modal';
import { Text, TextProps } from '../Text';

import * as styles from './styles';

export type LocalDialogProps = {
  standalone?: boolean;
  type?: string;
  title?: string | React.ReactElement<any>;
  footer?: string | React.ReactElement<any>;
  showActionButtons?: boolean;
  showCloseButton?: boolean;
  onClickClose?: ButtonProps['onClick'];
  actionButtonsProps?: ActionButtonsProps;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  iconProps?: IconProps;
};
export type DialogProps = BoxProps & LocalDialogProps;

export type DialogContextOptions = DialogProps & { descriptionId?: string; titleId?: string; themeKey?: string };
export const DialogContext = React.createContext<DialogContextOptions>({});

const useProps = createHook<DialogProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      actionButtonsProps = {},
      closeButtonProps = {},
      footer,
      iconProps = {},
      onClickClose,
      overrides,
      showActionButtons,
      showCloseButton,
      standalone,
      title,
      type,
      ...restProps
    } = props;
    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Dialog,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });
    const dialogCloseClassName = useClassName({
      style: styles.DialogClose,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Close',
      prevClassName: closeButtonProps.className
    });

    const titleId = useUniqueId('dialogTitle');
    const descriptionId = useUniqueId('dialogDescription');

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const children = (
      <DialogContext.Provider value={context}>
        {standalone ? (
          props.children
        ) : (
          <React.Fragment>
            <DialogContent overrides={overrides}>
              {type && <DialogIcon iconProps={iconProps} overrides={overrides} />}
              <Box>
                {title && (
                  <DialogHeader overrides={overrides}>
                    {typeof title === 'string' ? <DialogTitle overrides={overrides}>{title}</DialogTitle> : title}
                    {showCloseButton && (
                      <Button.Close
                        className={dialogCloseClassName}
                        onClick={onClickClose}
                        size={title ? undefined : 'small'}
                        {...closeButtonProps}
                      />
                    )}
                  </DialogHeader>
                )}
                {props.children}
              </Box>
            </DialogContent>
            {(footer || showActionButtons) && (
              <DialogFooter overrides={overrides}>
                {footer && <Box>{footer}</Box>}
                {showActionButtons && (
                  <Box>
                    <ActionButtons {...actionButtonsProps} />
                  </Box>
                )}
              </DialogFooter>
            )}
          </React.Fragment>
        )}
      </DialogContext.Provider>
    );

    return {
      'aria-describedby': props.children ? descriptionId : undefined,
      'aria-labelledby': props.title ? titleId : undefined,
      ...boxProps,
      className,
      children
    };
  },
  { themeKey: 'Dialog' }
);

export const Dialog = createComponent<DialogProps>(
  props => {
    const dialogProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: dialogProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Dialog'
  }
);

//////////////////////////////

export type LocalDialogContentProps = {};
export type DialogContentProps = BoxProps & LocalDialogContentProps;

const useDialogContentProps = createHook<DialogContentProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogContent,
      styleProps: { ...contextProps, ...props },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { id: props.id || contextProps.descriptionId, ...boxProps, className };
  },
  { themeKey: 'Dialog.Content' }
);

export const DialogContent = createComponent<DialogContentProps>(
  props => {
    const calloutContentProps = useDialogContentProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutContentProps
    });
  },
  {
    attach: { useProps: useDialogContentProps },
    themeKey: 'Dialog.Content'
  }
);

//////////////////////////////

export type LocalDialogHeaderProps = {};
export type DialogHeaderProps = BoxProps & LocalDialogHeaderProps;

const useDialogHeaderProps = createHook<DialogHeaderProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogHeader,
      styleProps: { ...contextProps, ...props },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Dialog.Header' }
);

export const DialogHeader = createComponent<DialogHeaderProps>(
  props => {
    const calloutHeaderProps = useDialogHeaderProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutHeaderProps
    });
  },
  {
    attach: { useProps: useDialogHeaderProps },
    themeKey: 'Dialog.Header'
  }
);

//////////////////////////////

export type LocalDialogTitleProps = {};
export type DialogTitleProps = TextProps & LocalDialogTitleProps;

const useDialogTitleProps = createHook<DialogTitleProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const textProps = Text.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogTitle,
      styleProps: { ...contextProps, ...props },
      themeKey,
      themeKeyOverride,
      prevClassName: textProps.className
    });

    return { id: contextProps.titleId, ...textProps, className };
  },
  { themeKey: 'Dialog.Title' }
);

export const DialogTitle = createComponent<DialogTitleProps>(
  props => {
    const calloutTitleProps = useDialogTitleProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutTitleProps
    });
  },
  {
    attach: { useProps: useDialogTitleProps },
    defaultProps: {
      use: 'span'
    },
    themeKey: 'Dialog.Title'
  }
);

//////////////////////////////

export type LocalDialogFooterProps = {};
export type DialogFooterProps = BoxProps & LocalDialogFooterProps;

const useDialogFooterProps = createHook<DialogFooterProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogFooter,
      styleProps: { ...contextProps, ...props },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Dialog.Footer' }
);

export const DialogFooter = createComponent<DialogFooterProps>(
  props => {
    const calloutFooterProps = useDialogFooterProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutFooterProps
    });
  },
  {
    attach: { useProps: useDialogFooterProps },
    themeKey: 'Dialog.Footer'
  }
);

//////////////////////////////

export type LocalDialogIconProps = {
  iconProps?: Omit<IconProps, 'icon'>;
};
export type DialogIconProps = TextProps & LocalDialogIconProps;

const useDialogIconProps = createHook<DialogIconProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { iconProps, ...restProps } = props;

    const textProps = Text.useProps(restProps);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogIconWrapper,
      styleProps: { ...contextProps, ...props },
      themeKey,
      themeKeyOverride,
      prevClassName: textProps.className
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

    let children = icon;
    if (contextProps.title) {
      children = (
        <DialogHeader>
          <DialogTitle id={undefined}>{icon}</DialogTitle>
        </DialogHeader>
      );
    }

    return { ...textProps, className, children };
  },
  { themeKey: 'Dialog.IconWrapper' }
);

export const DialogIcon = createComponent<DialogIconProps>(
  props => {
    const DialogIconProps = useDialogIconProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DialogIconProps
    });
  },
  {
    attach: { useProps: useDialogIconProps },
    defaultProps: {
      use: 'span'
    },
    themeKey: 'Dialog.IconWrapper'
  }
);

//////////////////////////////

export type LocalDialogModalProps = {
  kind?: 'alert';
  hasScroll?: boolean;
};
export type DialogModalProps = DialogProps & ModalProps & LocalDialogModalProps;

const useDialogModalProps = createHook<DialogModalProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { kind, ...restProps } = props;

    const dialogProps = Dialog.useProps({
      onClickClose: restProps.hide,
      ...restProps,
      actionButtonsProps: {
        onClickCancel: restProps.hide,
        ...restProps.actionButtonsProps
      },
      wrapElement: children => (
        <Modal role={kind === 'alert' ? 'alertdialog' : 'dialog'} {...omitCSSProps(restProps)}>
          {children}
        </Modal>
      )
    });
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogModal,
      styleProps: { ...contextProps, ...props },
      themeKey,
      themeKeyOverride,
      prevClassName: dialogProps.className
    });

    return { ...dialogProps, className };
  },
  { defaultProps: { hasScroll: true }, themeKey: 'Dialog.Modal' }
);

export const DialogModal = createComponent<DialogModalProps>(
  props => {
    const DialogModalProps = useDialogModalProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DialogModalProps
    });
  },
  {
    attach: { useProps: useDialogModalProps },
    themeKey: 'Dialog.Modal'
  }
);
