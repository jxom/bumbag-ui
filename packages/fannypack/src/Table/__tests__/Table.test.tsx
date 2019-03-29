import * as React from 'react';
import render from '../../_utils/tests/render';
import Table from '../Table';

it('renders correctly for a basic table', () => {
  const { container } = render(
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Nike</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>$9.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Adidas</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>$12.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>North Face</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$15.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a table with a footer', () => {
  const { container } = render(
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Nike</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>$9.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Adidas</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>$12.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>North Face</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$15.00</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>Total</Table.Cell>
          <Table.Cell />
          <Table.Cell>$36.00</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width table', () => {
  const { container } = render(
    <Table isFullWidth>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Nike</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>$9.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Adidas</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>$12.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>North Face</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$15.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe('borders', () => {
  it('renders correctly when an outer border is set', () => {
    const { container } = render(
      <Table hasBorder>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when row borders are set', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body hasBorders>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

it('renders correctly for a striped table', () => {
  const { container } = render(
    <Table isStriped>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Nike</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>$9.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Adidas</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>$12.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>North Face</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$15.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a hoverable table', () => {
  const { container } = render(
    <Table isHoverable>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Nike</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>$9.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Adidas</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>$12.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>North Face</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$15.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a table with a top caption', () => {
  const { container } = render(
    <Table>
      <Table.Caption>Fannypacks</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Nike</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>$9.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Adidas</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>$12.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>North Face</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$15.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a table with a bottom caption', () => {
  const { container } = render(
    <Table>
      <Table.Caption position="bottom">Fannypacks</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Nike</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>$9.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Adidas</Table.Cell>
          <Table.Cell>4</Table.Cell>
          <Table.Cell>$12.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>North Face</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$15.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  expect(container.firstChild).toMatchSnapshot();
});
