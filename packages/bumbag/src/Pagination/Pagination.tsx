import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _times from 'lodash/times';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Set, SetProps } from '../Set';
import { Select, SelectProps } from '../Select';

import * as styles from './Pagination.styles';

export type LocalPaginationProps = {
  /** Sets the number of pages. */
  numberOfPages: number;
  /** Sets the current page. */
  currentPage?: number;
  /** Function to invoke when the page is changed. */
  onChangePage?: (page: number) => void;
  /** Sets the text of the next button. */
  nextText?: string;
  /** Sets the text of the previous button. */
  previousText?: string;
  /** Sets the preposition text. */
  prepositionText?: string;
  /** Props to spread onto the next button. */
  nextButtonProps?: ButtonProps;
  /** Props to spread onto the previous button. */
  previousButtonProps?: ButtonProps;
  /** Props to spread onto the select component. */
  selectProps?: Omit<SelectProps, 'options'>;
};
export type PaginationProps = BoxProps & LocalPaginationProps;

const useProps = createHook<PaginationProps>(
  (props, { themeKey }) => {
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
      prevClassName: setProps.className,
    });
    const buttonClassName = useClassName({
      style: styles.PaginationButton,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Button',
    });
    const selectClassName = useClassName({
      style: styles.PaginationSelect,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Select',
    });
    const prepositionClassName = useClassName({
      style: styles.PaginationPrepositionText,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'PrepositionText',
    });

    const handleChangePage = React.useCallback(
      (page) => {
        if (onChangePage) {
          onChangePage(page);
        } else {
          setCurrentPage(page);
        }
      },
      [onChangePage]
    );

    const handleChangePageDropdown = React.useCallback(
      (e) => {
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
            variant="ghost"
            themeKey={`${themeKey}.Button`}
            overrides={overrides}
            {...previousButtonProps}
          >
            {previousText}
          </Button>
          <Select
            className={selectClassName}
            onChange={handleChangePageDropdown}
            options={_times(numberOfPages).map((_, index) => ({
              label: `${index + 1}`,
              value: index,
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
            variant="ghost"
            themeKey={`${themeKey}.Button`}
            overrides={overrides}
            {...nextButtonProps}
          >
            {nextText}
          </Button>
        </React.Fragment>
      ),
    };
  },
  { defaultProps: { prepositionText: 'of', previousText: 'Previous', nextText: 'Next' }, themeKey: 'Pagination' }
);

export const Pagination = createComponent<PaginationProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: textProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Pagination',
    },
    themeKey: 'Pagination',
  }
);
