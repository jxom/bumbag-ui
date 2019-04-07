import React from 'react';
import { Box, Heading, LayoutSet } from 'fannypack';

import { getSectionedComponents, sectionTitles } from '../utils/components';
import ComponentStatusTable from './ComponentStatusTable';

class ComponentStatus extends React.PureComponent {
  state = { components: {} };

  componentDidMount = () => {
    const components = getSectionedComponents();
    this.setState({ components });
  };

  render = () => {
    const { components } = this.state;
    return (
      <LayoutSet>
        {Object.keys(components).map(section => (
          <Box key={section}>
            <Heading use="h4">{sectionTitles[section]}</Heading>
            {/*
              // @ts-ignore */}
            <ComponentStatusTable components={components[section] || []} />
          </Box>
        ))}
      </LayoutSet>
    );
  };
}

export default ComponentStatus;
