import * as React from 'react';

import { Box } from '../../../src/primitives';
import Heading from '../../../src/Heading';
import { ComponentDetails, getSectionedComponents, sectionTitles } from '../utils/components';
import ComponentStatusTable from './ComponentStatusTable';

type Props = {};
type State = {
  components: {
    [section: string]: Array<ComponentDetails>;
  };
};

class ComponentStatus extends React.PureComponent<Props, State> {
  state = { components: {} };

  componentDidMount = () => {
    const components = getSectionedComponents();
    this.setState({ components });
  };

  render = () => {
    const { components } = this.state;
    return Object.keys(components).map(section => (
      <Box key={section}>
        <Heading use="h4">{sectionTitles[section]}</Heading>
        {/*
          // @ts-ignore */}
        <ComponentStatusTable components={components[section] || []} />
      </Box>
    ));
  };
}

export default ComponentStatus;
