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
  it('Menu.css.root should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { css: { root: { backgroundColor: 'red' } } } }}>
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

  it('Menu.Divider.css.root should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { Divider: { css: { root: { backgroundColor: 'red' } } } } }}>
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

  it('Menu.Group.css.root should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { Group: { css: { root: { backgroundColor: 'red' } } } } }}>
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

  it('Menu.Item.css.root should render correctly', () => {
    const { container } = render(
      <Menu baseId="test" overrides={{ Menu: { Item: { css: { root: { backgroundColor: 'red' } } } } }}>
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
  it('Menu.css.root should render correctly', () => {
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
        theme: { Menu: { css: { root: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Divider.css.root should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      { theme: { Menu: { Divider: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Group.css.root should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      { theme: { Menu: { Group: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Menu.Item.css.root should render correctly', () => {
    const { container } = render(
      <Menu baseId="test">
        <Menu.Item iconBefore="solid-pen">Edit</Menu.Item>
        <Menu.Item iconBefore="solid-share">Share</Menu.Item>
        <Menu.Item iconBefore="solid-file-signature">Rename</Menu.Item>
        <Menu.Item iconBefore="solid-trash-alt" color="danger">
          Delete
        </Menu.Item>
      </Menu>,
      { theme: { Menu: { Item: { css: { root: { backgroundColor: 'red' } } } } } }
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
