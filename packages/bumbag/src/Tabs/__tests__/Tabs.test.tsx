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
  it('Tabs.styles.base should render correctly', () => {
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
      { theme: { Tabs: { styles: { base: { backgroundColor: 'red' } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.List.styles.base should render correctly', () => {
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
      { theme: { Tabs: { List: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.styles.base should render correctly', () => {
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
      { theme: { Tabs: { Tab: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.styles.selected should render correctly', () => {
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
      { theme: { Tabs: { Tab: { styles: { selected: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.styles.focus should render correctly', () => {
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
      { theme: { Tabs: { Tab: { styles: { focus: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Tab.styles.hover should render correctly', () => {
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
      { theme: { Tabs: { Tab: { styles: { hover: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tabs.Panel.styles.base should render correctly', () => {
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
      { theme: { Tabs: { Panel: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Tabs.styles.base should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { styles: { base: { backgroundColor: 'red' } } } }}
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

  it('Tabs.List.styles.base should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { List: { styles: { base: { backgroundColor: 'red' } } } } }}
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

  it('Tabs.Tab.styles.base should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { styles: { base: { backgroundColor: 'red' } } } } }}
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

  it('Tabs.Tab.styles.selected should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { styles: { selected: { backgroundColor: 'red' } } } } }}
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

  it('Tabs.Tab.styles.focus should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { styles: { focus: { backgroundColor: 'red' } } } } }}
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

  it('Tabs.Tab.styles.hover should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Tab: { styles: { hover: { backgroundColor: 'red' } } } } }}
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

  it('Tabs.Panel.styles.base should render correctly', () => {
    const { container } = render(
      <Tabs
        baseId="test"
        orientation="vertical"
        selectedId="tab1"
        overrides={{ Tabs: { Panel: { styles: { base: { backgroundColor: 'red' } } } } }}
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
