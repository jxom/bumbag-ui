import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Clickable } from '../Clickable';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Clickable>Hello world</Clickable>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Clickable color="primary">Hello world</Clickable>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<Clickable variant="test">hello world</Clickable>, {
      theme: { Clickable: { variants: { test: { styles: { base: { backgroundColor: 'red' } } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <Clickable overrides={{ Clickable: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Clickable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<Clickable>hello world</Clickable>, {
      theme: { Clickable: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Clickable>hello world</Clickable>, {
      // @ts-ignore
      theme: { Clickable: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
