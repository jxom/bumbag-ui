import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ComponentDetails, componentDetailsPropTypes } from '../utils/components';
import Table from '../../../src/Table';
import Tag from '../../../src/Tag';
import Icon from '../../../src/Icon';
import Link from '../../../src/Link';
import ComponentStatusTag from './ComponentStatusTag';

type Props = {
  components: Array<ComponentDetails>;
};

const ComponentStatusTable: React.FunctionComponent<Props> = ({ components }) => {
  return (
    <Table isFullWidth isStriped>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell padding="1rem">Component</Table.HeadCell>
          <Table.HeadCell padding="1rem" textAlign="center" width="300px">
            Status
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {components.map(component => {
          return (
            <Table.Row key={component.name}>
              <Table.Cell padding="1rem">
                <Link fontWeight="semibold" href={component.docsPath}>
                  {component.name}
                </Link>
              </Table.Cell>
              <Table.Cell padding="1rem" textAlign="center">
                <ComponentStatusTag status={component.status} />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

ComponentStatusTable.propTypes = {
  components: PropTypes.array.isRequired
};

export default ComponentStatusTable;
