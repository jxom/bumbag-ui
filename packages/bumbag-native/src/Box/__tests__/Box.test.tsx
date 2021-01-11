import * as React from 'react';
import { Box } from '../index';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(
      <Box ref={ref}>
        <Text>Hello world</Text>
      </Box>
    );
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Box backgroundColor="red" color="white" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.todo('should render correctly with CSS props with breakpoints');

  it.todo('should render correctly with CSS props with pseudo props');

  it.todo('should render correctly with CSS props with platform props');

  it('should render correctly for an altitude', () => {
    const { container } = render(<Box altitude="400" />);
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

  it('should render correctly with a spacing CSS prop (marginX, paddingX)', () => {
    const { container } = render(<Box marginX="major-4" paddingX="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop (marginY, paddingY)', () => {
    const { container } = render(<Box marginY="major-4" paddingY="major-2" />);
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

  it('should render correctly for a custom border', () => {
    const { container } = render(<Box border="default" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['default', '0', '1', '2', '3', '4', '5', '6'].forEach((borderRadius) => {
    it(`should render correctly for a borderRadius of ${borderRadius}`, () => {
      const { container } = render(<Box borderRadius={borderRadius} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with a color CSS prop', () => {
    const { container } = render(<Box backgroundColor="white900" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop', () => {
    const { container } = render(<Box margin="major-4" paddingLeft="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['left', 'right', 'center'].forEach((alignX) => {
    it(`should render correctly for an alignX of ${alignX}`, () => {
      // @ts-ignore
      const { container } = render(<Box alignX={alignX} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['top', 'bottom', 'center'].forEach((alignY) => {
    it(`should render correctly for an alignY of ${alignY}`, () => {
      // @ts-ignore
      const { container } = render(<Box alignY={alignY} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
