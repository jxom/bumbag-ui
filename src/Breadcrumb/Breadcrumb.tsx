/* eslint react/prop-types: 0 */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Breadcrumb as _Breadcrumb, BreadcrumbList as _BreadcrumbList } from './styled';
import BreadcrumbStep, { LocalBreadcrumbStepProps } from './BreadcrumbStep';

export type LocalBreadcrumbProps = {
  children: React.ReactNode;
  separationColor?: string;
};

export type BreadcrumbProps = {
  separationColor?: string;
};

export type BreadcrumbComponents = {
  Step: React.FunctionComponent<LocalBreadcrumbStepProps>;
};

export const Breadcrumb: React.FunctionComponent<LocalBreadcrumbProps> & BreadcrumbComponents = ({
  children,
  separationColor
}) => {
  return (
    <_Breadcrumb a11yTitle="Breadcrumb" separationColor={separationColor}>
      <_BreadcrumbList isOrdered isHorizontal>
        {children}
      </_BreadcrumbList>
    </_Breadcrumb>
  );
};

Breadcrumb.Step = BreadcrumbStep;

export const breadcrumbPropTypes = {
  children: PropTypes.node.isRequired,
  separationColor: PropTypes.string
};
Breadcrumb.propTypes = breadcrumbPropTypes;

export const breadcrumbDefaultProps = {
  separationColor: ''
};
Breadcrumb.defaultProps = breadcrumbDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<LocalBreadcrumbProps> & BreadcrumbComponents = Breadcrumb;
export default C;
