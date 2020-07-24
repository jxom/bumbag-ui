import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Navigation } from '../Navigation';
import { List } from '../../List';
import { Link } from '../../Link';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Navigation>
        <List>
          <List.Item>
            <Link href="https://google.com">Google</Link>
          </List.Item>
          <List.Item>
            <Link href="https://github.com">GitHub</Link>
          </List.Item>
        </List>
      </Navigation>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Navigation backgroundColor="primary">
        <List>
          <List.Item>
            <Link href="https://google.com">Google</Link>
          </List.Item>
          <List.Item>
            <Link href="https://github.com">GitHub</Link>
          </List.Item>
        </List>
      </Navigation>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Navigation use="div">
          <List>
            <List.Item>
              <Link href="https://google.com">Google</Link>
            </List.Item>
            <List.Item>
              <Link href="https://github.com">GitHub</Link>
            </List.Item>
          </List>
        </Navigation>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Navigation props', () => {
      const { result } = renderHook(() => Navigation.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Navigation>
          {(NavigationProps) => (
            <div {...NavigationProps}>
              <List>
                <List.Item>
                  <Link href="https://google.com">Google</Link>
                </List.Item>
                <List.Item>
                  <Link href="https://github.com">GitHub</Link>
                </List.Item>
              </List>
            </div>
          )}
        </Navigation>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Navigation.base should render correctly', () => {
    const { container } = render(
      <Navigation overrides={{ Navigation: { styles: { base: { backgroundColor: 'red' } } } }}>
        <List>
          <List.Item>
            <Link href="https://google.com">Google</Link>
          </List.Item>
          <List.Item>
            <Link href="https://github.com">GitHub</Link>
          </List.Item>
        </List>
      </Navigation>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Navigation.base should render correctly', () => {
    const { container } = render(
      <Navigation>
        <List>
          <List.Item>
            <Link href="https://google.com">Google</Link>
          </List.Item>
          <List.Item>
            <Link href="https://github.com">GitHub</Link>
          </List.Item>
        </List>
      </Navigation>,
      {
        theme: { Navigation: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Navigation>
        <List>
          <List.Item>
            <Link href="https://google.com">Google</Link>
          </List.Item>
          <List.Item>
            <Link href="https://github.com">GitHub</Link>
          </List.Item>
        </List>
      </Navigation>,
      {
        theme: { Navigation: { defaultProps: { className: 'test' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
