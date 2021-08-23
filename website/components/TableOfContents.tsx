import * as React from 'react';
import { Box, Navigation, List, Link, Stack } from 'bumbag';

export default function TableOfContents(props: any) {
  const { toc, ...restProps } = props;
  return (
    <Box {...restProps}>
      <Box fontWeight="bold" marginBottom="major-1">
        On this page
      </Box>
      <Stack spacing="major-1">
        <Navigation>
          <List fontSize="150">
            {toc.map(({ id, text, level }, i) => (
              <List.Item key={i} marginLeft={`major-${(level - 2) * 2}`}>
                <Link href={`#${id}`} color="text100" fontWeight="500">
                  {text}
                </Link>
              </List.Item>
            ))}
          </List>
        </Navigation>
      </Stack>
    </Box>
  );
}
