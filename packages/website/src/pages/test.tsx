import * as React from 'react';
import { Button, styled } from 'bumbag';

const CustomButton = styled(Button)`
  background-color: red;
`;

export default function Test() {
  return <CustomButton>test</CustomButton>;
}
