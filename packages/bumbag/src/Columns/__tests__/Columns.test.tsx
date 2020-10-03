import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Columns } from '../index';
import { applyTheme } from '../../utils/applyTheme';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Columns>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Columns color="primary">
        <Columns.Column backgroundColor="secondary">Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when minBreakpoint is tablet', () => {
    const { container } = render(
      <Columns minBreakpoint="tablet">
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when minBreakpoint is mobile', () => {
    const { container } = render(
      <Columns minBreakpoint="mobile">
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when isOneLine = true', () => {
    const { container } = render(<Columns isOneLine>Hello world</Columns>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when isOneLine = true and minBreakpoint = tablet', () => {
    const { container } = render(
      <Columns isOneLine minBreakpoint="tablet">
        Hello world
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when isOneLine = true and minBreakpoint = mobile', () => {
    const { container } = render(
      <Columns isOneLine minBreakpoint="mobile">
        Hello world
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when isGapless = true', () => {
    const { container } = render(<Columns isGapless>Hello world</Columns>);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('spreads', () => {
    it('renders correctly when all columns have sizes', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={6}>Column</Columns.Column>
          <Columns.Column spread={3}>Column</Columns.Column>
          <Columns.Column spread={2}>Column</Columns.Column>
          <Columns.Column spread={1}>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when there is space still left on the right', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={6}>Column</Columns.Column>
          <Columns.Column spread={3}>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when one of the columns does not have a size', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={6}>Column</Columns.Column>
          <Columns.Column spread={3}>Column</Columns.Column>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column spread={1}>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when the first column does not have a size', () => {
      const { container } = render(
        <Columns>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column spread={3}>Column</Columns.Column>
          <Columns.Column spread={2}>Column</Columns.Column>
          <Columns.Column spread={1}>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('basic offsets', () => {
    it('renders correctly for a spread offset of "left"', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={6}>Column</Columns.Column>
          <Columns.Column spread={2} spreadOffset="left">
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly for a spread offset of "right"', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={2} spreadOffset="right">
            Column
          </Columns.Column>
          <Columns.Column spread={6}>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly for a spread offset of "both"', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={6}>Column</Columns.Column>
          <Columns.Column spread={2} spreadOffset="both">
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly for a spread offset of values between 1 and 11', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={6}>Column</Columns.Column>
          <Columns.Column spread={3} spreadOffset={3}>
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('variable sizes', () => {
    it('renders correctly when only spread and spreadDesktop is specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={10} spreadDesktop={8}>
            Column
          </Columns.Column>
          <Columns.Column spread={2} spreadDesktop={4}>
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when all spreads are specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column
            spread={11}
            spreadFullHD={10}
            spreadWidescreen={9}
            spreadDesktop={8}
            spreadTablet={7}
            spreadMobile={6}
          >
            Column
          </Columns.Column>
          <Columns.Column
            spread={1}
            spreadFullHD={2}
            spreadWidescreen={3}
            spreadDesktop={4}
            spreadTablet={5}
            spreadMobile={6}
          >
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when only mobile spread is specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spreadMobile={8}>Column</Columns.Column>
          <Columns.Column spreadMobile={4}>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when only tablet spread is specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spreadTablet={8}>Column</Columns.Column>
          <Columns.Column spreadTablet={4}>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('variable offsets', () => {
    it('renders correctly when only spreadOffset and spreadDesktopOffset is specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spread={10} spreadOffset={2} spreadDesktop={8} spreadDesktopOffset={4}>
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when all spreadOffsets are specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column
            spread={11}
            spreadOffset={1}
            spreadFullHD={10}
            spreadFullHDOffset={2}
            spreadWidescreen={9}
            spreadWidescreenOffset={3}
            spreadDesktop={8}
            spreadDesktopOffset={4}
            spreadTablet={7}
            spreadTabletOffset={5}
            spreadMobile={6}
            spreadMobileOffset={6}
          >
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when only mobile spread offset is specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spreadMobile={8} spreadMobileOffset={4}>
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correctly when only tablet spread offset is specified', () => {
      const { container } = render(
        <Columns>
          <Columns.Column spreadTablet={8} spreadTabletOffset={4}>
            Column
          </Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['left', 'right', 'center'].forEach((alignX) => {
    it(`should render correctly for an alignX of ${alignX}`, () => {
      const { container } = render(
        // @ts-ignore
        <Columns alignX={alignX}>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['top', 'bottom', 'center'].forEach((alignY) => {
    it(`should render correctly for an alignY of ${alignY}`, () => {
      const { container } = render(
        // @ts-ignore
        <Columns alignY={alignY}>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column>Column</Columns.Column>
          <Columns.Column>Column</Columns.Column>
        </Columns>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('renders correctly for applyTheme', () => {
    const CustomColumns = applyTheme(Columns, {
      styles: {
        base: {
          backgroundColor: 'red',
        },
      },
    });
    const { container } = render(
      <CustomColumns>
        <CustomColumns.Column>test</CustomColumns.Column>
      </CustomColumns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Columns use="p">Hello world</Columns>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Columns props', () => {
      const { result } = renderHook(() => Columns.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Columns>{(ColumnsProps) => <div {...ColumnsProps}>Hello world</div>}</Columns>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Columns.base should render correctly', () => {
    const { container } = render(
      <Columns overrides={{ Columns: { styles: { base: { backgroundColor: 'red' } } } }}>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Columns.Column.base should render correctly', () => {
    const { container } = render(
      <Columns>
        <Columns.Column overrides={{ Columns: { Column: { styles: { base: { backgroundColor: 'red' } } } } }}>
          Column
        </Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Columns.base should render correctly', () => {
    const { container } = render(
      <Columns>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>,
      {
        theme: { Columns: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Columns.Column.base should render correctly', () => {
    const { container } = render(
      <Columns>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>,
      {
        theme: { Columns: { Column: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Columns>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
        <Columns.Column>Column</Columns.Column>
      </Columns>,
      {
        theme: { Columns: { defaultProps: { className: 'test' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
