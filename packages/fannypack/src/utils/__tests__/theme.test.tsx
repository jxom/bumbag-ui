import * as React from 'react';
import { Box } from '../../Box';
import { breakpoint, theme } from '../theme';
import { css, styled } from '../../styled';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly for mobile', () => {
    const StyledBox = styled(Box)`
      ${breakpoint(
        'mobile',
        css`
          color: red;
        `
      )};
    `;
    const { container } = render(<StyledBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for tablet', () => {
    const StyledBox = styled(Box)`
      ${breakpoint(
        'tablet',
        css`
          color: red;
        `
      )};
    `;
    const { container } = render(<StyledBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for desktop', () => {
    const StyledBox = styled(Box)`
      ${breakpoint(
        'desktop',
        css`
          color: red;
        `
      )};
    `;
    const { container } = render(<StyledBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for widescreen', () => {
    const StyledBox = styled(Box)`
      ${breakpoint(
        'widescreen',
        css`
          color: red;
        `
      )};
    `;
    const { container } = render(<StyledBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for fullHD', () => {
    const StyledBox = styled(Box)`
      ${breakpoint(
        'fullHD',
        css`
          color: red;
        `
      )};
    `;
    const { container } = render(<StyledBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for min-desktop', () => {
    const StyledBox = styled(Box)`
      ${breakpoint(
        'min-desktop',
        css`
          color: red;
        `
      )};
    `;
    const { container } = render(<StyledBox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for max-tablet', () => {
    const StyledBox = styled(Box)`
      ${breakpoint(
        'max-tablet',
        css`
          color: red;
        `
      )};
    `;
    const { container } = render(<StyledBox />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
