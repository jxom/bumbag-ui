import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Page } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Page.Content>Hello world</Page.Content>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Page.Content color="primary">Hello world</Page.Content>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('css.root should render correctly', () => {
    const { container } = render(<Page.Content variant="test">hello world</Page.Content>, {
      theme: {
        Page: {
          Content: {
            variants: { test: { css: { root: { backgroundColor: 'red' } } } }
          }
        }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <Page.Content
        overrides={{
          Page: { Content: { css: { root: { backgroundColor: 'red' } } } }
        }}
      >
        hello world
      </Page.Content>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('css.root should render correctly', () => {
    const { container } = render(<Page.Content>hello world</Page.Content>, {
      theme: {
        Page: { Content: { css: { root: { backgroundColor: 'red' } } } }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Page.Content>hello world</Page.Content>, {
      theme: {
        Page: {
          Content: { defaultProps: { className: 'test', color: 'primary' } }
        }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
