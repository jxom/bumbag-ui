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
          <Disclosure.Region {...hidden} id="test">
            Hello world
          </Disclosure.Region>
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
          <Disclosure.Region {...hidden}>Hello world</Disclosure.Region>
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
            <Disclosure.Region use={Blockquote} {...hidden}>
              Hello world
            </Disclosure.Region>
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
        return Disclosure.Region.useProps(hidden);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Disclosure.useState({ baseId: 'test' });
        return (
          <Disclosure.Region {...hidden}>
            {DisclosureProps => <div {...DisclosureProps}>Hello world</div>}
          </Disclosure.Region>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Disclosure.root should render correctly', () => {
    const { container } = render(
      <Disclosure.Region
        baseId="test"
        overrides={{ Disclosure: { Region: { css: { root: { backgroundColor: 'red' } } } } }}
      >
        hello world
      </Disclosure.Region>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Disclosure.root should render correctly', () => {
    const { container } = render(<Disclosure.Region baseId="test">hello world</Disclosure.Region>, {
      theme: { Disclosure: { Region: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Disclosure.Region baseId="test">hello world</Disclosure.Region>, {
      theme: { Disclosure: { Region: { defaultProps: { className: 'test' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
