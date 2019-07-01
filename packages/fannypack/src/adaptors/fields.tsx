import * as React from 'react';
import _get from 'lodash/get';

const bindFns = (...fns: Array<Function>) => (...args: any) => {
  fns.forEach(fn => fn && fn(...args));
};

export function formikField(
  Component: any,
  { hasFieldWrapper = false, isCheckbox = false, isSelectMenu = false } = {}
) {
  return ({ field = {}, form = {}, ...props }: any) => {
    let overrideProps = {};

    const isTouched = _get(form, `touched.${field.name}`);
    const error = _get(form, `errors.${field.name}`);
    const value = _get(form, `values.${field.name}`);

    if (hasFieldWrapper) {
      let state = isTouched && error ? 'danger' : undefined;
      if (props.state) {
        state = props.state;
      }

      let validationText = isTouched && error ? error : undefined;
      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = {
        ...overrideProps,
        state,
        validationText
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
    if (isSelectMenu) {
      onBlur = () => form.setFieldTouched(field.name);
      // @ts-ignore
      onChange = (value: any, option: any, newValues: any) => form.setFieldValue(field.name, newValues);
    }
    overrideProps = {
      ...overrideProps,
      onBlur: bindFns(onBlur, props.onBlur),
      onChange: bindFns(onChange, props.onChange)
    };

    return <Component {...props} {...field} {...overrideProps} />;
  };
}

export function reduxFormField(
  Component: any,
  { hasFieldWrapper = false, isCheckbox = false, isSelectMenu = false } = {}
) {
  return ({ input = {}, meta = {}, ...props }: any) => {
    let overrideProps = {};

    if (hasFieldWrapper) {
      let state = meta.touched && meta.error ? 'danger' : undefined;
      if (props.state) {
        state = props.state;
      }

      let validationText = meta.touched && meta.error ? meta.error : undefined;
      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = {
        ...overrideProps,
        state,
        validationText
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
    if (isSelectMenu) {
      // @ts-ignore
      onChange = (value: any, option: any, newValues: any) => input.onChange(newValues);
      onBlur = () => input.onBlur(input.value);
    }

    overrideProps = {
      ...overrideProps,
      onBlur: bindFns(onBlur, props.onBlur),
      onChange: bindFns(onChange, props.onChange)
    };

    return <Component {...props} {...input} {...overrideProps} />;
  };
}
