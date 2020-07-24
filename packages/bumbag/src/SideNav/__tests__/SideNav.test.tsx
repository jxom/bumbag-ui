import * as React from 'react';
import { SideNav } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <SideNav>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <SideNav backgroundColor="red">
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a selectedId', () => {
    const { container } = render(
      <SideNav selectedId="list">
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a defaultSelectedId', () => {
    const { container } = render(
      <SideNav defaultSelectedId="list">
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('SideNav.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav overrides={{ SideNav: { styles: { base: { backgroundColor: 'red' } } } }}>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('SideNav.Item.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav overrides={{ SideNav: { Item: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('SideNav.Level.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav overrides={{ SideNav: { Level: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('SideNav.Level.Title.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav overrides={{ SideNav: { Level: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('SideNav.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>,
      { theme: { SideNav: { styles: { base: { backgroundColor: 'red' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('SideNav.Item.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>,
      { theme: { SideNav: { Item: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('SideNav.Level.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>,
      { theme: { SideNav: { Level: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('SideNav.Level.Title.styles.base should render correctly', () => {
    const { container } = render(
      <SideNav>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>,
      { theme: { SideNav: { Level: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <SideNav>
        <SideNav.Level title="Components">
          <SideNav.Item href="#" navId="button">
            Button
          </SideNav.Item>
          <SideNav.Item href="#" navId="list">
            List
          </SideNav.Item>
          <SideNav.Item href="#" navId="menu">
            Menu
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item href="#" navId="menuItem">
              Menu.Item
            </SideNav.Item>
            <SideNav.Item href="#" navId="menuGroup">
              Menu.Group
            </SideNav.Item>
            <SideNav.Level>
              <SideNav.Item navId="menuGroupProps" onClick={() => console.log('props')}>
                Props
              </SideNav.Item>
            </SideNav.Level>
          </SideNav.Level>
        </SideNav.Level>
        <SideNav.Level title="Utilities">
          <SideNav.Item href="#" navId="hidden">
            Hidden
          </SideNav.Item>
          <SideNav.Item href="#" navId="rover">
            Rover
          </SideNav.Item>
          <SideNav.Level>
            <SideNav.Item navId="roverProps" onClick={() => console.log('props')}>
              Props
            </SideNav.Item>
          </SideNav.Level>
        </SideNav.Level>
      </SideNav>,
      {
        theme: { SideNav: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
