// @flow
import React, { type Node } from 'react';

import { Box, Flex } from '../primitives';
import styled, { css } from '../styled';
import Icon from '../Icon';
import Text from '../Text';
import _Alert from './styled';
import AlertClose from './AlertClose';
import AlertTitle from './AlertTitle';

const ContentWrapper = styled(Box)`
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

type Props = {
  className?: string,
  closeButtonProps?: Object,
  children?: Node,
  hasIcon?: boolean,
  hasTint?: boolean,
  onClickClose?: Function,
  showCloseButton?: boolean,
  title?: string,
  type?: 'info' | 'success' | 'danger' | 'warning'
};

const Alert = ({
  className,
  closeButtonProps,
  children,
  hasIcon,
  onClickClose,
  showCloseButton,
  title,
  type,
  ...props
}: Props) => (
  <_Alert role="alert" className={className} type={type} {...props}>
    <Flex alignItems="center" justifyContent="space-between">
      {hasIcon && (
        <IconWrapper>
          <Icon color={type} icon={type} size={children ? 'medium' : undefined} />
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

Alert.defaultProps = {
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

export default Alert;
