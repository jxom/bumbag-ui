import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Disclosure, DisclosureProps } from '../Disclosure';

import { PageContext } from './PageContext';
import * as styles from './styles';

export type LocalPageWithHeaderProps = {
  defaultIsVisible?: boolean;
  header: React.ReactElement<any>;
  headerHeight?: string;
};
export type PageWithHeaderProps = BoxProps & LocalPageWithHeaderProps;

const useProps = createHook<PageWithHeaderProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { children, defaultIsVisible, header, ...restProps } = props;

    const boxProps = Box.useProps(restProps);

    const { header: headerState } = React.useContext(PageContext);

    const className = useClassName({
      style: styles.PageWithHeader,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });
    const headerClassName = useClassName({
      style: styles.PageWithHeaderHeader,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Header',
    });
    const contentClassName = useClassName({
      style: styles.PageWithHeaderContent,
      styleProps: { ...props, isHeaderOpen: headerState.isOpen },
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Content',
    });

    React.useEffect(() => {
      if (!defaultIsVisible) {
        headerState.disclosure.hide();
      }
    }, [defaultIsVisible, headerState.disclosure]);

    return {
      ...boxProps,
      className,
      children: (
        <React.Fragment>
          <Disclosure.Content className={headerClassName} {...headerState.disclosure}>
            {header}
          </Disclosure.Content>
          <Box className={contentClassName}>{children}</Box>
        </React.Fragment>
      ),
    };
  },
  { defaultProps: { defaultIsVisible: true, headerHeight: '60px' }, themeKey: 'PageWithHeader' }
);

export const PageWithHeader = createComponent<PageWithHeaderProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
    },
    themeKey: 'PageWithHeader',
  }
);
