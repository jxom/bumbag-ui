import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Disclosure } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return <Disclosure {...hidden}>Toggle</Disclosure>;
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return (
        <Disclosure ref={ref} {...hidden}>
          Toggle
        </Disclosure>
      );
    }
    render(<Component />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly when disabled is set', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return (
        <Disclosure disabled {...hidden}>
          Toggle
        </Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when focusable is set', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return (
        <Disclosure disabled focusable {...hidden}>
          Toggle
        </Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Disclosure.useState({ baseId: 'test' });
        return (
          <Disclosure use={Box} {...hidden}>
            Toggle
          </Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Disclosure props', () => {
      const { result } = renderHook(() => {
        const hidden = Disclosure.useState({ baseId: 'test' });
        return Disclosure.useProps(hidden);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Disclosure.useState({ baseId: 'test' });
        return (
          <Disclosure {...hidden}>
            {(DisclosureDisclosureProps) => <div {...DisclosureDisclosureProps}>Hello world</div>}
          </Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Disclosure.base should render correctly', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return (
        <Disclosure overrides={{ Disclosure: { styles: { base: { backgroundColor: 'red' } } } }} {...hidden}>
          Toggle
        </Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Disclosure.base should render correctly', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return <Disclosure {...hidden}>Toggle</Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Disclosure: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return <Disclosure {...hidden}>Toggle</Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Disclosure: { defaultProps: { className: 'red' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('useContext', () => {
  it('should render correctly', () => {
    let disclosure;

    function ParentComponent({ children }: any) {
      return <Disclosure.State>{children}</Disclosure.State>;
    }

    function ChildComponent() {
      const context = Disclosure.useContext();
      disclosure = context.disclosure;
      return <Box>hello world</Box>;
    }

    render(
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    );
    expect(disclosure).toMatchSnapshot();
  });
});
