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

  it('should render correctly with a color CSS prop', () => {
    const { container } = render(<Box backgroundColor="white900" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop', () => {
    const { container } = render(<Box margin="major-4" paddingLeft="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
