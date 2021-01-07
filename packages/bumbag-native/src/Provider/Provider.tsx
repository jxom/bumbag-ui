import React from 'react';
import { Platform } from 'react-native';
import { Provider as BumbagProvider } from 'bumbag/Provider';

type Props = {
  children: any;
};

export function Provider(props: Props) {
  const { children } = props;
  return <BumbagProvider platform={Platform.OS === 'web' ? 'web' : 'native'}>{children}</BumbagProvider>;
}
