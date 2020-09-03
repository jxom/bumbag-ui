import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Menu } from '../index';
import { Button } from '../../Button';
import { Link } from '../../Link';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an invisible dropdown menu', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for CSS props', () => {
    const { container } = render(
      <Menu baseId="test" backgroundColor="red">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with groups', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with uncontrolled option groups', () => {
    const { container } = render(
      <Menu>
        <Menu.OptionGroup defaultValue="asc" title="Sort by" type="radio">
          <Menu.OptionItem value="asc">Ascending</Menu.OptionItem>
          <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
        </Menu.OptionGroup>
        <Menu.OptionGroup defaultValue={['australia', 'india']} title="Countries" type="checkbox">
          <Menu.OptionItem value="australia">Australia</Menu.OptionItem>
          <Menu.OptionItem value="us">United States</Menu.OptionItem>
          <Menu.OptionItem value="india">India</Menu.OptionItem>
        </Menu.OptionGroup>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with controlled option groups', () => {
    const { container } = render(() => {
      const [sortBy, setSortBy] = React.useState<Array<string> | string>('asc');
      const [countries, setCountries] = React.useState<Array<string> | string>(['australia', 'india']);
      return (
        <Menu>
          <Menu.OptionGroup onChange={(value) => setSortBy(value)} value={sortBy} title="Sort by" type="radio">
            <Menu.OptionItem value="asc">Ascending</Menu.OptionItem>
            <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
          </Menu.OptionGroup>
          <Menu.OptionGroup
            onChange={(value) => setCountries(value)}
            value={countries}
            title="Countries"
            type="checkbox"
          >
            <Menu.OptionItem value="australia">Australia</Menu.OptionItem>
            <Menu.OptionItem value="us">United States</Menu.OptionItem>
            <Menu.OptionItem value="india">India</Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu>
      );
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Menu.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { styles: { base: { backgroundColor: 'red' } } } }}>
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Divider.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { Divider: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Group.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { Group: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Item.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { Item: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Menu.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      {
        theme: { Menu: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Divider.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      { theme: { Menu: { Divider: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Group.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      { theme: { Menu: { Group: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Item.styles.base should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      { theme: { Menu: { Item: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      {
        theme: { Menu: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
