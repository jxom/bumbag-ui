import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Disclosure, DisclosureProps } from '../Disclosure';

import { PageContext } from './PageContext';
import * as styles from './Page.styles';

export type LocalPageWithHeaderProps = {
  /** Indicates if the header is visible initially. */
  defaultIsVisible?: boolean;
  /** Sets the header component. */
  header: React.ReactElement<any>;
  /** Sets the height of the header component. */
  headerHeight?: string;
  /** Makes the header stick to the top of the page. */
  sticky?: boolean;
};
export type PageWithHeaderProps = BoxProps & LocalPageWithHeaderProps;

const useProps = createHook<PageWithHeaderProps>(
  (props, { themeKey }) => {
    const { children, defaultIsVisible, header, ...restProps } = props;

    const boxProps = Box.useProps(restProps);

    const { header: headerState } = React.useContext(PageContext);

    const className = useClassName({
      style: styles.PageWithHeader,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const headerClassName = useClassName({
      style: styles.PageWithHeaderHeader,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Header',
    });
    const contentClassName = useClassName({
      style: styles.PageWithHeaderContent,
      styleProps: { ...props, isHeaderOpen: headerState.isOpen },
      themeKey,
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
      displayName: 'PageWithHeader',
    },
    themeKey: 'PageWithHeader',
  }
);
