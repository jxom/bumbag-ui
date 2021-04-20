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
            {toc.items &&
              toc.items.map((item) => (
                <List.Item key={item.url}>
                  <Link href={item.url} color="text100" fontWeight="500">
                    {item.title}
                  </Link>
                  {item.items?.length > 0 && (
                    <List marginTop="minor-1">
                      {item.items.map((item) => (
                        <List.Item key={item.url}>
                          <Link href={item.url} color="text100" fontWeight="500">
                            {item.title}
                          </Link>
                          {item.items?.length > 0 && (
                            <List marginTop="minor-1">
                              {item.items.map((item) => (
                                <List.Item key={item.url}>
                                  <Link href={item.url} color="text100" fontWeight="500">
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
