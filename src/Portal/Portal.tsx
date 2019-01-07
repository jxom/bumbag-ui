import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PortalProps as ReakitPortalProps } from 'reakit/ts/Portal/Portal';

import { Omit } from '../types';
import _Portal from './styled';

export type PortalProps = Omit<ReakitPortalProps, 'as'>;

export const Portal: React.FunctionComponent<PortalProps> = ({ children, ...props }) => (
  <_Portal {...props}>{children}</_Portal>
);

Portal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Portal;
