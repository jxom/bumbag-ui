import * as React from 'react';
import { DropdownMenu } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => <DropdownMenu.Disclosure {...menu}>Actions</DropdownMenu.Disclosure>}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for CSS props', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => (
          <DropdownMenu.Disclosure {...menu} backgroundColor="red">
            Actions
          </DropdownMenu.Disclosure>
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('DropdownMenu.Disclosure.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => (
          <DropdownMenu.Disclosure
            {...menu}
            overrides={{ DropdownMenu: { Disclosure: { css: { root: { backgroundColor: 'red' } } } } }}
          >
            Actions
          </DropdownMenu.Disclosure>
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('DropdownMenu.Disclosure.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => <DropdownMenu.Disclosure {...menu}>Actions</DropdownMenu.Disclosure>}
      </DropdownMenu.State>,
      { theme: { DropdownMenu: { Disclosure: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => <DropdownMenu.Disclosure {...menu}>Actions</DropdownMenu.Disclosure>}
      </DropdownMenu.State>,
      { theme: { DropdownMenu: { Disclosure: { defaultProps: { className: 'test', color: 'primary' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
