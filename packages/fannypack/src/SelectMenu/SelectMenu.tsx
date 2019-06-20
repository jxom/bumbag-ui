import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _debounce from 'lodash/debounce';
// @ts-ignore
import _get from 'lodash/get';
// @ts-ignore
import _omit from 'lodash/omit';
// @ts-ignore
import { Loads } from 'react-loads-next';
import { BoxProps } from 'reakit/ts/Box/Box';

import { ButtonProps } from '../Button/Button';
import Popover from '../Popover';
import { PopoverContainerRenderProps } from '../Popover/PopoverContainer';
import { LocalMenuProps, MenuProps } from '../Menu/Menu';
import { MenuButtonProps } from '../Menu/MenuButton';
import { MenuGroupProps } from '../Menu/MenuGroup';
import { LocalMenuItemProps, MenuItemProps, menuItemPropTypes } from '../Menu/MenuItem';
import { MenuPopoverProps, LocalMenuPopoverProps, menuPopoverPropTypes } from '../Menu/MenuPopover';
import { SpinnerProps } from '../Spinner/Spinner';
import Set from '../Set';
import { TagProps } from '../Tag/Tag';
import { Omit } from '../types';

import SelectIcon from './SelectIcon';
import SelectMenuSearchInput, {
  LocalSelectMenuSearchInputProps,
  selectMenuSearchInputPropTypes
} from './SelectMenuSearchInput';
import _SelectMenu, {
  SelectMenuActionButton,
  SelectMenuBottomSection,
  SelectMenuButton,
  SelectMenuLoadingSpinner,
  SelectMenuLoadingItemSpinner,
  SelectMenuGroup,
  SelectMenuItem,
  SelectMenuStaticItem,
  SelectMenuPopover,
  SelectMenuTag,
  SelectMenuTopSection
} from './styled';

export type SelectMenuItemObject = {
  key: string;
  icon?: LocalMenuItemProps['icon'];
  isActive?: LocalMenuItemProps['isActive'];
  isDisabled?: LocalMenuItemProps['isDisabled'];
  label: string;
  value?: string | number | boolean | Object;
};
export type SelectMenuItem = string | SelectMenuItemObject | null;
export type SelectMenuItems = Array<SelectMenuItem>;

export type LocalSelectMenuProps = Omit<LocalMenuProps, 'children'> & {
  defaultKey?: string;
  defaultKeys?: Array<string>;
  defaultOption?: SelectMenuItem;
  defaultOptions?: SelectMenuItems;
  emptyText?: string;
  filterOptions: ({ options, searchText }: { options: SelectMenuItems; searchText: string }) => SelectMenuItems;
  isDropdown?: boolean;
  isLoading?: boolean;
  isMultiSelect?: boolean;
  isPaginated?: boolean;
  isRadio?: boolean;
  isSearchable?: boolean;
  loadQuery?: Object;
  loadOptions?({
    data,
    page,
    searchText
  }: {
    data?: Object;
    page: number;
    searchText?: string;
  }): Promise<{ options: SelectMenuItems }>;
  onChange?(
    value: string | SelectMenuItemObject['value'] | null,
    item: SelectMenuItem,
    values: SelectMenuItem | SelectMenuItems | null
  ): void;
  options?: SelectMenuItems;
  placeholder?: string;
  popoverProps?: Omit<Omit<LocalMenuPopoverProps, 'children'>, 'content'>;
  renderBottomActions?(opts: {
    isDropdown?: boolean;
    isMultiSelect?: boolean;
    onClear(): void;
    popover?: PopoverContainerRenderProps;
    selectedOptions: SelectMenuItems;
  }): React.ReactNode;
  renderEmpty?(opts: { emptyText?: string }): React.ReactNode;
  renderError?(opts: { error?: Object }): React.ReactNode;
  renderOption?(option: SelectMenuItem): React.ReactNode;
  renderTrigger?(opts: {
    isLoading?: boolean;
    placeholder?: string;
    props: any;
    renderValue: any;
    selectedOptions: { [key: string]: SelectMenuItem };
  }): React.ReactNode;
  renderValue?(
    value: SelectMenuItemObject['value'],
    values: SelectMenuItemObject['value'][],
    items: { [key: string]: SelectMenuItem }
  ): React.ReactNode;
  searchInputProps?: LocalSelectMenuSearchInputProps;
  value?: SelectMenuItem | SelectMenuItems;
  useTags?: boolean;
};
export type SelectMenuProps = Omit<MenuProps, 'children'> & LocalSelectMenuProps;
export type SelectMenuState = {
  blockLoad: boolean;
  contextKey: string | void;
  options: SelectMenuItems;
  page: number;
  searchText: string;
  selectedOptions: { [key: string]: SelectMenuItem };
};
export type SelectMenuComponents = {
  ActionButton: React.FunctionComponent<ButtonProps>;
  BottomSection: React.FunctionComponent<BoxProps>;
  Button: React.FunctionComponent<MenuButtonProps>;
  LoadingSpinner: React.FunctionComponent<SpinnerProps>;
  LoadingItemSpinner: React.FunctionComponent<SpinnerProps>;
  Group: React.FunctionComponent<MenuGroupProps>;
  Item: React.FunctionComponent<MenuItemProps>;
  StaticItem: React.FunctionComponent<BoxProps>;
  Popover: React.FunctionComponent<MenuPopoverProps>;
  Tag: React.FunctionComponent<TagProps>;
  TopSection: React.FunctionComponent<BoxProps>;
};

const selectMenuItemObjectPropType = PropTypes.shape({
  icon: menuItemPropTypes['icon'],
  isActive: menuItemPropTypes['isActive'],
  isDisabled: menuItemPropTypes['isDisabled'],
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object])
});
const selectMenuItemPropType = PropTypes.oneOfType([PropTypes.string, selectMenuItemObjectPropType]);
const selectMenuItemsPropType = PropTypes.arrayOf(selectMenuItemPropType);

const getSelectedOptionsFromValue = (value: SelectMenuItem | SelectMenuItems) => {
  if (typeof value === 'string') {
    return { [value]: value };
  }
  if (Array.isArray(value)) {
    return value.reduce((currentSelectedOptions, defaultOption) => {
      const key = _get(defaultOption, 'key', defaultOption);
      return { ...currentSelectedOptions, [key]: defaultOption };
    }, {});
  }
  if (typeof value === 'object') {
    const key = _get(value, 'key', value);
    return { [key]: value };
  }
  return {};
};
const getDefaultSelectedOptionsFromProps = (props: SelectMenuProps) => {
  const { defaultKey, defaultKeys, defaultOption, defaultOptions, options, value } = props;
  if (value) {
    return getSelectedOptionsFromValue(value);
  }
  if (defaultOption) {
    const key = _get(defaultOption, 'key', defaultOption);
    return { [key]: defaultOption };
  }
  if (defaultOptions) {
    return defaultOptions.reduce((currentSelectedOptions, defaultOption) => {
      const key = _get(defaultOption, 'key', defaultOption);
      return { ...currentSelectedOptions, [key]: defaultOption };
    }, {});
  }
  if (options) {
    return options.reduce((currentSelectedOptions, option) => {
      const key = _get(option, 'key', option);
      if (
        key === defaultKey ||
        (defaultKeys && defaultKeys.some(defaultKey => defaultKey === key)) ||
        _get(option, 'isDefault')
      ) {
        return {
          ...currentSelectedOptions,
          [key]: option
        };
      }
      return currentSelectedOptions;
    }, {});
  }
  return {};
};
const getAttribute = (options: { [key: string]: SelectMenuItem }, attr: string) =>
  _get(Object.values(options), `[0].${attr}`) || _get(Object.values(options), '[0]');
const getAttributes = (options: { [key: string]: SelectMenuItem }, attr: string) =>
  Object.values(options).map(option => _get(option, attr, option));
const getButtonValue = (options: { [key: string]: SelectMenuItem }) => {
  const labels = getAttributes(options, 'label');
  if (labels.length === 1) {
    return labels[0];
  }
  return `${labels.length} selected`;
};

const optionsFilter = ({ options, searchText }: { options: SelectMenuItems; searchText: string }) =>
  options.filter(option =>
    _get(option, 'label', option)
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

const bottomActionsRenderer: LocalSelectMenuProps['renderBottomActions'] = ({
  isDropdown, // eslint-disable-line
  isMultiSelect, // eslint-disable-line
  onClear, // eslint-disable-line
  popover, // eslint-disable-line
  selectedOptions // eslint-disable-line
}) => (
  <React.Fragment>
    {isMultiSelect && Object.keys(selectedOptions).length > 0 ? (
      <SelectMenuActionButton kind="ghost" onClick={onClear}>
        Clear
      </SelectMenuActionButton>
    ) : (
      <div />
    )}
    {isDropdown && (
      <SelectMenuActionButton use={Popover.Hide} kind="ghost" {...popover}>
        Close
      </SelectMenuActionButton>
    )}
  </React.Fragment>
);
const emptyRenderer = ({ emptyText }: { emptyText: LocalSelectMenuProps['emptyText'] }) => (
  <SelectMenuStaticItem>{emptyText}</SelectMenuStaticItem>
);
const errorRenderer = () => <SelectMenuStaticItem>An error occurred. Please try again.</SelectMenuStaticItem>;
const optionRenderer: LocalSelectMenuProps['renderOption'] = option => _get(option, 'label', option);
const triggerRenderer: LocalSelectMenuProps['renderTrigger'] = ({
  isLoading,
  props
}: {
  isLoading?: boolean;
  props: any;
}) => (
  /*
  // @ts-ignore */
  <SelectMenuButton {...props}>
    {props.children}
    {isLoading ? <SelectMenuLoadingSpinner color="text" size="1rem" /> : <SelectIcon />}
  </SelectMenuButton>
);
// @ts-ignore
const valueRenderer: LocalSelectMenuProps['renderValue'] = (value, values, selectedOptions) =>
  getButtonValue(selectedOptions);

export const selectMenuPropTypes = {
  defaultKey: PropTypes.string,
  defaultKeys: PropTypes.arrayOf(PropTypes.string),
  defaultOption: selectMenuItemPropType,
  defaultOptions: selectMenuItemsPropType,
  emptyText: PropTypes.string,
  filterOptions: PropTypes.func,
  isDropdown: PropTypes.bool,
  isLoading: PropTypes.bool,
  isMultiSelect: PropTypes.bool,
  isPaginated: PropTypes.bool,
  isRadio: PropTypes.bool,
  isSearchable: PropTypes.bool,
  loadQuery: PropTypes.object,
  loadOptions: PropTypes.func,
  onChange: PropTypes.func,
  options: selectMenuItemsPropType,
  placeholder: PropTypes.string,
  popoverProps: PropTypes.shape(_omit(menuPopoverPropTypes, 'children', 'content')),
  renderBottomActions: PropTypes.func,
  renderEmpty: PropTypes.func,
  renderError: PropTypes.func,
  renderOption: PropTypes.func,
  renderTrigger: PropTypes.func,
  renderValue: PropTypes.func,
  searchInputProps: PropTypes.shape(selectMenuSearchInputPropTypes),
  useTags: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
};
export const selectMenuDefaultProps = {
  defaultKey: undefined,
  defaultKeys: undefined,
  defaultOption: undefined,
  defaultOptions: undefined,
  emptyText: 'No results found',
  filterOptions: optionsFilter,
  isDropdown: false,
  isLoading: false,
  isMultiSelect: false,
  isPaginated: true,
  isRadio: false,
  isSearchable: false,
  loadQuery: undefined,
  loadOptions: undefined,
  onChange: undefined,
  options: [],
  placeholder: 'Select...',
  popoverProps: {},
  renderBottomActions: bottomActionsRenderer,
  renderEmpty: emptyRenderer,
  renderError: errorRenderer,
  renderOption: optionRenderer,
  renderTrigger: triggerRenderer,
  renderValue: valueRenderer,
  searchInputProps: {},
  useTags: false,
  value: undefined
};

export class SelectMenu extends React.Component<SelectMenuProps, SelectMenuState> {
  static ActionButton = SelectMenuActionButton;
  static BottomSection = SelectMenuBottomSection;
  static Button = SelectMenuButton;
  static LoadingSpinner = SelectMenuLoadingSpinner;
  static LoadingItemSpinner = SelectMenuLoadingItemSpinner;
  static Group = SelectMenuGroup;
  static Item = SelectMenuItem;
  static StaticItem = SelectMenuStaticItem;
  static Popover = SelectMenuPopover;
  static Tag = SelectMenuTag;
  static TopSection = SelectMenuTopSection;

  static propTypes = selectMenuPropTypes;
  static defaultProps = selectMenuDefaultProps;

  optionsGroup = React.createRef<HTMLDivElement>();

  state = {
    blockLoad: false,
    contextKey: this.props.loadQuery ? Object.values(this.props.loadQuery).join('.') : undefined,
    options: this.props.options || [],
    page: 1,
    selectedOptions: getDefaultSelectedOptionsFromProps(this.props),
    searchText: ''
  };

  componentDidUpdate = (prevProps: SelectMenuProps) => {
    const { loadQuery, options, value } = this.props;
    const { loadQuery: prevLoadQuery, options: prevOptions, value: prevValue } = prevProps;

    if (value && value !== prevValue) {
      this.setState({ selectedOptions: getSelectedOptionsFromValue(value) });
    }
    if (options && _get(options, 'length') !== _get(prevOptions, 'length')) {
      this.setState({ selectedOptions: getDefaultSelectedOptionsFromProps(this.props) });
      this.filterOptions();
    }
    if (loadQuery && loadQuery !== prevLoadQuery) {
      this.setState({ contextKey: Object.values(loadQuery).join('.'), page: 1, searchText: '' });
    }
  };

  loadOptions = async () => {
    const { loadQuery, loadOptions, options: initialOptions } = this.props;
    const { blockLoad, options: currentOptions, page, searchText } = this.state;

    if (!loadOptions) return null;
    if (blockLoad) return null;

    const { options } = await loadOptions({
      data: loadQuery,
      page,
      searchText
    });

    if (options.length === 0) {
      this.setState({ blockLoad: true });
    }

    let newOptions = [...currentOptions, ...options];
    if (page === 1) {
      newOptions = [...options];
      if (initialOptions) {
        newOptions = [...initialOptions, ...newOptions];
      }
    }

    this.setState({ options: newOptions });
    return;
  };

  handleClearSelected = () => {
    const { onChange } = this.props;
    onChange && onChange(null, null, null);
    this.setState({ selectedOptions: {} });
  };

  handleClickOption = (option: SelectMenuItem) => {
    return () => {
      const { isMultiSelect, isRadio, onChange } = this.props;
      const { selectedOptions } = this.state;
      const key = _get(option, 'key', option);
      // @ts-ignore
      const isOptionSelected = Boolean(selectedOptions[key]);
      let newSelectedOptions = isMultiSelect ? selectedOptions : {};
      if (isOptionSelected && !isRadio) {
        // @ts-ignore
        delete newSelectedOptions[key];
      } else {
        // @ts-ignore
        newSelectedOptions[key] = option;
      }
      this.setState({ selectedOptions: newSelectedOptions });

      let newValues: SelectMenuItems | SelectMenuItem | null = Object.values(newSelectedOptions);
      if (newValues.length === 0) {
        newValues = null;
      } else if (!isMultiSelect) {
        newValues = newValues[0];
      }
      const value = _get(option, 'value', option);

      onChange && onChange(value, option, newValues);
    };
  };

  handleRemoveOption = (option: SelectMenuItem) => {
    return () => {
      const { isMultiSelect, onChange } = this.props;
      const { selectedOptions } = this.state;
      let newSelectedOptions = { ...selectedOptions };
      // @ts-ignore
      delete newSelectedOptions[_get(option, 'key', option)];
      this.setState({ selectedOptions: newSelectedOptions });
      let newValues: SelectMenuItems | SelectMenuItem | null = Object.values(newSelectedOptions);
      if (newValues.length === 0) {
        newValues = null;
      } else if (!isMultiSelect) {
        newValues = newValues[0];
      }
      const value = _get(option, 'value', option);
      onChange && onChange(value, option, newValues);
    };
  };

  handleScrollOptions = ({
    event,
    isLoading,
    load
  }: {
    event: React.UIEvent<HTMLDivElement>;
    isLoading: boolean;
    load: () => void;
  }) => {
    const { isPaginated } = this.props;
    const { page } = this.state;
    const target = event.currentTarget;
    if (
      isPaginated &&
      !isLoading &&
      target.scrollHeight > target.offsetHeight &&
      target.scrollHeight - target.offsetHeight - target.scrollTop <= 200
    ) {
      const nextPage = page + 1;
      this.setState({ page: nextPage }, load);
    }
    return;
  };

  handleSearch = _debounce(
    ({ event, load }: { event: React.BaseSyntheticEvent<HTMLInputElement>; load: () => void }) => {
      const searchText = event.target.value;
      const { loadOptions } = this.props;

      this.setState({ blockLoad: false, searchText, page: 1 }, async () => {
        if (loadOptions) {
          await load();
        } else {
          this.filterOptions();
        }
        this.optionsGroup && this.optionsGroup.current && this.optionsGroup.current.scrollTo({ top: 0 });
      });
    },
    500
  );

  filterOptions = () => {
    const { filterOptions, options } = this.props;
    const { searchText } = this.state;
    if (!options) return;
    const filteredOptions = searchText.trim() === '' ? options : filterOptions({ options, searchText });
    this.setState({ options: filteredOptions });
  };

  render = () => {
    const { isDropdown, isLoading, popoverProps, placeholder, renderTrigger, renderValue, ...props } = this.props;
    const { selectedOptions } = this.state;

    return isDropdown ? (
      <SelectMenuPopover content={this.renderMenu} {...popoverProps}>
        {renderTrigger &&
          renderTrigger({
            isLoading,
            placeholder,
            props: {
              ...props,
              children:
                Object.keys(selectedOptions).length > 0 && renderValue
                  ? renderValue(
                      getAttribute(selectedOptions, 'value'),
                      getAttributes(selectedOptions, 'value'),
                      selectedOptions
                    )
                  : placeholder
            },
            selectedOptions,
            renderValue
          })}
      </SelectMenuPopover>
    ) : (
      this.renderMenu()
    );
  };

  renderMenu = (popover?: PopoverContainerRenderProps) => {
    const {
      renderBottomActions,
      isDropdown,
      isMultiSelect,
      isSearchable,
      loadOptions,
      renderOption,
      searchInputProps,
      useTags,
      ...props
    } = this.props;
    const { contextKey, selectedOptions } = this.state;
    const selectedOptionsValues: SelectMenuItems = Object.values(selectedOptions);

    return (
      <Loads context={contextKey} delay={0} load={this.loadOptions} defer={!this.loadOptions}>
        {({ load, isPending }: { load: () => any; isPending: boolean }) => (
          <_SelectMenu setInitialFocus={!isSearchable} {...(isDropdown ? {} : props)}>
            {isSearchable && (
              <SelectMenuSearchInput
                isDropdownActive={popover && popover.isVisible}
                isLoading={isPending}
                onChange={event => {
                  event.persist();
                  this.handleSearch({ event, load });
                }}
                {...searchInputProps}
              />
            )}
            {useTags && selectedOptionsValues.length > 0 && this.renderTopSection({ selectedOptionsValues })}
            {this.renderOptions({ isLoading: isPending, load })}
            {(isMultiSelect || isDropdown) && this.renderBottomSection({ popover, selectedOptionsValues })}
          </_SelectMenu>
        )}
      </Loads>
    );
  };

  renderTopSection = ({ selectedOptionsValues }: { selectedOptionsValues: SelectMenuItems }) => {
    return (
      <SelectMenuTopSection>
        <Set spacing="minor-1">
          {selectedOptionsValues.map((option: SelectMenuItem) => (
            <SelectMenuTag
              key={_get(option, 'key', option)}
              onRemove={this.handleRemoveOption(option)}
              palette="primary"
            >
              {_get(option, 'label', option)}
            </SelectMenuTag>
          ))}
        </Set>
      </SelectMenuTopSection>
    );
  };

  renderOptions = ({ isLoading, load }: { isLoading: boolean; load: () => any }) => {
    const { emptyText, isDropdown, isMultiSelect, renderEmpty, renderError, renderOption, useTags } = this.props;
    const { options, selectedOptions } = this.state;
    return (
      // @ts-ignore
      <SelectMenuGroup
        // @ts-ignore
        elementRef={this.optionsGroup}
        isDropdown={isDropdown}
        isMultiSelect={isMultiSelect}
        onScroll={event => this.handleScrollOptions({ event, isLoading, load })}
      >
        {options.map((option: SelectMenuItem) => {
          // @ts-ignore
          const isSelected = Boolean(selectedOptions[_get(option, 'key', option)]);
          if (useTags && isSelected) return null;
          return (
            <SelectMenuItem
              key={_get(option, 'key', option)}
              hideOnClick={!isMultiSelect}
              icon={_get(option, 'icon')}
              isActive={isSelected || _get(option, 'isActive')}
              isDisabled={_get(option, 'isDisabled')}
              onClick={this.handleClickOption(option)}
            >
              {renderOption && renderOption(option)}
            </SelectMenuItem>
          );
        })}
        <Loads.Pending>
          <SelectMenuStaticItem>
            <SelectMenuLoadingItemSpinner color="text" size="1rem" />
          </SelectMenuStaticItem>
        </Loads.Pending>
        <Loads.Resolved>{options.length === 0 && renderEmpty && renderEmpty({ emptyText })}</Loads.Resolved>
        <Loads.Rejected>{({ error }: any) => renderError && renderError({ error })}</Loads.Rejected>
      </SelectMenuGroup>
    );
  };

  renderBottomSection = ({
    popover,
    selectedOptionsValues
  }: {
    popover?: PopoverContainerRenderProps;
    selectedOptionsValues: SelectMenuItems;
  }) => {
    const { isDropdown, isMultiSelect, renderBottomActions } = this.props;
    return (
      <SelectMenuBottomSection>
        {renderBottomActions &&
          renderBottomActions({
            isDropdown,
            isMultiSelect,
            onClear: this.handleClearSelected,
            popover,
            selectedOptions: selectedOptionsValues
          })}
      </SelectMenuBottomSection>
    );
  };
}

export default SelectMenu;
