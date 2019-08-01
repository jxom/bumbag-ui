import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Button, useButtonProps } from '../Button';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Hello world</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Button backgroundColor="red" color="white">
        Hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with overrides', () => {
    const { container } = render(<Button overrides={{ base: { backgroundColor: 'red' } }}>Hello world</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('sizes', () => {
    it('should render a small button correctly', () => {
      const { container } = render(<Button size="small">Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render a default button (no size) correctly', () => {
      const { container } = render(<Button size="default">Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render a medium button correctly', () => {
      const { container } = render(<Button size="medium">Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render a large button correctly', () => {
      const { container } = render(<Button size="large">Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render correctly with overrides', () => {
      const { container } = render(
        <Button size="small" overrides={{ sizes: { small: { backgroundColor: 'red' } } }}>
          Hello world
        </Button>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Button use="div">Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Button props', () => {
      const { result } = renderHook(() => useButtonProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Button>{ButtonProps => <div {...ButtonProps}>Hello world</div>}</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Button.base should render correctly', () => {
    const { container } = render(<Button>hello world</Button>, {
      theme: { Button: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
