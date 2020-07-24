import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Blockquote } from '../Blockquote';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Blockquote>Hello world</Blockquote>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Blockquote borderColor="primary">Hello world</Blockquote>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it.only('should render correctly', () => {
      const { container } = render(<Blockquote use="p">Hello world</Blockquote>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Blockquote props', () => {
      const { result } = renderHook(() => Blockquote.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Blockquote>{(BlockquoteProps) => <div {...BlockquoteProps}>Hello world</div>}</Blockquote>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Blockquote.base should render correctly', () => {
    const { container } = render(<Blockquote>hello world</Blockquote>, {
      theme: { Blockquote: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly', () => {
    const { container } = render(<Blockquote>hello world</Blockquote>, {
      theme: { Blockquote: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
