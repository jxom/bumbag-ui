import * as React from 'react';
import render from '../../_utils/tests/render';
import Link from '../../Link';
import Menu from '../Menu';

describe('props', () => {
  it('renders correctly for a basic menu', () => {
    const { container } = render(
      <Menu a11yTitle="Main menu">
        <Menu.Group>
          <Menu.Item>Edit...</Menu.Item>
          <Menu.Item>Share...</Menu.Item>
        </Menu.Group>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a menu with icons', () => {
    const { container } = render(
      <Menu a11yTitle="Main menu">
        <Menu.Group>
          <Menu.Item icon="success">Edit...</Menu.Item>
          <Menu.Item icon="danger">Share...</Menu.Item>
        </Menu.Group>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a menu with a disabled item', () => {
    const { container } = render(
      <Menu a11yTitle="Main menu">
        <Menu.Group>
          <Menu.Item icon="success" isDisabled>
            Edit...
          </Menu.Item>
          <Menu.Item icon="danger">Share...</Menu.Item>
        </Menu.Group>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a menu with two groups', () => {
    const { container } = render(
      <Menu a11yTitle="Main menu">
        <Menu.Group>
          <Menu.Item icon="success">Edit...</Menu.Item>
          <Menu.Item icon="danger">Share...</Menu.Item>
        </Menu.Group>
        <Menu.Group>
          <Menu.Item>Go to google</Menu.Item>
        </Menu.Group>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a menu with a divider', () => {
    const { container } = render(
      <Menu a11yTitle="Main menu">
        <Menu.Group>
          <Menu.Item icon="success">Edit...</Menu.Item>
          <Menu.Item icon="danger">Share...</Menu.Item>
        </Menu.Group>
        <Menu.Divider />
        <Menu.Group>
          <Menu.Item>Go to google</Menu.Item>
        </Menu.Group>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a horizontal menu', () => {
    const { container } = render(
      <Menu a11yTitle="Main menu" isHorizontal>
        <Menu.Group>
          <Menu.Item icon="success">Edit...</Menu.Item>
          <Menu.Item icon="danger">Share...</Menu.Item>
        </Menu.Group>
        <Menu.Divider />
        <Menu.Group>
          <Menu.Item>Go to google</Menu.Item>
        </Menu.Group>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a menu popover', () => {
    const { container } = render(
      <Menu.Popover
        padding="0"
        placement="bottom-start"
        width="200px"
        content={
          <Menu a11yTitle="Main menu">
            <Menu.Group title="Actions">
              <Menu.Item>Edit...</Menu.Item>
              <Menu.Item>Share...</Menu.Item>
              <Menu.Item>Rename...</Menu.Item>
              <Menu.Item color="danger">Delete...</Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group title="Links">
              <Menu.Item use={Link} href="https://google.com">
                Go to Google
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Menu.Button>Toggle menu</Menu.Button>
      </Menu.Popover>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe.skip('interaction', () => {});
