import React from 'react';
import { Container, PageContent, PageWithHeader, useColorMode } from 'bumbag';

import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children: React.ReactNode;
};

export default function Docs(props: Props) {
  const { children } = props;

  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      <PageWithHeader
        sticky
        header={
          <Container breakpoint="widescreen">
            <Header type="landing" />
          </Container>
        }
      >
        {children}
        <PageContent wrapperProps={{ backgroundColor: colorMode === 'dark' ? 'black200' : 'white600' }}>
          <Footer />
        </PageContent>
      </PageWithHeader>
    </React.Fragment>
  );
}
