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
