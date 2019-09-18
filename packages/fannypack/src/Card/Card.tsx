import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalCardProps = {
  standalone?: boolean;
  type?: 'border' | 'shadow';
};
export type CardProps = BoxProps & LocalCardProps;

export const CardContext = React.createContext<CardProps & { themeKey?: string }>({});

const useProps = createHook<CardProps>(
  (props, themeKey) => {
    const { type, ...restProps } = props;
    const boxProps = Box.useProps({
      altitude: type === 'shadow' ? '100' : null,
      border: type === 'border' ? 'default' : null,
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

    const children = (
      <CardContext.Provider value={props}>
        <CardContent id={descriptionId}>{props.children}</CardContent>
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
      type: 'shadow'
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
    <Box className={cardContentClassName} {...restProps}>
      {children}
    </Box>
  );
}
