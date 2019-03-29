import * as React from 'react';
import * as PropTypes from 'prop-types';

import Input from '../Input';
import { LocalInputProps, InputProps, inputPropTypes, inputDefaultProps } from '../Input/Input';

import { SelectMenuSearchInput as _SelectMenuSearchInput } from './styled';

export type LocalSelectMenuSearchInputProps = LocalInputProps & {
  isDropdownActive?: boolean;
};
export type SelectMenuSearchInputProps = InputProps & LocalSelectMenuSearchInputProps;

export const selectMenuSearchInputPropTypes = {
  ...inputPropTypes
};
export const selectMenuSearchInputDefaultProps = {
  ...inputDefaultProps,
  autoComplete: 'off',
  // @ts-ignore
  before: <Input.Icon icon="search" />,
  isDropdownActive: false,
  isFullWidth: true,
  placeholder: 'Type to search...'
};

export class SelectMenuSearchInput extends React.Component<LocalSelectMenuSearchInputProps> {
  static propTypes = selectMenuSearchInputPropTypes;
  static defaultProps = selectMenuSearchInputDefaultProps;

  search = React.createRef<HTMLInputElement>();

  componentDidUpdate = (prevProps: LocalSelectMenuSearchInputProps) => {
    const { isDropdownActive } = this.props;
    const { isDropdownActive: prevIsDropdownActive } = prevProps;
    if (isDropdownActive && !prevIsDropdownActive) {
      requestAnimationFrame(() => this.search.current && this.search.current.focus());
    }
  };

  render = () => {
    const { ...props } = this.props;
    return <_SelectMenuSearchInput {...props} inputRef={this.search} />;
  };
}

export default SelectMenuSearchInput;
