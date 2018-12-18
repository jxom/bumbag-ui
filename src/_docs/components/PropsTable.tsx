import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import parsePropTypes from 'parse-prop-types';
// @ts-ignore
import _get from 'lodash/get';

import Code from '../../../src/Code';
import Table from '../../../src/Table';
import Text from '../../../src/Text';

type PropDetails = { defaultValue: { value: any }; required: boolean; type: { name: string; value: {} } };

const renderType = (type: any): string => {
  if (!type) return 'unknown';
  if (Array.isArray(type)) {
    return type.map(renderType).join(' | ');
  }
  const { name } = type;
  switch (name) {
    case 'oneOf':
    case 'oneOfType':
      return renderType(type.value);
    case 'arrayOf': {
      const rendered = renderType(type.value);
      const final = /|/.test(rendered) ? `(${rendered})` : rendered;
      return `${final}[]`;
    }
    case 'objectOf':
      return `{${renderType(type.value)}}`;
    case 'instanceOf':
      return type.value;
    case 'shape':
      return JSON.stringify(
        Object.keys(type.value).reduce((currentTypes, propName) => {
          return {
            ...currentTypes,
            [propName]: renderType(type.value[propName].type)
          };
        }, {}),
        null,
        2
      )
        .split('\\"')
        .join("'")
        .split('"')
        .join('');
    case undefined:
      return `"${type}"`;
    default:
      return name;
  }
};

type Props = {
  component: React.FunctionComponent<any>;
};

const PropsTable: React.FunctionComponent<Props> = ({ component }) => {
  const propTypes: {
    [propName: string]: PropDetails;
  } = parsePropTypes(component);
  return (
    <Table isFullWidth isStriped>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Prop</Table.HeadCell>
          <Table.HeadCell width="400px">Type</Table.HeadCell>
          <Table.HeadCell>Required?</Table.HeadCell>
          <Table.HeadCell>Default</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.entries(propTypes).map(([name, prop]) => (
          <Table.Row key={name}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>
              <Code isBlock={_get(prop, 'type.value') === 'shape'} whiteSpace="pre-line">
                {renderType(prop.type)}
              </Code>
            </Table.Cell>
            <Table.Cell>{prop.required ? <Text use="strong">Required</Text> : 'Optional'}</Table.Cell>
            <Table.Cell>{prop.defaultValue && <Code>{JSON.stringify(prop.defaultValue.value)}</Code>}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

PropsTable.propTypes = {
  component: PropTypes.func.isRequired
};

export default PropsTable;
