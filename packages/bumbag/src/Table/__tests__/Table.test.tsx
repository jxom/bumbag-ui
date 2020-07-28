import * as React from 'react';
import { Table } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Table backgroundColor="primary">
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with dividers', () => {
    const { container } = render(
      <Table hasDividers>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with stripes', () => {
    const { container } = render(
      <Table isStriped>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with hoverable rows', () => {
    const { container } = render(
      <Table isHoverable>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with for a responsive table', () => {
    const { container } = render(
      <Table isResponsive>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with for a responsive table with breakpoint', () => {
    const { container } = render(
      <Table isResponsive responsiveBreakpoint="tablet">
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with for a table with minimal variant', () => {
    const { container } = render(
      <Table variant="minimal">
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with for a table with shadowed variant', () => {
    const { container } = render(
      <Table variant="shadowed">
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Table.base should render correctly', () => {
    const { container } = render(
      <Table overrides={{ Table: { styles: { base: { backgroundColor: 'red' } } } }}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Head.base should render correctly', () => {
    const { container } = render(
      <Table overrides={{ Table: { Head: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.HeadCell.base should render correctly', () => {
    const { container } = render(
      <Table overrides={{ Table: { HeadCell: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Body.base should render correctly', () => {
    const { container } = render(
      <Table overrides={{ Table: { Body: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Cell.base should render correctly', () => {
    const { container } = render(
      <Table overrides={{ Table: { Cell: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Foot.base should render correctly', () => {
    const { container } = render(
      <Table overrides={{ Table: { Foot: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Row.base should render correctly', () => {
    const { container } = render(
      <Table overrides={{ Table: { Row: { styles: { base: { backgroundColor: 'red' } } } } }}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Table.base should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      {
        theme: { Table: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Head.base should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      { theme: { Table: { Head: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.HeadCell.base should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      { theme: { Table: { HeadCell: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Body.base should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      { theme: { Table: { Body: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Cell.base should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      { theme: { Table: { Cell: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Row.base should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      { theme: { Table: { Row: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Table.Foot.base should render correctly', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      { theme: { Table: { Foot: { styles: { base: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
            <Table.HeadCell textAlign="right">Price</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Nike</Table.Cell>
            <Table.Cell textAlign="right">3</Table.Cell>
            <Table.Cell textAlign="right">$9.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell textAlign="right">4</Table.Cell>
            <Table.Cell textAlign="right">$12.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>North Face</Table.Cell>
            <Table.Cell textAlign="right">5</Table.Cell>
            <Table.Cell textAlign="right">$15.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Foot fontWeight="semibold">
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
            <Table.Cell />
            <Table.Cell textAlign="right">$36.00</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table>,
      {
        // @ts-ignore
        theme: { Table: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
