import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { Box, Flex } from '../primitives';
import styled, { css } from '../styled';
import { Omit } from '../types';
import { ButtonProps } from '../Button/Button';
import Icon from '../Icon';
import Text from '../Text';
import _Alert from './styled';
import AlertClose, { AlertCloseProps } from './AlertClose';
import AlertTitle from './AlertTitle';

const ContentWrapper = styled(Box)<{ hasIcon?: boolean }>`
  padding: 1rem;

  ${props =>
    props.hasIcon &&
    css`
      padding-left: 0;
    `};
`;
const IconWrapper = styled(Flex)`
  padding: 0 1rem;
`;

export type LocalAlertProps = {
  className?: string;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  children?: React.ReactNode;
  hasIcon?: boolean;
  hasTint?: boolean;
  onClickClose?: AlertCloseProps['onClickClose'];
  showCloseButton?: boolean;
  title?: string;
  type?: string;
};
export type AlertProps = LocalAlertProps & ReakitBoxProps;

const defaultProps: Partial<LocalAlertProps> = {
  className: undefined,
  closeButtonProps: {},
  children: undefined,
  hasIcon: false,
  hasTint: false,
  onClickClose: undefined,
  showCloseButton: false,
  title: undefined,
  type: 'info'
};

export const Alert: React.FunctionComponent<LocalAlertProps> = ({
  className,
  closeButtonProps,
  children,
  hasIcon,
  onClickClose,
  showCloseButton,
  title,
  type,
  ...props
}) => (
  <_Alert role="alert" className={className} type={type} {...props}>
    <Flex alignItems="center" justifyContent="space-between">
      {hasIcon &&
        type && (
          <IconWrapper>
            <Icon a11yLabel={type} color={type} icon={type} size={children ? 'medium' : undefined} />
          </IconWrapper>
        )}
      <ContentWrapper hasIcon={hasIcon}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </ContentWrapper>
      {showCloseButton && (
        <AlertClose isAbsolute={Boolean(children)} onClickClose={onClickClose} {...closeButtonProps} />
      )}
    </Flex>
  </_Alert>
);

Alert.propTypes = {
  className: PropTypes.string,
  closeButtonProps: PropTypes.object,
  children: PropTypes.node,
  hasIcon: PropTypes.bool,
  hasTint: PropTypes.bool,
  onClickClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string
};
Alert.defaultProps = defaultProps;

const C: React.FunctionComponent<AlertProps> = Alert;
export default C;
