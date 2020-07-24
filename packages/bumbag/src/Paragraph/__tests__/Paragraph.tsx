import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Paragraph } from '../Paragraph';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Paragraph>Hello world</Paragraph>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Paragraph color="primary">Hello world</Paragraph>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Paragraph use="div">Hello world</Paragraph>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Paragraph props', () => {
      const { result } = renderHook(() => Paragraph.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Paragraph>{(ParagraphProps) => <div {...ParagraphProps}>Hello world</div>}</Paragraph>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Paragraph.base should render correctly', () => {
    const { container } = render(<Paragraph>hello world</Paragraph>, {
      theme: { Paragraph: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Paragraph>hello world</Paragraph>, {
      theme: { Paragraph: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
