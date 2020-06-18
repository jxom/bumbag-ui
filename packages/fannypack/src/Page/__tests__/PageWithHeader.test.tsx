import * as React from 'react';
import { PageWithHeader } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<PageWithHeader header={<div>this is a header</div>}>Hello world</PageWithHeader>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <PageWithHeader header={<div>this is a header</div>} color="primary">
        Hello world
      </PageWithHeader>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <PageWithHeader header={<div>this is a header</div>} variant="test">
        hello world
      </PageWithHeader>,
      {
        theme: {
          PageWithHeader: {
            variants: { test: { css: { root: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <PageWithHeader
        header={<div>this is a header</div>}
        overrides={{
          PageWithHeader: { css: { root: { backgroundColor: 'red' } } },
        }}
      >
        hello world
      </PageWithHeader>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('css.root should render correctly', () => {
    const { container } = render(<PageWithHeader header={<div>this is a header</div>}>hello world</PageWithHeader>, {
      theme: {
        PageWithHeader: { css: { root: { backgroundColor: 'red' } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<PageWithHeader header={<div>this is a header</div>}>hello world</PageWithHeader>, {
      theme: {
        PageWithHeader: { defaultProps: { className: 'test', color: 'primary' } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
