import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Code } from '../Code';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Code>Hello world</Code>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Code color="primary">Hello world</Code>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly as a block', () => {
    const { container } = render(<Code isBlock>Hello world</Code>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with palette', () => {
    const { container } = render(<Code palette="primary">Hello world</Code>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Code use="p">Hello world</Code>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Code props', () => {
      const { result } = renderHook(() => Code.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Code>{(CodeProps) => <div {...CodeProps}>Hello world</div>}</Code>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Code.base should render correctly', () => {
    const { container } = render(<Code>hello world</Code>, {
      theme: { Code: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Code>hello world</Code>, {
      theme: { Code: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for palette', () => {
    const { container } = render(<Code>hello world</Code>, {
      theme: { Code: { defaultProps: { palette: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
