import * as React from 'react';

export function useLabelPlaceholder({ enabled = false, ...props }) {
  const [controlledValue, setControlledValue] = React.useState(props.defaultValue || props.value);
  const [isFocused, setIsFocused] = React.useState(enabled && Boolean(props.defaultValue || props.value));

  React.useEffect(() => {
    if (enabled && props.value) {
      setControlledValue(props.value);
    }
  }, [enabled, props.value]);

  React.useEffect(() => {
    if (enabled) {
      setIsFocused(Boolean(controlledValue));
    }
  }, [controlledValue, enabled]);

  const onBlur = React.useCallback(
    (e) => {
      // eslint-disable-next-line
        props.onBlur?.(e);
      if (enabled && !controlledValue) {
        setIsFocused(false);
      }
    },
    [controlledValue, enabled, props.onBlur]
  );

  const onChange = React.useCallback(
    (e) => {
      // eslint-disable-next-line
      props.onChange?.(e);
      if (enabled) {
        const value = e.target.value;
        setControlledValue(value);
      }
    },
    [enabled, props.onChange]
  );

  const onFocus = React.useCallback(
    (e) => {
      // eslint-disable-next-line
      props.onFocus?.(e);
      if (enabled) {
        setIsFocused(true);
      }
    },
    [enabled, props.onFocus]
  );

  return { isFocused, inputProps: { onBlur, onChange, onFocus } };
}
