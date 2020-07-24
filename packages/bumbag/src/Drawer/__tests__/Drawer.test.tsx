import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Drawer } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer}>This is a side overlay</Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an invisible overlay', () => {
    const { container } = render(
      <Drawer.State baseId="test" modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer}>This is a side overlay</Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Drawer.State baseId="test" modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer} backgroundColor="primary">
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly without backdrop', () => {
    const { container } = render(
      <Drawer.State baseId="test" modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer} hideBackdrop>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for full screen', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer} isFullScreen>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Drawer.styles.base should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer} overrides={{ Drawer: { styles: { base: { backgroundColor: 'red' } } } }}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Drawer.Disclosure.styles.base should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure
              {...drawer}
              overrides={{ Drawer: { Disclosure: { styles: { base: { backgroundColor: 'red' } } } } }}
            >
              Toggle
            </Drawer.Disclosure>
            <Drawer {...drawer}>This is a side overlay</Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Drawer.styles.base should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer}>This is a side overlay</Drawer>
          </div>
        )}
      </Drawer.State>,
      { theme: { Drawer: { styles: { base: { backgroundColor: 'red' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Drawer.Disclosure.styles.base should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer}>This is a side overlay</Drawer>
          </div>
        )}
      </Drawer.State>,
      { theme: { Drawer: { Disclosure: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible modal={false}>
        {(drawer) => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer {...drawer}>This is a side overlay</Drawer>
          </div>
        )}
      </Drawer.State>,
      { theme: { Drawer: { defaultProps: { className: 'test' } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
