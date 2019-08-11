import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Text } from '../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Text>Hello world</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Text color="primary">Hello world</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Text use="p">Hello world</Text>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Text props', () => {
      const { result } = renderHook(() => Text.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Text>{TextProps => <div {...TextProps}>Hello world</div>}</Text>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Text.base should render correctly', () => {
    const { container } = render(<Text>hello world</Text>, {
      theme: { Text: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
