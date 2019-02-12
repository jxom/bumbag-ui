import * as React from 'react';

export default function formikField(Component: any) {
  return ({ field, form, ...props }: any) => {
    let state = form.touched[field.name] && form.errors[field.name] ? 'danger' : undefined;
    if (props.state) {
      state = props.state;
    }

    let validationText = form.touched[field.name] && form.errors[field.name] ? form.errors[field.name] : undefined;
    if (props.validationText) {
      validationText = props.validationText;
    }

    return <Component {...props} {...field} state={state} validationText={validationText} />;
  };
}
