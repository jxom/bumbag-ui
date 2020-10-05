import * as React from 'react';
import { Button, styled } from 'bumbag';

const SkipToMainContentButton = styled(Button)`
  position: fixed;
  top: -100%;
  left: -100%;
  &:focus {
    top: 7px;
    left: 7px;
  }
`;

const SkipToMainContent = () => {
  return (
    <SkipToMainContentButton
      use="a"
      href="#main-content"
    >
      Skip to Main Content
    </SkipToMainContentButton>
  )
}

export default SkipToMainContent;