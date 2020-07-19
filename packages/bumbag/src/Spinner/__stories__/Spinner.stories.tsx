import * as React from 'react';
import { Spinner, Set, List } from '../../';

export default { title: 'Spinner' };

export const _default = () => <Spinner />;

export const sizes = () => (
  <Set orientation="vertical">
    <Spinner size="small" />
    <Spinner />
    <Spinner size="medium" />
    <Spinner size="large" />
    <Spinner fontSize="50px" />
  </Set>
);

export const colors = () => (
  <Set orientation="vertical">
    <Spinner color="success" />
    <Spinner color="danger" />
    <Spinner color="warning" />
  </Set>
);

export const duration = () => (
  <Set orientation="vertical">
    <Spinner duration="0.2s" />
    <Spinner duration="0.6s" />
    <Spinner duration="1.2s" />
  </Set>
);

export const track = () => (
  <Set orientation="vertical">
    <Spinner hasTrack size="large" />
    <Spinner hasTrack trackColor="red" size="large" />
  </Set>
);
