import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '../../Button';
import { Rover } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const hidden = Rover.useState();
      return (
        <div>
          <Rover {...hidden} stopId="test1" use={Button}>
            Hello world
          </Rover>
          <Rover {...hidden} stopId="test2" use={Button} disabled>
            Hello world
          </Rover>
          <Rover {...hidden} stopId="test3" use={Button} focusable>
            Hello world
          </Rover>
        </div>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Rover.useState();
        return (
          <div>
            <Rover {...hidden} stopId="test1" use={Button}>
              Hello world
            </Rover>
            <Rover {...hidden} stopId="test2" use={Button} disabled>
              Hello world
            </Rover>
            <Rover {...hidden} stopId="test3" use={Button} focusable>
              Hello world
            </Rover>
          </div>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Rover props', () => {
      const { result } = renderHook(() => {
        const hidden = Rover.useState();
        return Rover.useProps({ ...hidden, stopId: 'test' });
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Rover.useState();
        return (
          <Rover {...hidden} stopId="test1">
            {(RoverProps) => <p {...RoverProps}>Hello world</p>}
          </Rover>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Rover.base should render correctly', () => {
    function Component() {
      const hidden = Rover.useState();
      return (
        <Rover overrides={{ Rover: { styles: { base: { backgroundColor: 'red' } } } }} {...hidden} stopId="test1">
          Hello world
        </Rover>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Rover.base should render correctly', () => {
    function Component() {
      const hidden = Rover.useState();
      return (
        <Rover {...hidden} stopId="test1">
          Hello world
        </Rover>
      );
    }
    const { container } = render(<Component />, {
      theme: { Rover: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const hidden = Rover.useState();
      return (
        <Rover {...hidden} stopId="test1">
          Hello world
        </Rover>
      );
    }
    const { container } = render(<Component />, {
      theme: { Rover: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('useContext', () => {
  it('should render correctly', () => {
    let rover;

    function ParentComponent({ children }: any) {
      return (
        <Rover.State>
          <Rover aria-label="test">{children}</Rover>
        </Rover.State>
      );
    }

    function ChildComponent() {
      const context = Rover.useContext();
      rover = context.rover;
      return <div>hello world</div>;
    }

    render(
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    );
    expect(rover).toMatchSnapshot();
  });
});
