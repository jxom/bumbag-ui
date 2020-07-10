import * as React from 'react';
import { Box, Navigation, List, Link, Stack } from 'fannypack';

export default function TableOfContents(props: any) {
  const { toc, ...restProps } = props;
  return (
    <Box {...restProps}>
      <Stack spacing="major-1">
        <Navigation>
          <List fontSize="150">
            {toc.items.map((item) => (
              <List.Item key={item.url}>
                <Link href={item.url} color="text" fontWeight="normal" textDecoration="underline">
                  {item.title}
                </Link>
                {item.items?.length > 0 && (
                  <List marginTop="minor-1">
                    {item.items.map((item) => (
                      <List.Item key={item.url}>
                        <Link href={item.url} color="text" fontWeight="normal" textDecoration="underline">
                          {item.title}
                        </Link>
                        {item.items?.length > 0 && (
                          <List marginTop="minor-1">
                            {item.items.map((item) => (
                              <List.Item key={item.url}>
                                <Link href={item.url} color="text" fontWeight="normal" textDecoration="underline">
                                  {item.title}
                                </Link>
                              </List.Item>
                            ))}
                          </List>
                        )}
                      </List.Item>
                    ))}
                  </List>
                )}
              </List.Item>
            ))}
          </List>
        </Navigation>
      </Stack>
    </Box>
  );
}
