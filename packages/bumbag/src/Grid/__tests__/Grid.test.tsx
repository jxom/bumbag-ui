import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Grid } from '../Grid';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Grid>Hello world</Grid>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Grid autoFlow="row" gap="3vw">
        Hello world
      </Grid>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Grid use="p">Hello world</Grid>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Grid props', () => {
      const { result } = renderHook(() => Grid.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Grid>{(GridProps) => <div {...GridProps}>Hello world</div>}</Grid>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Grid.base should render correctly', () => {
    const { container } = render(<Grid>hello world</Grid>, {
      theme: { Grid: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Grid>hello world</Grid>, {
      theme: { Grid: { defaultProps: { autoFlow: 'row', className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
