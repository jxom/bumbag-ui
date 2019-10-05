import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalCardProps = {
  kind?: 'border' | 'shadow';
  standalone?: boolean;
  title?: string | React.ReactElement<any>;
  footer?: string | React.ReactElement<any>;
  headerAddon?: React.ReactElement<any>;
};
export type CardProps = BoxProps & LocalCardProps;

export type CardContextOptions = CardProps & { descriptionId?: string; titleId?: string; themeKey?: string };
export const CardContext = React.createContext<CardContextOptions>({});

const useProps = createHook<CardProps>(
  (props, themeKey) => {
    const { footer, headerAddon, standalone, title, kind, ...restProps } = props;
    const boxProps = Box.useProps({
      altitude: kind === 'shadow' ? '100' : null,
      border: kind === 'border' ? 'default' : null,
      ...restProps
    });

    const className = useClassName({
      style: styles.Card,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    const titleId = useUniqueId('cardTitle');
    const descriptionId = useUniqueId('cardDescription');

    const context = React.useMemo(() => ({ descriptionId, titleId, ...props }), [descriptionId, props, titleId]);

    const children = (
      <CardContext.Provider value={context}>
        {standalone ? (
          props.children
        ) : (
          <React.Fragment>
            {title && (
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                {headerAddon && <Box>{headerAddon}</Box>}
              </CardHeader>
            )}
            <CardContent>{props.children}</CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
          </React.Fragment>
        )}
      </CardContext.Provider>
    );

    return {
      'aria-describedby': props.children ? descriptionId : undefined,
      'aria-labelledby': props.title ? titleId : undefined,
      ...boxProps,
      className,
      children
    };
  },
  {
    defaultProps: {
      kind: 'shadow'
    },
    themeKey: 'Card'
  }
);

export const Card = createComponent<CardProps>(
  props => {
    const cardProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: cardProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Card'
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
    themeKey: `${context.themeKey || 'Card'}.Content`
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
    themeKey: `${context.themeKey || 'Card'}.Title`
  });

  return (
    <Box className={cardTitleClassName} id={context.titleId} {...restProps}>
      {children}
    </Box>
  );
}

/////////////////////////////////////

export type LocalCardHeaderProps = {};
export type CardHeaderProps = BoxProps & LocalCardHeaderProps;

export function CardHeader(props: CardHeaderProps) {
  const { children, ...restProps } = props;
  const context = React.useContext(CardContext);

  const cardHeaderClassName = useClassName({
    style: styles.CardHeader,
    styleProps: { ...context, ...props },
    themeKey: `${context.themeKey || 'Card'}.Header`
  });

  return (
    <Box className={cardHeaderClassName} {...restProps}>
      {children}
    </Box>
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
    themeKey: `${context.themeKey || 'Card'}.Footer`
  });

  return (
    <Box className={cardFooterClassName} {...restProps}>
      {children}
    </Box>
  );
}
