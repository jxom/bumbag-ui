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

  it('should render correctly for fixed image', () => {
    const { container } = render(<Image alt="Bean" isFixed src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for fit cover', () => {
    const { container } = render(<Image alt="Bean" fit="cover" src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for fit contain', () => {
    const { container } = render(<Image alt="Bean" fit="contain" src="test.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Image.base should render correctly', () => {
    const { container } = render(<Image src="test.png" />, {
      theme: { Image: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Image.fixed should render correctly', () => {
    const { container } = render(<Image isFixed src="test.png" />, {
      theme: { Image: { styles: { fixed: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Image.contain should render correctly', () => {
    const { container } = render(<Image fit="contain" src="test.png" />, {
      theme: { Image: { styles: { contain: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Image.cover should render correctly', () => {
    const { container } = render(<Image fit="cover" src="test.png" />, {
      theme: { Image: { styles: { cover: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Image src="test.png" />, {
      theme: { Image: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
