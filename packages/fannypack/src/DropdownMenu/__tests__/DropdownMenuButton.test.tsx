import * as React from 'react';
import { DropdownMenu } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => <DropdownMenu.Button {...menu}>Actions</DropdownMenu.Button>}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for CSS props', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => (
          <DropdownMenu.Button {...menu} backgroundColor="red">
            Actions
          </DropdownMenu.Button>
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('DropdownMenu.Button.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => (
          <DropdownMenu.Button
            {...menu}
            overrides={{ DropdownMenu: { Button: { css: { root: { backgroundColor: 'red' } } } } }}
          >
            Actions
          </DropdownMenu.Button>
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('DropdownMenu.Button.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => <DropdownMenu.Button {...menu}>Actions</DropdownMenu.Button>}
      </DropdownMenu.State>,
      { theme: { DropdownMenu: { Button: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => <DropdownMenu.Button {...menu}>Actions</DropdownMenu.Button>}
      </DropdownMenu.State>,
      { theme: { DropdownMenu: { Button: { defaultProps: { className: 'test', color: 'primary' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
