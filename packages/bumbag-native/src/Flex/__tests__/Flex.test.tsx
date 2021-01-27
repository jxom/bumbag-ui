import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Flex } from '../Flex';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Flex>Hello world</Flex>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Flex color="primary">Hello world</Flex>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('hook', () => {
    it('should return with Flex props', () => {
      const { result } = renderHook(() => Flex.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Flex>{(FlexProps) => <Flex {...FlexProps}>Hello world</Flex>}</Flex>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Flex.styles.base should render correctly', () => {
    const { container } = render(<Flex>hello world</Flex>, {
      theme: { Flex: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for color', () => {
    const { container } = render(<Flex>hello world</Flex>, {
      theme: { Flex: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
