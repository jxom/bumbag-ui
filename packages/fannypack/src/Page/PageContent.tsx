import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _get from 'lodash/get';

import { withTheme } from '../styled';
import { ContainerProps, LocalContainerProps, containerPropTypes, containerDefaultProps } from '../Container/Container';
import { PageContent as _PageContent, PageContentWrapper } from './styled';

export type LocalPageContentProps = LocalContainerProps & {
  children: React.ReactNode;
  theme?: Object;
  wrapperProps?: Object;
};
export type PageContentProps = ContainerProps & LocalPageContentProps;

export const PageContent: React.FunctionComponent<LocalPageContentProps> = ({
  breakpoint,
  children,
  isFluid,
  isLayout,
  theme,
  wrapperProps,
  ...props
}) => (
  <PageContentWrapper {...wrapperProps}>
    <_PageContent
      breakpoint={breakpoint}
      isFluid={isFluid || !breakpoint}
      isLayout={isLayout}
      {...props}
      {..._get(theme, 'fannypack.Page.Content.defaultProps', {})}
    >
      {children}
    </_PageContent>
  </PageContentWrapper>
);

export const PageContentPropTypes = {
  ...containerPropTypes,
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  wrapperProps: PropTypes.object
};
PageContent.propTypes = PageContentPropTypes;

export const PageContentDefaultProps = {
  ...containerDefaultProps,
  breakpoint: 'tablet' as 'tablet',
  isLayout: true,
  theme: {},
  wrapperProps: {}
};
PageContent.defaultProps = PageContentDefaultProps;

const C: React.FunctionComponent<PageContentProps> = withTheme(PageContent);
export default C;
