// @flow

import React, { type Node } from 'react';
import styled from 'reakit/styled';
import { palette } from 'styled-tools';

import Heading from '../../Heading';
import { Pane } from '../../Pane';

const Wrapper = styled(Pane)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  text-decoration: none;

  &:hover {
    background-color: ${palette('whiteDarker')};
  }
`;

const Icon = styled(Pane)`
  border: 1px solid ${palette('primaryLighter')};
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: Node,
  title: string
};

const ComponentButton = ({ children, title, ...props }: Props) => (
  <Wrapper use="a" {...props}>
    <Icon backgroundColor="primaryTint" height={100} width={180}>
      {children}
    </Icon>
    <Heading use="h6" marginTop="xxsmall" isSubHeading>
      {title}
    </Heading>
  </Wrapper>
);

export default ComponentButton;
