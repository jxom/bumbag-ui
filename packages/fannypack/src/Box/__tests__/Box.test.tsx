import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { Box, useBox } from '../Box';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Box backgroundColor="red" color="white" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a color CSS prop', () => {
    const { container } = render(<Box backgroundColor="white900" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop', () => {
    const { container } = render(<Box margin="major-4" paddingLeft="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a font size CSS prop', () => {
    const { container } = render(<Box fontSize="400" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a font weight CSS prop', () => {
    const { container } = render(<Box fontWeight="semibold" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('hook', () => {
  it('should return with box props', () => {
    const { result } = renderHook(() => useBox())
    expect(result.current).toMatchSnapshot();
  })
});
