import React from 'react';
import { Container, LayoutSet } from 'fannypack';

import Pagination from './Pagination';

export default function Content(props) {
  const { breakpoint, children } = props;
  return (
    <Container breakpoint={breakpoint} isFluid={!breakpoint} padding="major-4" marginTop="major-2" overflowX="scroll">
      <LayoutSet>
        {children}
        <Pagination />
      </LayoutSet>
    </Container>
  );
}
