import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Drawer } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an invisible overlay', () => {
    const { container } = render(
      <Drawer.State baseId="test">
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Drawer.State baseId="test">
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer} backgroundColor="primary">
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
      <Drawer.State baseId="test">
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer} hideBackdrop>
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
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer} isFullScreen>
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
  it('Drawer.css.root should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer} overrides={{ Drawer: { css: { root: { backgroundColor: 'red' } } } }}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Drawer.Disclosure.css.root should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure
              {...drawer}
              overrides={{ Drawer: { Disclosure: { css: { root: { backgroundColor: 'red' } } } } }}
            >
              Toggle
            </Drawer.Disclosure>
            <Drawer modal={false} {...drawer}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Drawer.Backdrop.css.root should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer
              modal={false}
              {...drawer}
              overrides={{ Drawer: { Backdrop: { css: { root: { backgroundColor: 'red' } } } } }}
            >
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Drawer.css.root should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>,
      { theme: { Drawer: { css: { root: { backgroundColor: 'red' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Drawer.Disclosure.css.root should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>,
      { theme: { Drawer: { Disclosure: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Drawer.Backdrop.css.root should render correctly', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>,
      { theme: { Drawer: { Backdrop: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Drawer.State baseId="test" visible>
        {drawer => (
          <div>
            <Drawer.Disclosure {...drawer}>Toggle</Drawer.Disclosure>
            <Drawer modal={false} {...drawer}>
              This is a side overlay
            </Drawer>
          </div>
        )}
      </Drawer.State>,
      { theme: { Drawer: { defaultProps: { className: 'test' } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
