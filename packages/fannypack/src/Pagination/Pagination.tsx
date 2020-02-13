import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Set, SetProps } from '../Set';
import { Select, SelectProps } from '../Select';

import * as styles from './styles';

export type LocalPaginationProps = {
  numberOfPages: number;
  currentPage?: number;
  onChangePage?: (page: number) => void;
  nextText?: string;
  previousText?: string;
  prepositionText?: string;
  nextButtonProps?: ButtonProps;
  previousButtonProps?: ButtonProps;
  selectProps?: Omit<SelectProps, 'options'>;
};
export type PaginationProps = BoxProps & LocalPaginationProps;

const useProps = createHook<PaginationProps>(
  (props, themeKey) => {
    const {
      currentPage: _currentPage,
      nextButtonProps,
      nextText,
      numberOfPages,
      onChangePage,
      overrides,
      prepositionText,
      previousButtonProps,
      previousText,
      selectProps,
      ...restProps
    } = props;

    const setProps = Set.useProps({ ...restProps, overrides });

    const [currentPage, setCurrentPage] = React.useState(1);
    React.useEffect(() => {
      setCurrentPage(_currentPage || 1);
    }, [_currentPage]);

    const className = useClassName({
      style: styles.Pagination,
      styleProps: props,
      themeKey,
      prevClassName: setProps.className
    });
    const buttonClassName = useClassName({
      style: styles.PaginationButton,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Button'
    });
    const selectClassName = useClassName({
      style: styles.PaginationSelect,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Select'
    });
    const prepositionClassName = useClassName({
      style: styles.PaginationPrepositionText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'PrepositionText'
    });

    const handleChangePage = React.useCallback(
      page => {
        if (onChangePage) {
          onChangePage(page);
        } else {
          setCurrentPage(page);
        }
      },
      [onChangePage]
    );

    const handleChangePageDropdown = React.useCallback(
      e => {
        const index = parseInt(e.target.value, 10);
        handleChangePage(index + 1);
      },
      [handleChangePage]
    );

    return {
      ...setProps,
      className,
      children: (
        <React.Fragment>
          <Button
            className={buttonClassName}
            disabled={currentPage === 1}
            onClick={() => handleChangePage(currentPage - 1)}
            iconBefore="chevron-left"
            kind="ghost"
            themeKey={`${themeKey}.Button`}
            overrides={overrides}
            {...previousButtonProps}
          >
            {previousText}
          </Button>
          <Select
            className={selectClassName}
            onChange={handleChangePageDropdown}
            options={[...Array(10).keys()].map(index => ({
              label: `${index + 1}`,
              value: index
            }))}
            value={currentPage - 1}
            themeKey={`${themeKey}.Select`}
            overrides={overrides}
            {...selectProps}
          />
          <Box className={prepositionClassName}>
            {prepositionText} {numberOfPages}
          </Box>
          <Button
            className={buttonClassName}
            disabled={currentPage === numberOfPages}
            onClick={() => handleChangePage(currentPage + 1)}
            iconAfter="chevron-right"
            kind="ghost"
            themeKey={`${themeKey}.Button`}
            overrides={overrides}
            {...nextButtonProps}
          >
            {nextText}
          </Button>
        </React.Fragment>
      )
    };
  },
  { defaultProps: { prepositionText: 'of', previousText: 'Previous', nextText: 'Next' }, themeKey: 'Pagination' }
);

export const Pagination = createComponent<PaginationProps>(
  props => {
    const textProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: textProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Pagination'
  }
);
