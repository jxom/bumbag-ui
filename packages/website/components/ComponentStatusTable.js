import React from 'react';
import { Table, Link } from 'fannypack';

import ComponentStatusTag from './ComponentStatusTag';

const ComponentStatusTable = ({ components }) => {
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

export default ComponentStatusTable;
