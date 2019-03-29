import * as React from 'react';
import { Box, Columns, Column, Heading } from 'fannypack';

import { getSectionedComponents, sectionTitles } from '../utils/components';
import ComponentButton from './ComponentButton';

export default () => {
  const components = getSectionedComponents();
  return (
    <Box>
      {Object.keys(sectionTitles).map(section => (
        <React.Fragment key={section}>
          <Heading use="h4" marginTop="major-4">
            {sectionTitles[section]}
          </Heading>
          <Columns>
            {components[section].map(component =>
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
