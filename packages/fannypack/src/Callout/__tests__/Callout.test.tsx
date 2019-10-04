import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Callout } from '../Callout';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Callout>Hello world</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Callout color="primary">Hello world</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Callout use="div">Hello world</Callout>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Callout props', () => {
      const { result } = renderHook(() => Callout.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Callout>{CalloutProps => <div {...CalloutProps}>Hello world</div>}</Callout>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Callout.base should render correctly', () => {
    const { container } = render(<Callout>hello world</Callout>, {
      // @ts-ignore
      theme: { Callout: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Callout>hello world</Callout>, {
      // @ts-ignore
      theme: { Callout: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
