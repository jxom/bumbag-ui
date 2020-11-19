import * as React from 'react';

export function useOptionsState({ defaultValue, isNativeInput, onBlur, onChange, type, value }: any) {
  const [controlledValue, setControlledValue] = React.useState(defaultValue || []);
  const values = typeof value !== 'undefined' ? value : controlledValue;

  const handleChange = React.useCallback(
    (e) => {
      const newValue = isNativeInput ? e.target?.value : e.value;

      let newValues = newValue;

      if (type === 'checkbox') {
        newValues = [];
        if (values.includes(newValue)) {
          newValues = (values || []).filter((val) => val !== newValue);
        } else {
          newValues = [...(values || []), newValue];
        }
      }

      if (typeof value !== 'undefined') {
        onChange && onChange(newValues, newValue);
      } else {
        setControlledValue(newValues);
      }
    },
    [isNativeInput, onChange, type, value, values]
  );

  const handleBlur = React.useCallback(() => {
    onBlur && onBlur(values);
  }, [onBlur, values]);

  return {
    getOptionItemProps: ({ readOnly = false, value }) => ({
      checked: values ? values.includes(value) : false,
      onChange: !readOnly ? handleChange : undefined,
      onBlur: !readOnly ? handleBlur : undefined,
    }),
  };
}
