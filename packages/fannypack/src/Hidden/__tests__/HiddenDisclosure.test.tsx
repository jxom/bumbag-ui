import * as React from 'react';
import { useHiddenState } from 'reakit';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Hidden } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const hidden = Hidden.useState({ baseId: 'test' });
      return <Hidden.Disclosure {...hidden}>Toggle</Hidden.Disclosure>;
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    function Component() {
      const hidden = Hidden.useState({ baseId: 'test' });
      return (
        <Hidden.Disclosure ref={ref} {...hidden}>
          Toggle
        </Hidden.Disclosure>
      );
    }
    render(<Component />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly when disabled is set', () => {
    function Component() {
      const hidden = Hidden.useState({ baseId: 'test' });
      return (
        <Hidden.Disclosure disabled {...hidden}>
          Toggle
        </Hidden.Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when focusable is set', () => {
    function Component() {
      const hidden = Hidden.useState({ baseId: 'test' });
      return (
        <Hidden.Disclosure disabled focusable {...hidden}>
          Toggle
        </Hidden.Disclosure>
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
        const hidden = Hidden.useState({ baseId: 'test' });
        return (
          <Hidden.Disclosure use={Box} {...hidden}>
            Toggle
          </Hidden.Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Hidden.Disclosure props', () => {
      const { result } = renderHook(() => {
        const hidden = Hidden.useState({ baseId: 'test' });
        return Hidden.Disclosure.useProps(hidden);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Hidden.useState({ baseId: 'test' });
        return (
          <Hidden.Disclosure {...hidden}>
            {HiddenDisclosureProps => <div {...HiddenDisclosureProps}>Hello world</div>}
          </Hidden.Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Hidden.Disclosure.base should render correctly', () => {
    function Component() {
      const hidden = Hidden.useState({ baseId: 'test' });
      return (
        <Hidden.Disclosure overrides={{ Hidden: { Disclosure: { base: { backgroundColor: 'red' } } } }} {...hidden}>
          Toggle
        </Hidden.Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Hidden.Disclosure.base should render correctly', () => {
    function Component() {
      const hidden = Hidden.useState({ baseId: 'test' });
      return <Hidden.Disclosure {...hidden}>Toggle</Hidden.Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Hidden: { Disclosure: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const hidden = Hidden.useState({ baseId: 'test' });
      return <Hidden.Disclosure {...hidden}>Toggle</Hidden.Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Hidden: { Disclosure: { defaultProps: { className: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
