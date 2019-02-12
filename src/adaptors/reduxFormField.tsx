import * as React from 'react';

export default function reduxFormField(Component: any) {
  return ({ input, meta, ...props }: any) => {
    let state = meta.touched && meta.error ? 'danger' : undefined;
    if (props.state) {
      state = props.state;
    }

    let validationText = meta.touched && meta.error ? meta.error : undefined;
    if (props.validationText) {
      validationText = props.validationText;
    }

    return <Component {...props} {...input} state={state} validationText={validationText} />;
  };
}
