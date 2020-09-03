import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { DropdownMenu } from '../index';
import { Button } from '../../Button';
import { Link } from '../../Link';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
        visible
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an invisible dropdown menu', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for CSS props', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        backgroundColor="red"
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with groups', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
        visible
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an uncontrolled option group', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.OptionGroup defaultValue="asc" title="Sort by" type="radio">
              <DropdownMenu.OptionItem value="asc">Ascending</DropdownMenu.OptionItem>
              <DropdownMenu.OptionItem value="desc">Descending</DropdownMenu.OptionItem>
            </DropdownMenu.OptionGroup>
            <DropdownMenu.OptionGroup defaultValue={['australia', 'india']} title="Countries" type="checkbox">
              <DropdownMenu.OptionItem value="australia">Australia</DropdownMenu.OptionItem>
              <DropdownMenu.OptionItem value="us">United States</DropdownMenu.OptionItem>
              <DropdownMenu.OptionItem value="india">India</DropdownMenu.OptionItem>
            </DropdownMenu.OptionGroup>
          </React.Fragment>
        }
        visible
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a controlled option group', () => {
    const { container } = render(() => {
      const [sortBy, setSortBy] = React.useState<Array<string> | string>('asc');
      const [countries, setCountries] = React.useState<Array<string> | string>(['australia', 'india']);

      return (
        <DropdownMenu
          baseId="test"
          menu={
            <React.Fragment>
              <DropdownMenu.OptionGroup
                onChange={(value) => setSortBy(value)}
                value={sortBy}
                title="Sort by"
                type="radio"
              >
                <DropdownMenu.OptionItem value="asc">Ascending</DropdownMenu.OptionItem>
                <DropdownMenu.OptionItem value="desc">Descending</DropdownMenu.OptionItem>
              </DropdownMenu.OptionGroup>
              <DropdownMenu.OptionGroup
                onChange={(value) => setCountries(value)}
                value={countries}
                title="Countries"
                type="checkbox"
              >
                <DropdownMenu.OptionItem value="australia">Australia</DropdownMenu.OptionItem>
                <DropdownMenu.OptionItem value="us">United States</DropdownMenu.OptionItem>
                <DropdownMenu.OptionItem value="india">India</DropdownMenu.OptionItem>
              </DropdownMenu.OptionGroup>
            </React.Fragment>
          }
          visible
        >
          <Button iconAfter="chevron-down">Actions</Button>
        </DropdownMenu>
      );
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('DropdownMenu.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { styles: { base: { backgroundColor: 'red' } } } }}
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Popover.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Popover: { styles: { base: { backgroundColor: 'red' } } } } }}
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Button.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Button: { styles: { base: { backgroundColor: 'red' } } } } }}
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Divider.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Divider: { styles: { base: { backgroundColor: 'red' } } } } }}
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Group.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Group: { styles: { base: { backgroundColor: 'red' } } } } }}
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Item.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Item: { styles: { base: { backgroundColor: 'red' } } } } }}
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('DropdownMenu.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      {
        theme: { DropdownMenu: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Popover.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Popover: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Button.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Button: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Divider.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Divider: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Group.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Group: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Item.styles.base should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Item: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      {
        theme: { DropdownMenu: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
