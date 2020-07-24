import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { PageWithSidebar } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<PageWithSidebar sidebar={<div>this is a sidebar</div>}>Hello world</PageWithSidebar>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with sidebarPlacement', () => {
    const { container } = render(
      <PageWithSidebar sidebar={<div>this is a sidebar</div>} sidebarPlacement="right">
        Hello world
      </PageWithSidebar>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <PageWithSidebar sidebar={<div>this is a sidebar</div>} color="primary">
        Hello world
      </PageWithSidebar>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <PageWithSidebar sidebar={<div>this is a sidebar</div>} variant="test">
        hello world
      </PageWithSidebar>,
      {
        theme: {
          PageWithSidebar: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <PageWithSidebar
        sidebar={<div>this is a sidebar</div>}
        overrides={{
          PageWithSidebar: { styles: { base: { backgroundColor: 'red' } } },
        }}
      >
        hello world
      </PageWithSidebar>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <PageWithSidebar sidebar={<div>this is a sidebar</div>}>hello world</PageWithSidebar>,
      {
        theme: {
          PageWithSidebar: { styles: { base: { backgroundColor: 'red' } } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <PageWithSidebar sidebar={<div>this is a sidebar</div>}>hello world</PageWithSidebar>,
      {
        theme: {
          PageWithSidebar: { defaultProps: { className: 'test', color: 'primary' } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
