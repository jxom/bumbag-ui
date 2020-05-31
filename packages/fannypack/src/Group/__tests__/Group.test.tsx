import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '../../Button';
import { Box } from '../../Box';
import { Group } from '../Group';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Group>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Group position="absolute" top="0">
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Group use="div">
          <Button>Hello</Button>
          <Box>World</Box>
        </Group>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Group props', () => {
      const { result } = renderHook(() => Group.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Group>
          {(GroupProps) => (
            <div {...GroupProps}>
              <Button>Hello</Button>
              <Box>World</Box>
            </div>
          )}
        </Group>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Group.root should render correctly', () => {
    const { container } = render(
      <Group overrides={{ Group: { css: { root: { backgroundColor: 'red' } } } }}>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.root should render correctly', () => {
    const { container } = render(
      <Group overrides={{ Group: { Item: { css: { root: { backgroundColor: 'red' } } } } }}>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.first should render correctly', () => {
    const { container } = render(
      <Group overrides={{ Group: { Item: { css: { first: { backgroundColor: 'red' } } } } }}>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.middle should render correctly', () => {
    const { container } = render(
      <Group overrides={{ Group: { Item: { css: { middle: { backgroundColor: 'red' } } } } }}>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.last should render correctly', () => {
    const { container } = render(
      <Group overrides={{ Group: { Item: { css: { last: { backgroundColor: 'red' } } } } }}>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Group.root should render correctly', () => {
    const { container } = render(
      <Group>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>,
      {
        theme: { Group: { css: { root: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.root should render correctly', () => {
    const { container } = render(
      <Group>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>,
      {
        theme: { Group: { Item: { css: { root: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.first should render correctly', () => {
    const { container } = render(
      <Group>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>,
      {
        theme: { Group: { Item: { css: { first: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.last should render correctly', () => {
    const { container } = render(
      <Group>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>,
      {
        theme: { Group: { Item: { css: { last: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.Item.middle should render correctly', () => {
    const { container } = render(
      <Group>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>,
      {
        theme: { Group: { Item: { css: { middle: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Group>
        <Button>Hello</Button>
        <Box>World</Box>
      </Group>,
      {
        theme: { Group: { defaultProps: { className: 'test' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
