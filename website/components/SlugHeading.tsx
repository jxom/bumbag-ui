import * as React from 'react';
import { Link, Heading } from 'bumbag';
import NextLink from 'next/link';

export default function SlugHeading({ children, use, ...props }) {
  return (
    <Heading {...props} role="group">
      {children}
      <NextLink href={`#${props.id}`} passHref>
        <Link marginLeft="major-1" visibility="hidden" _groupHover={{ visibility: 'visible' }}>
          #
        </Link>
      </NextLink>
    </Heading>
  );
}
