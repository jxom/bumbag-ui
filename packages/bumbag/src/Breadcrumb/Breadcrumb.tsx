import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Link, LinkProps } from '../Link';
import { List, ListItemProps } from '../List';
import { Text } from '../Text';
import { Navigation, NavigationProps } from '../Navigation';

import * as styles from './Breadcrumb.styles';

export type LocalBreadcrumbProps = {
  /** Indicates if the breadcrumb has a separator. */
  hasSeparator?: LocalBreadcrumbItemProps['hasSeparator'];
  /** The separator of the breadcrumbs. It can be a string, or a React component. */
  separator?: LocalBreadcrumbItemProps['separator'];
};
export type BreadcrumbProps = NavigationProps & LocalBreadcrumbProps;

export type BreadcrumbContextOptions = { overrides?: BoxProps['overrides'] };
export const BreadcrumbContext = React.createContext<BreadcrumbContextOptions>({});

const useProps = createHook<BreadcrumbProps>(
  (props, { themeKey }) => {
    const { hasSeparator, overrides, separator, ...restProps } = props;

    const navigationProps = Navigation.useProps({ ...restProps, overrides });

    const className = useClassName({
      style: styles.Breadcrumb,
      styleProps: props,
      themeKey,
      prevClassName: navigationProps.className,
    });

    const context = React.useMemo(() => ({ overrides: props.overrides }), [props.overrides]);

    const children = (
      <BreadcrumbContext.Provider value={context}>
        <List isOrdered orientation="horizontal" listStyleType="none" overrides={overrides}>
          {React.Children.map(props.children, (child, index) => {
            if (!React.isValidElement(child)) return child;

            const isLastChild = React.Children.count(props.children) - 1 === index;
            return React.cloneElement(child, {
              hasSeparator: typeof hasSeparator !== 'undefined' ? hasSeparator : !isLastChild,
              separator,
              ...child.props,
            });
          })}
        </List>
      </BreadcrumbContext.Provider>
    );

    return { ...navigationProps, 'aria-label': 'Breadcrumb', className, children };
  },
  { themeKey: 'Breadcrumb' }
);

export const Breadcrumb = createComponent<BreadcrumbProps>(
  (props) => {
    const breadcrumbProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: breadcrumbProps,
    });
  },
  {
    attach: { useProps, displayName: 'Breadcrumb' },
    defaultProps: { use: 'nav' },
    themeKey: 'Breadcrumb',
  }
);

//////////////////////////////

export type LocalBreadcrumbItemProps = {
  /** Indicates if the breadcrumb has a separator. */
  hasSeparator?: boolean;
  /** Indicates if the breadcrumb is currently selected. */
  isCurrent?: boolean;
  /** Custom separator for the breadcrumb. Can either be a string, or a React component. */
  separator?: string | React.ReactElement<any>;
};
export type BreadcrumbItemProps = ListItemProps & LocalBreadcrumbItemProps;

const useBreadcrumbItemProps = createHook<BreadcrumbItemProps>(
  (props, { themeKey }) => {
    const { hasSeparator, isCurrent, overrides, separator, ...restProps } = props;

    const boxProps = List.Item.useProps({ ...restProps, overrides });
    const contextProps = React.useContext(BreadcrumbContext);

    const className = useClassName({
      style: styles.BreadcrumbItem,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    const children = (
      <React.Fragment>
        {React.Children.count(props.children) > 0
          ? React.Children.map(props.children, (child) => {
              if (!React.isValidElement(child)) return child;
              if (child.type === BreadcrumbLink) {
                return React.cloneElement(child, { isCurrent, ...child.props });
              }
              return child;
            })
          : props.children}
        {hasSeparator && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
      </React.Fragment>
    );

    return { ...boxProps, className, children };
  },
  { themeKey: 'Breadcrumb.Item' }
);

export const BreadcrumbItem = createComponent<BreadcrumbItemProps>(
  (props) => {
    const breadcrumbItemProps = useBreadcrumbItemProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: breadcrumbItemProps,
    });
  },
  {
    attach: { useProps: useBreadcrumbItemProps },
    defaultProps: { use: 'li' },
    themeKey: 'Breadcrumb.Item',
  }
);

//////////////////////////////

export type LocalBreadcrumbSeparatorProps = {};
export type BreadcrumbSeparatorProps = BoxProps & LocalBreadcrumbSeparatorProps;

const useBreadcrumbSeparatorProps = createHook<BreadcrumbSeparatorProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);
    const contextProps = React.useContext(BreadcrumbContext);

    const className = useClassName({
      style: styles.BreadcrumbSeparator,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className, role: 'presentation', children: boxProps.children || '/' };
  },
  { themeKey: 'Breadcrumb.Separator' }
);

export const BreadcrumbSeparator = createComponent<BreadcrumbSeparatorProps>(
  (props) => {
    const breadcrumbItemProps = useBreadcrumbSeparatorProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: breadcrumbItemProps,
    });
  },
  {
    attach: { useProps: useBreadcrumbSeparatorProps },
    themeKey: 'Breadcrumb.Separator',
  }
);

//////////////////////////////

export type LocalBreadcrumbLinkProps = {
  isCurrent?: boolean;
};
export type BreadcrumbLinkProps = LinkProps & LocalBreadcrumbLinkProps;

const useBreadcrumbLinkProps = createHook<BreadcrumbLinkProps>(
  (props, { themeKey }) => {
    const { isCurrent, ...restProps } = props;

    const linkProps = isCurrent ? Text.useProps(restProps) : Link.useProps(restProps);
    const contextProps = React.useContext(BreadcrumbContext);

    const className = useClassName({
      style: styles.BreadcrumbLink,
      styleProps: { ...contextProps, ...props },
      themeKey,
      prevClassName: linkProps.className,
    });

    return {
      ...linkProps,
      className,
      'aria-current': isCurrent ? 'page' : linkProps['aria-current'],
      href: isCurrent ? undefined : linkProps.href,
    };
  },
  { themeKey: 'Breadcrumb.Link' }
);

export const BreadcrumbLink = createComponent<BreadcrumbLinkProps>(
  (props) => {
    const breadcrumbItemProps = useBreadcrumbLinkProps(props);

    let use = props.use;
    if (props.isCurrent) {
      use = Text;
    }

    return createElement({
      children: props.children,
      component: ReakitBox,
      use,
      htmlProps: breadcrumbItemProps,
    });
  },
  {
    attach: { useProps: useBreadcrumbLinkProps },
    defaultProps: {
      use: 'a',
    },
    themeKey: 'Breadcrumb.Link',
  }
);
