import * as React from 'react';
import render from '../../_utils/tests/render';
import LayoutSet from '../LayoutSet';
import { Card } from '../../index';

it('renders correctly for a basic field', () => {
  const { container } = render(
    <LayoutSet>
      <Card title="Hello">World</Card>
      <Card title="World">
        <LayoutSet spacing="major-2">
          <Card border>Yes queen</Card>
          <Card border>Yes queen</Card>
        </LayoutSet>
      </Card>
      <LayoutSet isHorizontal>
        <Card title="This is me">World</Card>
        <Card title="This is me">World</Card>
      </LayoutSet>
    </LayoutSet>
  );
  expect(container.firstChild).toMatchSnapshot();
});
