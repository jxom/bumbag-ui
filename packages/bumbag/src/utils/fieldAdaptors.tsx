import * as React from 'react';
import _get from 'lodash/get';

import { bindFns } from './bindFns';

export function formikField(
  Component: any,
  {
    disableBlurEvent = false,
    disableFocusEvent = false,
    hasFieldWrapper = false,
    isCheckbox = false,
    isCheckboxGroup = false,
    isAutosuggest = false,
    isSelectMenu = false,
    useValue = false,
  } = {}
) {
  return ({ field = {}, form = {}, ...props }: any) => {
    let overrideProps = {};

    const isTouched = _get(form, `touched.${field.name}`);
    const error = _get(form, `errors.${field.name}`);
    const value = _get(form, `values.${field.name}`);

    let state = isTouched && error ? 'danger' : undefined;
    if (props.state) {
      state = props.state;
    }
    overrideProps = { ...overrideProps, state };

    if (hasFieldWrapper) {
      let validationText = isTouched && error ? error : undefined;
      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = {
        ...overrideProps,
        validationText,
      };
    }

    if (isCheckbox) {
      let checked = false;
      if (value) {
        checked = Boolean(value);
      }
      if (props.checked) {
        checked = props.checked;
      }
      overrideProps = { ...overrideProps, checked };
    }

    let onBlur = field.onBlur;
    let onChange = field.onChange;
    let onFocus = field.onFocus;
    if (isSelectMenu || isAutosuggest) {
      if (isAutosuggest) {
        onBlur = () => setTimeout(() => form.setFieldTouched(field.name), 0);
      } else {
        onBlur = () => form.setFieldTouched(field.name);
      }
      // @ts-ignore
      onChange = (newOptions: any) => form.setFieldValue(field.name, newOptions);
    }
    if (isCheckboxGroup) {
      onChange = (value: any) => form.setFieldValue(field.name, value);
      onBlur = () => form.setFieldTouched(field.name);
    }
    if (useValue) {
      onChange = (value: any) => form.setFieldValue(field.name, value);
    }
    overrideProps = {
      ...overrideProps,
      onBlur: bindFns(disableBlurEvent ? () => {} : onBlur, props.onBlur),
      onChange: bindFns(onChange, props.onChange),
      onFocus: bindFns(disableFocusEvent ? () => {} : onFocus, props.onFocus),
    };

    return <Component {...props} {...field} {...overrideProps} />;
  };
}

export function reduxFormField(
  Component: any,
  {
    disableBlurEvent = false,
    disableFocusEvent = false,
    hasFieldWrapper = false,
    isCheckbox = false,
    isCheckboxGroup = false,
    isAutosuggest = false,
    isSelectMenu = false,
    useValue = false,
  } = {}
) {
  return ({ input = {}, meta = {}, ...props }: any) => {
    let overrideProps = {};

    let state = meta.touched && meta.error ? 'danger' : undefined;
    if (props.state) {
      state = props.state;
    }
    overrideProps = { ...overrideProps, state };

    if (hasFieldWrapper) {
      let validationText = meta.touched && meta.error ? meta.error : undefined;
      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = {
        ...overrideProps,
        validationText,
      };
    }

    if (isCheckbox) {
      let checked = false;
      const value = Boolean(input.value);
      if (value) {
        checked = value;
      }
      if (props.checked) {
        checked = props.checked;
      }
      overrideProps = { ...overrideProps, checked };
    }

    let onBlur = input.onBlur;
    let onChange = input.onChange;
    let onFocus = input.onFocus;
    if (isSelectMenu || isAutosuggest) {
      // @ts-ignore
      onChange = (newOptions: any) => input.onChange(newOptions);
      onBlur = () => input.onBlur(input.value);
    }
    if (isCheckboxGroup) {
      onChange = (value: any) => input.onChange(value);
      onBlur = (value: any) => input.onBlur(value);
    }
    if (useValue) {
      onChange = (value: any) => input.onChange(value);
    }

    overrideProps = {
      ...overrideProps,
      onBlur: bindFns(disableBlurEvent ? () => {} : onBlur, props.onBlur),
      onChange: bindFns(onChange, props.onChange),
      onFocus: bindFns(disableFocusEvent ? () => {} : onFocus, props.onFocus),
    };

    return <Component {...props} {...input} {...overrideProps} />;
  };
}
