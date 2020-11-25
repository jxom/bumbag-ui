import * as React from 'react';
import { Box as ReakitBox, DialogOptions as ReakitDialogOptions } from 'reakit';

import { Palette, Flexible } from '../types';
import { bindFns, useClassName, createComponent, createElement, createHook, omitCSSProps, useUniqueId } from '../utils';
import { ActionButtons, ActionButtonsProps } from '../ActionButtons';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Flex, FlexProps } from '../Flex';
import { Icon, IconProps } from '../Icon';
import { Modal, ModalContext, ModalProps } from '../Modal';
import { Text, TextProps } from '../Text';

import * as styles from './Dialog.styles';

export type LocalDialogProps = {
  /** Indicates the type of dialog. */
  type?: string;
  /** Sets the title of the dialog. */
  title?: string | React.ReactElement<any>;
  /** Sets the footer of the dialog. */
  footer?: string | React.ReactElement<any>;
  /** Sets the color of the dialog action buttons. */
  palette?: Palette;
  /** Sets the visibility of the dialog action buttons. */
  showActionButtons?: boolean;
  /** Sets the visibility of the close buttons. */
  showCloseButton?: boolean;
  /** Function to invoke when the close button is clicked. */
  onClickClose?: ButtonProps['onClick'];
  /** Props to spread onto the action buttons. */
  actionButtonsProps?: ActionButtonsProps;
  /** Props to spread onto the close button. */
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  /** Props to spread on the icon. */
  iconProps?: IconProps;
  standalone?: boolean;
};
export type DialogProps = BoxProps & LocalDialogProps;

export type DialogContextOptions = DialogProps & {
  descriptionId?: string;
  titleId?: string;
  themeKey?: string;
};
export const DialogContext = React.createContext<DialogContextOptions>({});

const useProps = createHook<DialogProps>(
  (props, { themeKey }) => {
    const {
      actionButtonsProps = {},
      closeButtonProps = {},
      footer,
      iconProps = {},
      onClickClose,
      overrides,
      palette,
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
      prevClassName: boxProps.className,
    });
    const dialogCloseClassName = useClassName({
      style: styles.DialogClose,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Close',
      prevClassName: closeButtonProps.className,
    });

    const titleId = useUniqueId();
    const descriptionId = useUniqueId();

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const children = (
      <DialogContext.Provider value={context}>
        {standalone ? (
          props.children
        ) : (
          <React.Fragment>
            <DialogContent overrides={overrides}>
              {type && <DialogIcon iconProps={iconProps} overrides={overrides} />}
              <Box width="100%">
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
                {footer}
                {showActionButtons && <ActionButtons palette={palette} {...actionButtonsProps} />}
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
      children,
    };
  },
  { themeKey: 'Dialog' }
);

export const Dialog = createComponent<DialogProps>(
  (props) => {
    const dialogProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: dialogProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Dialog',
    },
    themeKey: 'Dialog',
  }
);

//////////////////////////////

export type LocalDialogContentProps = {};
export type DialogContentProps = FlexProps & LocalDialogContentProps;

const useDialogContentProps = createHook<DialogContentProps>(
  (props, { themeKey }) => {
    const flexProps = Flex.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogContent,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: flexProps.className,
    });

    return {
      id: props.id || contextProps.descriptionId,
      ...flexProps,
      className,
    };
  },
  { themeKey: 'Dialog.Content' }
);

export const DialogContent = createComponent<DialogContentProps>(
  (props) => {
    const calloutContentProps = useDialogContentProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutContentProps,
    });
  },
  {
    attach: { useProps: useDialogContentProps, displayName: 'Dialog.Content' },
    themeKey: 'Dialog.Content',
  }
);

//////////////////////////////

export type LocalDialogHeaderProps = {};
export type DialogHeaderProps = BoxProps & LocalDialogHeaderProps;

const useDialogHeaderProps = createHook<DialogHeaderProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogHeader,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Dialog.Header' }
);

export const DialogHeader = createComponent<DialogHeaderProps>(
  (props) => {
    const calloutHeaderProps = useDialogHeaderProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutHeaderProps,
    });
  },
  {
    attach: { useProps: useDialogHeaderProps, displayName: 'Dialog.Header' },
    themeKey: 'Dialog.Header',
  }
);

//////////////////////////////

export type LocalDialogTitleProps = {};
export type DialogTitleProps = TextProps & LocalDialogTitleProps;

const useDialogTitleProps = createHook<DialogTitleProps>(
  (props, { themeKey }) => {
    const textProps = Text.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogTitle,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: textProps.className,
    });

    return { id: contextProps.titleId, ...textProps, className };
  },
  { themeKey: 'Dialog.Title' }
);

export const DialogTitle = createComponent<DialogTitleProps>(
  (props) => {
    const calloutTitleProps = useDialogTitleProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutTitleProps,
    });
  },
  {
    attach: { useProps: useDialogTitleProps, displayName: 'Dialog.Title' },
    defaultProps: {
      use: 'span',
    },
    themeKey: 'Dialog.Title',
  }
);

//////////////////////////////

export type LocalDialogFooterProps = {};
export type DialogFooterProps = FlexProps & LocalDialogFooterProps;

const useDialogFooterProps = createHook<DialogFooterProps>(
  (props, { themeKey }) => {
    const flexProps = Flex.useProps(props);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogFooter,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: flexProps.className,
    });

    return { ...flexProps, className };
  },
  { themeKey: 'Dialog.Footer' }
);

export const DialogFooter = createComponent<DialogFooterProps>(
  (props) => {
    const calloutFooterProps = useDialogFooterProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: calloutFooterProps,
    });
  },
  {
    attach: { useProps: useDialogFooterProps, displayName: 'Dialog.Footer' },
    themeKey: 'Dialog.Footer',
  }
);

//////////////////////////////

export type LocalDialogIconProps = {
  iconProps?: Omit<IconProps, 'icon'>;
};
export type DialogIconProps = TextProps & LocalDialogIconProps;

const useDialogIconProps = createHook<DialogIconProps>(
  (props, { themeKey }) => {
    const { iconProps, ...restProps } = props;

    const textProps = Text.useProps(restProps);
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogIconWrapper,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: textProps.className,
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
  (props) => {
    const DialogIconProps = useDialogIconProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DialogIconProps,
    });
  },
  {
    attach: { useProps: useDialogIconProps, displayName: 'Dialog.IconWrapper' },
    defaultProps: {
      use: 'span',
    },
    themeKey: 'Dialog.IconWrapper',
  }
);

//////////////////////////////

export type LocalDialogModalProps = {
  variant?: Flexible<'alert', string>;
  hasScroll?: boolean;
  wrap?: (children: React.ReactNode) => React.ReactNode;
};
export type DialogModalProps = DialogProps & ModalProps & LocalDialogModalProps;

const useDialogModalProps = createHook<DialogModalProps>(
  (props, { themeKey }) => {
    const { modal } = React.useContext(ModalContext);
    const { wrap, variant, ...restProps } = { ...modal, ...props };

    const dialogProps = Dialog.useProps({
      ...restProps,
      onClickClose: bindFns(restProps.hide, props.onClickClose),
      actionButtonsProps: {
        ...restProps.actionButtonsProps,
        onClickCancel: bindFns(restProps.hide, restProps.actionButtonsProps?.onClickCancel),
      },
      wrapElement: (children) => (
        // @ts-ignore
        <Modal
          hideOnEsc={variant !== 'alert'}
          hideOnClickOutside={variant !== 'alert'}
          role={variant === 'alert' ? 'alertdialog' : 'dialog'}
          {...omitCSSProps(restProps)}
        >
          {children}
        </Modal>
      ),
    });
    const contextProps = React.useContext(DialogContext);

    const className = useClassName({
      style: styles.DialogModal,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: dialogProps.className,
    });

    return {
      ...dialogProps,
      className,
      children: typeof wrap === 'function' ? wrap(dialogProps.children) : dialogProps.children,
    };
  },
  { defaultProps: { hasScroll: true }, themeKey: 'Dialog.Modal' }
);

export const DialogModal = createComponent<DialogModalProps>(
  (props) => {
    const DialogModalProps = useDialogModalProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: DialogModalProps,
    });
  },
  {
    attach: { useProps: useDialogModalProps, displayName: 'Dialog.Modal' },
    themeKey: 'Dialog.Modal',
  }
);
