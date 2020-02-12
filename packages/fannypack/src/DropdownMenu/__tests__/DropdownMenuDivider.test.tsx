import * as React from 'react';
import { DropdownMenu } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">{menu => <DropdownMenu.Divider {...menu} />}</DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for CSS props', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => <DropdownMenu.Divider {...menu} backgroundColor="red" />}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('DropdownMenu.Divider.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">
        {menu => (
          <DropdownMenu.Divider
            {...menu}
            overrides={{ DropdownMenu: { Divider: { css: { root: { backgroundColor: 'red' } } } } }}
          />
        )}
      </DropdownMenu.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('DropdownMenu.Divider.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">{menu => <DropdownMenu.Divider {...menu} />}</DropdownMenu.State>,
      { theme: { DropdownMenu: { Divider: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <DropdownMenu.State baseId="test">{menu => <DropdownMenu.Divider {...menu} />}</DropdownMenu.State>,
      { theme: { DropdownMenu: { Divider: { defaultProps: { className: 'test', color: 'primary' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
