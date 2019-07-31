import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Button, useButtonProps } from '../Button';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Hello world</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  // it('should render correctly with CSS props', () => {
  //   const { container } = render(<Button backgroundColor="red" color="white" />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it('should render correctly with a color CSS prop', () => {
  //   const { container } = render(<Button backgroundColor="white900" color="primary" />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it('should render correctly with a spacing CSS prop', () => {
  //   const { container } = render(<Button margin="major-4" paddingLeft="major-2" />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it('should render correctly with a font size CSS prop', () => {
  //   const { container } = render(<Button fontSize="400" />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it('should render correctly with a font weight CSS prop', () => {
  //   const { container } = render(<Button fontWeight="semibold" />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  // it('should render correctly with overrides', () => {
  //   const { container } = render(<Button overrides={{ base: { backgroundColor: 'red' } }} />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});

// describe('composition', () => {
//   describe('as', () => {
//     it('should render correctly', () => {
//       const { container } = render(<Button as="p">Hello world</Button>);
//       expect(container.firstChild).toMatchSnapshot();
//     });
//   });

//   describe('hook', () => {
//     it('should return with Button props', () => {
//       const { result } = renderHook(() => useButtonProps())
//       expect(result.current).toMatchSnapshot();
//     });
//   });

//   describe('render props', () => {
//     it('should render correctly', () => {
//       const { container } = render(<Button>{ButtonProps => <p {...ButtonProps}>Hello world</p>}</Button>);
//       expect(container.firstChild).toMatchSnapshot();
//     });
//   });
// });

// describe('theming', () => {
//   it('Button.base should render correctly', () => {
//     const { container } = render(<Button>hello world</Button>, { theme: { Button: { base: { backgroundColor: 'red' } } } });
//     expect(container.firstChild).toMatchSnapshot();
//   })
// });
