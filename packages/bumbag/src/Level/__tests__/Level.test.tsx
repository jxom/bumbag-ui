import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Level } from '../Level';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Level>Hello world</Level>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Level color="primary">Hello world</Level>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('css.root should render correctly', () => {
    const { container } = render(<Level variant="test">hello world</Level>, {
      theme: { Level: { variants: { test: { css: { root: { backgroundColor: 'red' } } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <Level overrides={{ Level: { css: { root: { backgroundColor: 'red' } } } }}>hello world</Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('css.root should render correctly', () => {
    const { container } = render(<Level>hello world</Level>, {
      theme: { Level: { css: { root: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Level>hello world</Level>, {
      theme: { Level: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
