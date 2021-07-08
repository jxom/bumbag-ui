import * as React from 'react';
import _set from 'lodash/set';
import { Box } from '../../Box';
import { Menu } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Menu>
        <Menu.Item>General</Menu.Item>
        <Menu.Item>Accounts</Menu.Item>
        <Menu.Item>Alerts</Menu.Item>
        <Menu.Item>Security</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Menu backgroundColor="red">
        <Menu.Item>General</Menu.Item>
        <Menu.Item>Accounts</Menu.Item>
        <Menu.Item>Alerts</Menu.Item>
        <Menu.Item>Security</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with dividers', () => {
    const { container } = render(
      <Menu hasDividers>
        <Menu.Item>General</Menu.Item>
        <Menu.Item>Accounts</Menu.Item>
        <Menu.Item>Alerts</Menu.Item>
        <Menu.Item>Security</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with no left padding', () => {
    const { container } = render(
      <Menu hasDividers disableLeftPadding>
        <Menu.Item>General</Menu.Item>
        <Menu.Item>Accounts</Menu.Item>
        <Menu.Item>Alerts</Menu.Item>
        <Menu.Item>Security</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with disabled items', () => {
    const { container } = render(
      <Menu>
        <Menu.Item>General</Menu.Item>
        <Menu.Item disabled>Accounts</Menu.Item>
        <Menu.Item>Alerts</Menu.Item>
        <Menu.Item>Security</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with icons (left)', () => {
    const { container } = render(
      <Menu hasDividers>
        <Menu.Item iconBefore="solid-cogs" iconBeforeProps={{ color: 'primary' }}>
          Settings
        </Menu.Item>
        <Menu.Item iconBefore="solid-users" iconBeforeProps={{ color: 'primary' }}>
          Accounts
        </Menu.Item>
        <Menu.Item iconBefore="solid-exclamation-triangle" iconBeforeProps={{ color: 'primary' }}>
          Alerts
        </Menu.Item>
        <Menu.Item iconBefore="solid-lock" iconBeforeProps={{ color: 'primary' }}>
          Security
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with icons (right)', () => {
    const { container } = render(
      <Menu hasDividers>
        <Menu.Item iconAfter="solid-cogs" iconAfterProps={{ color: 'primary' }}>
          Settings
        </Menu.Item>
        <Menu.Item iconAfter="solid-users" iconAfterProps={{ color: 'primary' }}>
          Accounts
        </Menu.Item>
        <Menu.Item iconAfter="solid-exclamation-triangle" iconAfterProps={{ color: 'primary' }}>
          Alerts
        </Menu.Item>
        <Menu.Item iconAfter="solid-lock" iconAfterProps={{ color: 'primary' }}>
          Security
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with addon component (left)', () => {
    const { container } = render(
      <Menu hasDividers>
        <Menu.Item before={<Box backgroundColor="blue" width="major-2" height="major-2" borderRadius="16px" />}>
          Settings
        </Menu.Item>
        <Menu.Item before={<Box backgroundColor="red" width="major-2" height="major-2" borderRadius="16px" />}>
          Accounts
        </Menu.Item>
        <Menu.Item before={<Box backgroundColor="orange" width="major-2" height="major-2" borderRadius="16px" />}>
          Alerts
        </Menu.Item>
        <Menu.Item before={<Box backgroundColor="purple" width="major-2" height="major-2" borderRadius="16px" />}>
          Security
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with addon component (right)', () => {
    const { container } = render(
      <Menu hasDividers>
        <Menu.Item after={<Box backgroundColor="blue" width="major-2" height="major-2" borderRadius="16px" />}>
          Settings
        </Menu.Item>
        <Menu.Item after={<Box backgroundColor="red" width="major-2" height="major-2" borderRadius="16px" />}>
          Accounts
        </Menu.Item>
        <Menu.Item after={<Box backgroundColor="orange" width="major-2" height="major-2" borderRadius="16px" />}>
          Alerts
        </Menu.Item>
        <Menu.Item after={<Box backgroundColor="purple" width="major-2" height="major-2" borderRadius="16px" />}>
          Security
        </Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with static items', () => {
    const { container } = render(
      <Menu>
        <Menu.Item isStatic>General</Menu.Item>
        <Menu.Item>Accounts</Menu.Item>
        <Menu.Item>Alerts</Menu.Item>
        <Menu.Item>Security</Menu.Item>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  [
    'Menu.styles.base',
    'Menu.Item.styles.base',
    'Menu.Item.Content.styles.base',
    'Menu.Item.ContentText.styles.base',
  ].forEach((key) => {
    it(`${key} should render correctly`, () => {
      let theme = {};
      _set(theme, key, { backgroundColor: 'red' });
      const { container } = render(
        <Menu>
          <Menu.Item>General</Menu.Item>
          <Menu.Item>Accounts</Menu.Item>
          <Menu.Item>Alerts</Menu.Item>
          <Menu.Item>Security</Menu.Item>
        </Menu>,
        {
          theme,
        }
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  [
    'Menu.styles.base',
    'Menu.Item.styles.base',
    'Menu.Item.Content.styles.base',
    'Menu.Item.ContentText.styles.base',
  ].forEach((key) => {
    it(`${key} should render correctly`, () => {
      let theme = {};
      _set(theme, key, { backgroundColor: 'red' });
      const { container } = render(
        <Menu overrides={theme}>
          <Menu.Item>General</Menu.Item>
          <Menu.Item>Accounts</Menu.Item>
          <Menu.Item>Alerts</Menu.Item>
          <Menu.Item>Security</Menu.Item>
        </Menu>,
        {
          theme,
        }
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
