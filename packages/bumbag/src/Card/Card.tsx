import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Flexible } from '../types';
import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Flex, FlexProps } from '../Flex';

import * as styles from './Card.styles';

export type LocalCardProps = {
  /** Variant of the card. */
  variant?: Flexible<'shadowed' | 'bordered', string>;
  /** Indicates if the card is standalone. */
  standalone?: boolean;
  /** Sets the title of the card. */
  title?: string | React.ReactElement<any>;
  /** Sets the footer of the card. */
  footer?: string | React.ReactElement<any>;
  /** Sets the header addon of the card. */
  headerAddon?: React.ReactElement<any>;
};
export type CardProps = BoxProps & LocalCardProps;

export type CardContextOptions = CardProps & { descriptionId?: string; titleId?: string; themeKey?: string };
export const CardContext = React.createContext<CardContextOptions>({});

const useProps = createHook<CardProps>(
  (props, { themeKey }) => {
    const { footer, headerAddon, overrides, standalone, title, variant, ...restProps } = props;
    const boxProps = Box.useProps({
      altitude: variant === 'shadowed' ? '100' : null,
      border: variant === 'bordered' ? 'default' : null,
      ...restProps,
    });

    const className = useClassName({
      style: styles.Card,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    const titleId = useUniqueId();
    const descriptionId = useUniqueId();

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const children = (
      <CardContext.Provider value={context}>
        {standalone ? (
          props.children
        ) : (
          <React.Fragment>
            {title && (
              <CardHeader overrides={overrides}>
                <CardTitle overrides={overrides}>{title}</CardTitle>
                {headerAddon && <Box>{headerAddon}</Box>}
              </CardHeader>
            )}
            <CardContent overrides={overrides}>{props.children}</CardContent>
            {footer && <CardFooter overrides={overrides}>{footer}</CardFooter>}
          </React.Fragment>
        )}
      </CardContext.Provider>
    );

    return {
      'aria-describedby': props.children ? descriptionId : undefined,
      'aria-labelledby': props.title ? titleId : undefined,
      ...boxProps,
      className,
      children,
    };
  },
  {
    defaultProps: {
      variant: 'shadowed',
    },
    themeKey: 'Card',
  }
);

export const Card = createComponent<CardProps>(
  (props) => {
    const cardProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: cardProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Card',
    },
    themeKey: 'Card',
  }
);

/////////////////////////////////////

export type LocalCardContentProps = {};
export type CardContentProps = BoxProps & LocalCardContentProps;

export function CardContent(props: CardContentProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(CardContext);

  const cardContentClassName = useClassName({
    style: styles.CardContent,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Content',
  });

  return (
    <Box className={cardContentClassName} id={context.descriptionId} {...restProps}>
      {children}
    </Box>
  );
}

/////////////////////////////////////

export type LocalCardTitleProps = {};
export type CardTitleProps = BoxProps & LocalCardTitleProps;

export function CardTitle(props: CardTitleProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(CardContext);

  const cardTitleClassName = useClassName({
    style: styles.CardTitle,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Title',
  });

  return (
    <Box className={cardTitleClassName} id={context.titleId} {...restProps}>
      {children}
    </Box>
  );
}

/////////////////////////////////////

export type LocalCardHeaderProps = {};
export type CardHeaderProps = FlexProps & LocalCardHeaderProps;

export function CardHeader(props: CardHeaderProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(CardContext);

  const cardHeaderClassName = useClassName({
    style: styles.CardHeader,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Header',
  });

  return (
    <Flex className={cardHeaderClassName} {...restProps}>
      {children}
    </Flex>
  );
}

/////////////////////////////////////

export type LocalCardFooterProps = {};
export type CardFooterProps = BoxProps & LocalCardFooterProps;

export function CardFooter(props: CardFooterProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(CardContext);

  const cardFooterClassName = useClassName({
    style: styles.CardFooter,
    styleProps: { ...context, ...props },
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Footer',
  });

  return (
    <Box className={cardFooterClassName} {...restProps}>
      {children}
    </Box>
  );
}
