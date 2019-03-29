import React from 'react';
import { Button, Flex } from 'fannypack';
import Link from 'next/link';

import { useDocsContext } from './DocsContext';

function Pagination() {
  const { routes, route } = useDocsContext();
  const index = routes.indexOf(route);
  const previous = routes[index - 1];
  const next = routes[index + 1];
  return (
    <Flex justifyContent="space-between">
      {previous && (
        <Link href={previous.path} prefetch>
          <Button iconBefore="solid-arrow-left" kind="ghost" palette="primary">
            {previous.name}
          </Button>
        </Link>
      )}
      <div />
      {next && (
        <Link href={next.path} prefetch>
          <Button iconAfter="solid-arrow-right" kind="ghost" palette="primary">
            {next.name}
          </Button>
        </Link>
      )}
    </Flex>
  );
}

export default Pagination;
