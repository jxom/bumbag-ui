import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Card } from '../Card';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Card color="primary">Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Card use="div">Hello world</Card>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Card props', () => {
      const { result } = renderHook(() => Card.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Card>{CardProps => <div {...CardProps}>Hello world</div>}</Card>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Card.base should render correctly', () => {
    const { container } = render(<Card overrides={{ Card: { base: { backgroundColor: 'red' } } }}>hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Card.base should render correctly', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { defaultProps: { className: 'test' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
