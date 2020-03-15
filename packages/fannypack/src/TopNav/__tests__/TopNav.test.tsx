import * as React from 'react';
import { TopNav } from '../index';
import { Image } from '../../Image';
import { Button } from '../../Button';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <TopNav>
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <TopNav backgroundColor="red">
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a selectedId', () => {
    const { container } = render(
      <TopNav selectedId="get-started">
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a defaultSelectedId', () => {
    const { container } = render(
      <TopNav defaultSelectedId="get-started">
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('TopNav.css.root should render correctly', () => {
    const { container } = render(
      <TopNav defaultSelectedId="get-started" overrides={{ TopNav: { css: { root: { backgroundColor: 'red' } } } }}>
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('TopNav.Item.css.root should render correctly', () => {
    const { container } = render(
      <TopNav
        defaultSelectedId="get-started"
        overrides={{ TopNav: { css: { root: { Item: { backgroundColor: 'red' } } } } }}
      >
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('TopNav.Section.css.root should render correctly', () => {
    const { container } = render(
      <TopNav
        defaultSelectedId="get-started"
        overrides={{ TopNav: { css: { root: { Item: { backgroundColor: 'red' } } } } }}
      >
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('TopNav.css.root should render correctly', () => {
    const { container } = render(
      <TopNav defaultSelectedId="get-started">
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>,
      { theme: { TopNav: { css: { root: { backgroundColor: 'red' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('TopNav.Item.css.root should render correctly', () => {
    const { container } = render(
      <TopNav defaultSelectedId="get-started">
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>,
      { theme: { TopNav: { Item: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('TopNav.Section.css.root should render correctly', () => {
    const { container } = render(
      <TopNav defaultSelectedId="get-started">
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>,
      { theme: { TopNav: { Section: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <TopNav defaultSelectedId="get-started">
        <TopNav.Section>
          <TopNav.Item href="https://fannypack.style" fontWeight="semibold">
            <Image src="/logo.png" height="44px" />
          </TopNav.Item>
          <TopNav.Item navId="get-started" href="#">
            Get started
          </TopNav.Item>
          <TopNav.Item navId="components" href="#">
            Components
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Sign up
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>,
      {
        theme: { TopNav: { defaultProps: { className: 'test', color: 'primary' } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
