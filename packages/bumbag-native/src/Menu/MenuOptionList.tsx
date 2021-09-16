import * as React from 'react';
import { createComponent, createElement, createHook, useOptionsState } from 'bumbag/utils';
import { Palette } from 'bumbag/types';

import { MenuOptionItem, MenuOptionItemProps } from './MenuOptionItem';
import { ListFlat, ListFlatProps } from '../List';
import * as styles from './Menu.styles';

export type LocalMenuOptionListProps = {
  alignCheck: 'left' | 'right';
  defaultValue?: Array<string> | string;
  disableLeftPadding?: boolean;
  disabled?: boolean;
  hasDividers?: boolean;
  options: Array<Partial<MenuOptionItemProps>>;
  onChange?: (values: Array<string> | string, value: string) => void;
  optionComponent?: any;
  palette?: Palette;
  type: 'checkbox' | 'radio';
  value?: Array<string> | string;
};
export type MenuOptionListProps = Omit<ListFlatProps, 'data' | 'renderItem'> & LocalMenuOptionListProps;

const useProps = createHook<MenuOptionListProps>(
  (props) => {
    const {
      alignCheck,
      disabled,
      options,
      defaultValue,
      hasDividers,
      disableLeftPadding,
      onChange,
      optionComponent: OptionComponent = MenuOptionItem,
      palette,
      type,
      value,
      overrides,
    } = props;

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onChange,
      type,
      value,
    });

    const listFlatProps = ListFlat.useProps({
      ...props,
      data: options,
      renderItem: ({
        item,
        index,
      }: {
        item: MenuOptionItemProps & { label?: MenuOptionItemProps['children'] };
        index: number;
      }) => (
        <OptionComponent
          {...item}
          {...getOptionItemProps({ value: item.value })}
          alignCheck={alignCheck}
          hasDivider={hasDividers && index < options.length - 1}
          disabled={item.disabled || disabled}
          overrides={overrides}
          palette={palette}
          disableLeftPadding={disableLeftPadding}
        >
          {item.label || item.children}
        </OptionComponent>
      ),
    });

    return {
      ...listFlatProps,
    };
  },
  { defaultProps: { alignCheck: 'right', disableLeftPadding: false }, themeKey: 'native.Menu.OptionList' }
);

export const MenuOptionList = createComponent<MenuOptionListProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.MenuOptionList,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Menu.OptionList',
    },
    themeKey: 'native.Menu.OptionList',
  }
);
