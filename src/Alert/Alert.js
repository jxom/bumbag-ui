// @flow
import React, { type Node } from 'react';

import { Box, Flex } from '../primitives';
import styled, { css } from '../styled';
import Icon from '../Icon';
import Text from '../Text';
import _Alert from './styled';
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
  children?: Node,
  hasIcon?: boolean,
  hasTint?: boolean,
  title?: string,
  type?: 'info' | 'success' | 'danger' | 'warning'
};

const Alert = ({ className, children, hasIcon, title, type, ...props }: Props) => (
  <_Alert role="alert" className={className} type={type} {...props}>
    <Flex alignItems="center">
      {hasIcon && (
        <IconWrapper>
          <Icon color={type} icon={type} size={children ? 'medium' : undefined} />
        </IconWrapper>
      )}
      <ContentWrapper hasIcon={hasIcon}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </ContentWrapper>
    </Flex>
  </_Alert>
);

Alert.defaultProps = {
  className: undefined,
  children: undefined,
  hasIcon: false,
  hasTint: false,
  title: undefined,
  type: 'info'
};

export default Alert;
