import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PortalProps as ReakitPortalProps } from 'reakit/ts/Portal/Portal';

import { Omit } from '../types';
import _Portal from './styled';

export type PortalProps = Omit<Omit<ReakitPortalProps, 'use'>, 'ref'>;

export const Portal: React.FunctionComponent<PortalProps> = ({ children, ...props }) => (
  // @ts-ignore
  <_Portal {...props}>{children}</_Portal>
);

export const portalPropTypes = {
  children: PropTypes.node.isRequired
};
Portal.propTypes = portalPropTypes;

export default Portal;
