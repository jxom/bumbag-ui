import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Breadcrumb } from '../index';
import { List } from '../../List';
import { Link } from '../../Link';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item isCurrent>
            <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Breadcrumb props', () => {
      const { result } = renderHook(() => Breadcrumb.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Breadcrumb>
          {(BreadcrumbProps) => (
            <div {...BreadcrumbProps}>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item isCurrent>
                <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
              </Breadcrumb.Item>
            </div>
          )}
        </Breadcrumb>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Breadcrumb.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb overrides={{ Breadcrumb: { styles: { base: { backgroundColor: 'red' } } } }}>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Breadcrumb.Item.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb overrides={{ Breadcrumb: { Item: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item overrides={{ Breadcrumb: { Item: { styles: { base: { backgroundColor: 'blue' } } } } }}>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Breadcrumb.Separator.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb overrides={{ Breadcrumb: { Separator: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Breadcrumb.Link.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb overrides={{ Breadcrumb: { Link: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="#"
            overrides={{ Breadcrumb: { Link: { styles: { base: { backgroundColor: 'blue' } } } } }}
          >
            Business
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Breadcrumb.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
      {
        theme: { Breadcrumb: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Breadcrumb.Item.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
      {
        theme: { Breadcrumb: { Item: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Breadcrumb.Link.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
      {
        theme: { Breadcrumb: { Link: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Breadcrumb.Separator.base should render correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
      {
        theme: { Breadcrumb: { Separator: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
      {
        theme: { Breadcrumb: { defaultProps: { className: 'test' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for separator', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
      {
        theme: { Breadcrumb: { defaultProps: { separator: '-' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for className', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
      {
        theme: { Breadcrumb: { Item: { defaultProps: { className: 'test' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
