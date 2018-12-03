import React from 'react';
import render from '../../_utils/tests/render';
import Column from '../Column';
import Columns from '../../Columns';
it('renders correctly for basic columns', () => {
  const { container } = render(
    <Columns>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe('basic sizes', () => {
  it('renders correctly when all columns have sizes', () => {
    const { container } = render(
      <Columns>
        <Column spread={6}>Column</Column>
        <Column spread={3}>Column</Column>
        <Column spread={2}>Column</Column>
        <Column spread={1}>Column</Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when there is space still left on the right', () => {
    const { container } = render(
      <Columns>
        <Column spread={6}>Column</Column>
        <Column spread={3}>Column</Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when one of the columns does not have a size', () => {
    const { container } = render(
      <Columns>
        <Column spread={6}>Column</Column>
        <Column spread={3}>Column</Column>
        <Column>Column</Column>
        <Column spread={1}>Column</Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when the first column does not have a size', () => {
    const { container } = render(
      <Columns>
        <Column>Column</Column>
        <Column spread={3}>Column</Column>
        <Column spread={2}>Column</Column>
        <Column spread={1}>Column</Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('basic offsets', () => {
  it('renders correctly for a spread offset of "left"', () => {
    const { container } = render(
      <Columns>
        <Column spread={6}>Column</Column>
        <Column spread={2} spreadOffset="left">
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a spread offset of "right"', () => {
    const { container } = render(
      <Columns>
        <Column spread={2} spreadOffset="right">
          Column
        </Column>
        <Column spread={6}>Column</Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a spread offset of "both"', () => {
    const { container } = render(
      <Columns>
        <Column spread={6}>Column</Column>
        <Column spread={2} spreadOffset="both">
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a spread offset of values between 1 and 11', () => {
    const { container } = render(
      <Columns>
        <Column spread={6}>Column</Column>
        <Column spread={3} spreadOffset={3}>
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variable sizes', () => {
  it('renders correctly when only spread and spreadDesktop is specified', () => {
    const { container } = render(
      <Columns>
        <Column spread={10} spreadDesktop={8}>
          Column
        </Column>
        <Column spread={2} spreadDesktop={4}>
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when all spreads are specified', () => {
    const { container } = render(
      <Columns>
        <Column spread={11} spreadFullHD={10} spreadWidescreen={9} spreadDesktop={8} spreadTablet={7} spreadMobile={6}>
          Column
        </Column>
        <Column spread={1} spreadFullHD={2} spreadWidescreen={3} spreadDesktop={4} spreadTablet={5} spreadMobile={6}>
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when only mobile spread is specified', () => {
    const { container } = render(
      <Columns>
        <Column spreadMobile={8}>Column</Column>
        <Column spreadMobile={4}>Column</Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when only tablet spread is specified', () => {
    const { container } = render(
      <Columns>
        <Column spreadTablet={8}>Column</Column>
        <Column spreadTablet={4}>Column</Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variable offsets', () => {
  it('renders correctly when only spreadOffset and spreadDesktopOffset is specified', () => {
    const { container } = render(
      <Columns>
        <Column spread={10} spreadOffset={2} spreadDesktop={8} spreadDesktopOffset={4}>
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when all spreadOffsets are specified', () => {
    const { container } = render(
      <Columns>
        <Column
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
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when only mobile spread offset is specified', () => {
    const { container } = render(
      <Columns>
        <Column spreadMobile={8} spreadMobileOffset={4}>
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when only tablet spread offset is specified', () => {
    const { container } = render(
      <Columns>
        <Column spreadTablet={8} spreadTabletOffset={4}>
          Column
        </Column>
      </Columns>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
