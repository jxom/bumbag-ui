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
  describe('hook', () => {
    it('should return with Text props', () => {
      const { result } = renderHook(() => Text.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Text>{(TextProps) => <Text {...TextProps}>Hello world</Text>}</Text>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Text.styles.base should render correctly', () => {
    const { container } = render(<Text>hello world</Text>, {
      theme: { Text: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Text.styles.base should render correctly with default font', () => {
    const { container } = render(<Text>hello world</Text>, {
      theme: {
        fonts: { default: 'default', heading: 'heading' },
        Text: { styles: { base: { backgroundColor: 'red' } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Text.styles.base should render correctly with heading font', () => {
    const { container } = render(<Text font="heading">hello world</Text>, {
      theme: {
        fonts: { default: 'default', heading: 'heading' },
        Text: { styles: { base: { backgroundColor: 'red' } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for color', () => {
    const { container } = render(<Text>hello world</Text>, {
      theme: { Text: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
