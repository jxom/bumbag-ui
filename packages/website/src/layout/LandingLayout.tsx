import React from 'react';
import { Container, PageWithHeader } from 'fannypack';

import Header from '../components/Header';

type Props = {
  children: React.ReactNode;
};

export default function Docs(props: Props) {
  const { children } = props;

  return (
    <PageWithHeader
      sticky
      header={
        <Container breakpoint="desktop">
          <Header />
        </Container>
      }
    >
      {children}
    </PageWithHeader>
  );
}
