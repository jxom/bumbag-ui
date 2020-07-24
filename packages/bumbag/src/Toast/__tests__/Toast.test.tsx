import * as React from 'react';
import { Toast } from '../Toast';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Toast>Hello world</Toast>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Toast color="primary">Hello world</Toast>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a countdown', () => {
    const { container } = render(<Toast countdown={5000}>Hello world</Toast>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<Toast variant="test">hello world</Toast>, {
      theme: { Toast: { variants: { test: { styles: { base: { backgroundColor: 'red' } } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Toast.base should render correctly', () => {
    const { container } = render(
      <Toast overrides={{ Toast: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Toast>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Toast.base should render correctly', () => {
    const { container } = render(<Toast>hello world</Toast>, {
      theme: { Toast: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Toast>hello world</Toast>, {
      // @ts-ignore
      theme: { Toast: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
