import * as React from 'react';
import { Heading, Paragraph, Text } from 'bumbag';

import DocsLayout from '../../layout/DocsLayout';

export default function Index() {
  return (
    <DocsLayout breakpoint="widescreen" type="blocks">
      <Heading color="text100" fontWeight="normal" fontSize="400" lineHeight="100">
        Build beautiful UIs with
        <br />
        <Text color="text" fontSize="700" fontWeight="bold">
          Bumbag <Text color="primary">Blocks</Text>
        </Text>
      </Heading>
    </DocsLayout>
  );
}
