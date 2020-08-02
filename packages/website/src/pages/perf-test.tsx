import * as React from 'react';
import { Button, SelectMenu, DropdownMenu, Popover } from 'bumbag';

export default function Test() {
  const [show, setShow] = React.useState();
  if (!show) return <Button onClick={() => setShow(true)}>Show</Button>;
  return (
    <div>
      <Button onClick={() => setShow(false)}>Hide</Button>
      {/*
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      <Popover.State>
        <Popover.Disclosure use={Button}>Open Popover</Popover.Disclosure>
        <Popover hasArrow>yaya</Popover>
      </Popover.State>
      */}
      {/*
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      <DropdownMenu
        menu={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
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
      */}
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
      <SelectMenu
        options={[
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
          { key: 1, label: 'Apples', value: 'apples' },
          { key: 2, label: 'Bananas', value: 'bananas' },
          { key: 3, label: 'Oranges', value: 'oranges' },
          { key: 4, label: 'Mangos', value: 'mangos' },
        ]}
        placeholder="Select a fruit..."
      />
    </div>
  );
}
