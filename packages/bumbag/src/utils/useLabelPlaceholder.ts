import * as React from 'react';

export function useLabelPlaceholder({ enabled = false, useValue = false, ...props }) {
  const [controlledValue, setControlledValue] = React.useState(props.defaultValue || props.value);
  const [isFocused, setIsFocused] = React.useState(enabled && Boolean(props.defaultValue || props.value));

  React.useEffect(() => {
    if (enabled && props.value) {
      setControlledValue(props.value);
    }
  }, [enabled, props.value]);

  React.useEffect(() => {
    setControlledValue(props.value);
  }, [props.value]);

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
    (...args) => {
      // eslint-disable-next-line
      props.onChange?.(...args);

      const e = args[0];
      if (enabled) {
        const value = useValue ? e : e.target.value;
        setControlledValue(value);
      }
    },
    [enabled, props.onChange, useValue]
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
