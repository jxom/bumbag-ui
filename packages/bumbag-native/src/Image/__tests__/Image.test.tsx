import * as React from 'react';
import { Image } from '../Image';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Image accessibilityLabel="bean" source={{ uri: 'test.png' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Image accessibilityLabel="Bean" backgroundColor="red" source={{ uri: 'test.png' }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for fit contain', () => {
    const { container } = render(<Image accessibilityLabel="Bean" fit="contain" source={{ uri: 'test.png' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Image.base should render correctly', () => {
    const { container } = render(<Image source={{ uri: 'test.png' }} />, {
      theme: { Image: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for default props', () => {
    const { container } = render(<Image source={{ uri: 'test.png' }} />, {
      theme: { Image: { defaultProps: { accessibilityLabel: 'Bean' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
