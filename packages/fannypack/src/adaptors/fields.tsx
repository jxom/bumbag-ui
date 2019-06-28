import * as React from 'react';
import _get from 'lodash/get';

const FIELDS_WITH_FIELD_WRAPPERS = [
  'CheckboxField',
  'InputField',
  'RadioField',
  'RadioGroupField',
  'SelectField',
  'SelectMenuField',
  'SwitchField',
  'TextareaField'
];
const CHECKBOX_FIELDS = ['Checkbox', 'CheckboxField'];
const SELECT_MENUS = ['SelectMenu', 'SelectMenuField'];

const bindFns = (...fns: Array<Function>) => (...args: any) => {
  fns.forEach(fn => fn && fn(...args));
};

export function formikField(
  Component: any,
  { hasFieldWrapper = false, isCheckbox = false, isSelectMenu = false } = {}
) {
  return ({ field = {}, form = {}, ...props }: any) => {
    let overrideProps = {};

    if (FIELDS_WITH_FIELD_WRAPPERS.includes(Component.name) || hasFieldWrapper) {
      // todo: refactor
      let state = _get(form, `touched.${field.name}`) && _get(form, `errors.${field.name}`) ? 'danger' : undefined;
      if (props.state) {
        state = props.state;
      }

      let validationText =
        _get(form, `touched.${field.name}`) && _get(form, `errors.${field.name}`)
          ? _get(form, `errors.${field.name}`)
          : undefined;
      if (props.validationText) {
        validationText = props.validationText;
      }

      overrideProps = {
        ...overrideProps,
        state,
        validationText
      };
    }

    if (CHECKBOX_FIELDS.includes(Component.name) || isCheckbox) {
      let checked = false;
      const value = Boolean(_get(form, `values.${field.name}`));
      if (value) {
        checked = value;
      }
      if (props.checked) {
        checked = props.checked;
      }
      overrideProps = { ...overrideProps, checked };
    }

    let onBlur = field.onBlur;
    let onChange = field.onChange;
    if (SELECT_MENUS.includes(Component.name) || isSelectMenu) {
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

    if (FIELDS_WITH_FIELD_WRAPPERS.includes(Component.name) || hasFieldWrapper) {
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

    if (CHECKBOX_FIELDS.includes(Component.name) || isCheckbox) {
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
    if (SELECT_MENUS.includes(Component.name) || isSelectMenu) {
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
