import * as React from 'react';
import render from '../../_utils/tests/render';
import FieldSet from '../FieldSet';
import { InputField } from '../../index';

it('renders correctly for a basic field', () => {
  const { container } = render(
    <FieldSet>
      <FieldSet isHorizontal>
        <InputField name="firstName" label="First name" />
        <InputField name="lastName" label="Last name" />
      </FieldSet>
      <InputField name="username" label="Username" />
      <InputField name="password" label="Password" type="password" />
    </FieldSet>
  );
  expect(container.firstChild).toMatchSnapshot();
});
