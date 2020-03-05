import * as React from 'react';
import { ActionButtons, Set } from '../../';

export default { title: 'ActionButtons' };

export const _default = () => <ActionButtons />;

export const colors = () => (
  <Set orientation="vertical">
    <ActionButtons
      palette="text"
      onClickSubmit={() => console.log('submitted')}
      onClickCancel={() => console.log('cancelled')}
    />
    <ActionButtons
      palette="danger"
      onClickSubmit={() => console.log('submitted')}
      onClickCancel={() => console.log('cancelled')}
    />
  </Set>
);

export const loading = () => (
  <ActionButtons
    isLoading
    onClickSubmit={() => console.log('submitted')}
    onClickCancel={() => console.log('cancelled')}
  />
);
