import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Key } from '../Key';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Key>Space</Key>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Key color="primary">Space</Key>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<Key variant="test">Space</Key>, {
      theme: { Key: { variants: { test: { styles: { base: { backgroundColor: 'red' } } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <Key overrides={{ Key: { styles: { base: { backgroundColor: 'red' } } } }}>Space</Key>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<Key>Space</Key>, {
      theme: { Key: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Key>Space</Key>, {
      theme: { Key: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
