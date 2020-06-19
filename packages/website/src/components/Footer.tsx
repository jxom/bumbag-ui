import * as React from 'react';
import { Box, Link, Text } from 'fannypack';

export default function Footer(props) {
  return (
    <Box textAlign="center">
      <Text fontWeight="500" fontSize="150">
        Copyright © 2020 <Link href="https://jxom.io">Jake Moxey</Link>
      </Text>
    </Box>
  );
}
