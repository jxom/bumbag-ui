import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { SelectMenu } from '../SelectMenu';
import render from '../../utils/_tests/render';
import { Size } from '../../types';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <SelectMenu
        dropdownMenuInitialState={{ baseId: 'test' }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={undefined}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <SelectMenu
        dropdownMenuInitialState={{ baseId: 'test' }}
        color="primary"
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={undefined}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <SelectMenu
        dropdownMenuInitialState={{ baseId: 'test' }}
        variant="test"
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={undefined}
      />,
      {
        theme: { SelectMenu: { variants: { test: { styles: { base: { backgroundColor: 'red' } } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <SelectMenu
        dropdownMenuInitialState={{ baseId: 'test' }}
        overrides={{ SelectMenu: { styles: { base: { backgroundColor: 'red' } } } }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={undefined}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach((size) => {
    it(`should render ${size} correctly`, () => {
      const { container } = render(
        <SelectMenu
          size={size as Size}
          onChange={jest.fn()}
          options={[
            { key: 1, label: 'Apples', value: 'apples' },
            { key: 2, label: 'Bananas', value: 'bananas' },
            { key: 3, label: 'Oranges', value: 'oranges' },
            { key: 4, label: 'Mangos', value: 'mangos' },
          ]}
          placeholder="Search for a fruit..."
          value={undefined}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <SelectMenu
        dropdownMenuInitialState={{ baseId: 'test' }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={undefined}
      />,
      {
        theme: { SelectMenu: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <SelectMenu
        dropdownMenuInitialState={{ baseId: 'test' }}
        onChange={jest.fn()}
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Search for a fruit..."
        value={undefined}
      />,
      {
        theme: { SelectMenu: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
