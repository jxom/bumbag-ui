import * as React from 'react';
import render from '../../_utils/tests/render';
import Card from '../Card';

it('renders correctly for a default card', () => {
  const { container } = render(
    <Card.Card>
      <Card.Header>
        <Card.Title>This is a title</Card.Title>
      </Card.Header>
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
        ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum
        consectetur lectus augue sit amet justo.
      </Card.Content>
    </Card.Card>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a card with a footer', () => {
  const { container } = render(
    <Card.Card>
      <Card.Header>
        <Card.Title>This is a title</Card.Title>
      </Card.Header>
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
        ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum
        consectetur lectus augue sit amet justo.
      </Card.Content>
      <Card.Footer>test</Card.Footer>
    </Card.Card>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a compounded card with a actions', () => {
  const { container } = render(
    <Card title="This is a title" headerActions={<div>test</div>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
      ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur
      lectus augue sit amet justo.
    </Card>
  );
  expect(container.firstChild).toMatchSnapshot();
});
