import * as React from 'react';

import { getSectionedComponents, sectionTitles, ComponentDetails } from '../utils/components';
import { Box } from '../../primitives/index';
import Columns from '../../Columns';
import Column from '../../Column';
import Heading from '../../Heading';
import ComponentButton from './ComponentButton';

export default () => {
  const components = getSectionedComponents();
  return (
    <Box>
      {Object.keys(sectionTitles).map((section: string) => (
        <React.Fragment key={section}>
          <Heading use="h4" marginTop="large">
            {sectionTitles[section]}
          </Heading>
          <Columns>
            {components[section].map(
              (component: ComponentDetails) =>
                component.status === 'complete' ? (
                  <Column key={component.name} spread={3} spreadTablet={6}>
                    <ComponentButton name={component.name} href={component.docsPath} />
                  </Column>
                ) : null
            )}
          </Columns>
        </React.Fragment>
      ))}
    </Box>
  );
};
