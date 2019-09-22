import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Image } from '../Image';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Image src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Image alt="Bean" backgroundColor="red" src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Text.base should render correctly', () => {
    const { container } = render(<Image src="test.png" />, {
      theme: { Text: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Image src="test.png" />, {
      theme: { Text: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
