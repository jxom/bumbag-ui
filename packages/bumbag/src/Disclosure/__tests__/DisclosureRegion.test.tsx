import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '../../Button';
import { Blockquote } from '../../Blockquote';
import { Disclosure } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test' });
      return (
        <div>
          <Disclosure {...hidden}>Toggle</Disclosure>
          <Disclosure.Content {...hidden} id="test">
            Hello world
          </Disclosure.Content>
        </div>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when the hidden is visible', () => {
    function Component() {
      const hidden = Disclosure.useState({ baseId: 'test', visible: true });
      return (
        <div>
          <Disclosure {...hidden}>Toggle</Disclosure>
          <Disclosure.Content {...hidden}>Hello world</Disclosure.Content>
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
        const hidden = Disclosure.useState({ baseId: 'test' });
        return (
          <div>
            <Disclosure use={Button} {...hidden}>
              Toggle
            </Disclosure>
            <Disclosure.Content use={Blockquote} {...hidden}>
              Hello world
            </Disclosure.Content>
          </div>
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
        return Disclosure.Content.useProps(hidden);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Disclosure.useState({ baseId: 'test' });
        return (
          <Disclosure.Content {...hidden}>
            {(DisclosureProps) => <div {...DisclosureProps}>Hello world</div>}
          </Disclosure.Content>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Disclosure.base should render correctly', () => {
    const { container } = render(
      <Disclosure.Content
        baseId="test"
        overrides={{ Disclosure: { Content: { styles: { base: { backgroundColor: 'red' } } } } }}
      >
        hello world
      </Disclosure.Content>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Disclosure.base should render correctly', () => {
    const { container } = render(<Disclosure.Content baseId="test">hello world</Disclosure.Content>, {
      theme: { Disclosure: { Content: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Disclosure.Content baseId="test">hello world</Disclosure.Content>, {
      theme: { Disclosure: { Content: { defaultProps: { className: 'test' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
