import React from 'react';
import render from '../../_utils/tests/render';
import List from '../List';
it('renders correctly for a basic list', () => {
  const { container } = render(
    <List>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
      <List.Item>Item 4</List.Item>
    </List>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a list with styles', () => {
  const { container } = render(
    <div>
      <List listStyleType="disc" listStylePosition="inside">
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
      <List listStyleType="circle" listStylePosition="inside">
        <List.Item>Item 1</List.Item>
        <List.Item listStyleType="georgian">Item 2</List.Item>
        <List listStyleType="circle">
          <List.Item>Item 1</List.Item>
          <List.Item>Item 2</List.Item>
        </List>
      </List>
    </div>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for ordered lists', () => {
  const { container } = render(
    <div>
      <List isOrdered listStylePosition="inside">
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List isOrdered>
          <List.Item>Item 3</List.Item>
          <List isOrdered>
            <List.Item>Item 4</List.Item>
          </List>
        </List>
      </List>
    </div>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for horizontal lists', () => {
  const { container } = render(
    <div>
      <List isHorizontal>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
        <List.Item>Item 4</List.Item>
      </List>
    </div>
  );
  expect(container.firstChild).toMatchSnapshot();
});
