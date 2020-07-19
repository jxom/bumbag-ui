import * as React from 'react';
import { Tabs } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1" backgroundColor="primary">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with selectedId', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab2">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for fitted tabs', () => {
    const { container } = render(
      <Tabs isFitted baseId="test" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for center align', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1">
        <Tabs.List align="center">
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for right align', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1">
        <Tabs.List align="right">
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for boxed tabs', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1">
        <Tabs.List variant="boxed">
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for button tabs', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1">
        <Tabs.List variant="button">
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for unstyled tabs', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1">
        <Tabs.List variant="unstyled">
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for vertical tabs', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Tabs.css.root should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      { theme: { Tabs: { css: { root: { backgroundColor: 'red' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.List.css.root should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      { theme: { Tabs: { List: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.root should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      { theme: { Tabs: { Tab: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.selected should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      { theme: { Tabs: { Tab: { css: { selected: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.focus should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      { theme: { Tabs: { Tab: { css: { focus: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.hover should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      { theme: { Tabs: { Tab: { css: { hover: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Panel.css.root should render correctly', () => {
    const { container } = render(
      <Tabs baseId="test" orientation="vertical" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      { theme: { Tabs: { Panel: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Tabs.css.root should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { css: { root: { backgroundColor: 'red' } } } }}
      >
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.List.css.root should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { List: { css: { root: { backgroundColor: 'red' } } } } }}
      >
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.root should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { css: { root: { backgroundColor: 'red' } } } } }}
      >
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.selected should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { css: { selected: { backgroundColor: 'red' } } } } }}
      >
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.focus should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { css: { focus: { backgroundColor: 'red' } } } } }}
      >
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.css.hover should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { css: { hover: { backgroundColor: 'red' } } } } }}
      >
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Panel.css.root should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Panel: { css: { root: { backgroundColor: 'red' } } } } }}
      >
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Tabs baseId="test" selectedId="tab1">
        <Tabs.List>
          <Tabs.Tab tabId="tab1">Dogs</Tabs.Tab>
          <Tabs.Tab tabId="tab2">Cats</Tabs.Tab>
          <Tabs.Tab tabId="tab3">Parrots</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel tabId="tab1" padding="major-2">
          Dogs are awesome
        </Tabs.Panel>
        <Tabs.Panel tabId="tab2" padding="major-2">
          Cats are alright
        </Tabs.Panel>
        <Tabs.Panel tabId="tab3" padding="major-2">
          Parrots are cool
        </Tabs.Panel>
      </Tabs>,
      {
        theme: {
          Tabs: { defaultProps: { className: 'test', color: 'primary' }, List: { defaultProps: { variant: 'boxed' } } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
