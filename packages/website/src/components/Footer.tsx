import * as React from 'react';
import { Box, Link, Text } from 'bumbag';

export default function Footer(props) {
  return (
    <Box textAlign="center">
      <Text fontWeight="500" fontSize="150">
        Copyright © 2021 <Link href="https://twitter.com/jxom_">Jake Moxey</Link>
      </Text>
    </Box>
  );
}
