import { Platform, TouchableOpacity } from 'react-native';

import { styled } from '../styled';
import { borderRadius, fontSize, fontWeight, palette, space, theme } from '../utils/theme';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';
import { Text } from '../Text';

export const isInteractive = (props) =>
  !props.isStatic && !props.isLoading && !props.disabled && props.variant !== 'link';

export const StyledButton = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${(props: any) => palette(props.palette)(props)};
  border-radius: ${borderRadius('default')};
  justify-content: center;
  flex-direction: row;
  min-height: ${(props) => `${space(5.5, 'major')(props)}px`};
  padding: 0 ${(props) => `${space(4)(props)}px`};
  text-decoration: none;

  ${(props: any) =>
    props.palette === 'default'
      ? `
          border: 1px solid ${palette('white900', { dark: 'gray600' })(props)};
        `
      : ''}

  ${theme('native.Button', 'styles.base')};

  ${(props: any) => (props.disabled ? getDisabledButtonProperties(props) : '')};
  ${(props: any) => (props.disabled ? theme('native.Button', `styles.disabled`)(props) : '')};

  ${(props: any) => (props.size ? getButtonSizeProperties(props) : '')};
  ${(props: any) => (props.size ? getButtonSizeOverrides(props) : '')};

  ${(props: any) => (props.isLoading ? getLoadingButtonProperties(props) : '')};
  ${(props) => (props.isLoading ? theme('native.Button', `styles.loading`)(props) : '')}

  ${(props: any) => (props.isStatic ? getStaticButtonProperties(props) : '')};
  ${(props) => (props.isStatic ? theme('native.Button', `styles.static`)(props) : '')}

  ${(props: any) => (isInteractive(props) ? getInteractiveButtonProperties(props) : '')};
  ${(props: any) => (isInteractive(props) ? getInteractiveButtonOverrides(props) : '')};

  ${(props: any) => (props.variant === 'outlined' ? getOutlinedButtonProperties(props) : '')};
  ${(props) => (props.variant === 'outlined' ? theme('native.Button', `styles.outlined`)(props) : '')}

  ${(props: any) => (props.variant === 'link' ? getLinkButtonProperties(props) : '')};
  ${(props) => (props.variant === 'link' ? theme('native.Button', `styles.link`)(props) : '')}

  ${(props: any) => (props.variant === 'ghost' ? getGhostButtonProperties(props) : '')};
  ${(props) => (props.variant === 'ghost' ? theme('native.Button', `styles.ghost`)(props) : '')}
`;

export const getDisabledButtonProperties = (props: any) => `
    opacity: ${props.colorMode === 'dark' ? '0.5' : '0.7'};

  ${
    Platform.OS === 'web'
      ? `
          cursor: not-allowed;
          pointer-events: unset;
        `
      : ''
  }
`;

export const getButtonSizeProperties = (props) => {
  const styles = {
    small: `
      min-height: ${space(8)(props)}px;
      padding: 0 ${space(3)(props)}px;
    `,
    default: ``,
    medium: `
      min-height: ${space(12)(props)}px;
      padding: 0 ${space(5)(props)}px;
    `,
    large: `
      min-height: ${space(13)(props)}px;
      padding: 0 ${space(6)(props)}px;
    `,
  };
  return styles[props.size];
};

export const getButtonSizeOverrides = (props) => {
  const styles = {
    small: theme('native.Button', `styles.sizes.small`)(props),
    default: theme('native.Button', `styles.sizes.default`)(props),
    medium: theme('native.Button', `styles.sizes.medium`)(props),
    large: theme('native.Button', `styles.sizes.large`)(props),
  };
  return styles[props.size];
};

export const getLoadingButtonProperties = (props: any) => `
  ${
    Platform.OS === 'web'
      ? `
          positon: relative;
          cursor: not-allowed;
        `
      : ''
  }
`;

export const getStaticButtonProperties = (props: any) => `
  ${
    Platform.OS === 'web'
      ? `
          cursor: default;
        `
      : ''
  }
`;

export const getInteractiveButtonProperties = (props: any) => `
  ${
    props.hover && props.variant !== 'link'
      ? `
          background-color: ${palette(`${props.palette === 'default' ? 'white' : props.palette}600`, {
            dark: `${props.palette === 'default' ? 'black100' : `${props.palette}600`}`,
          })(props)};
        `
      : ''
  }

  ${
    props.hoveractive && props.variant !== 'link'
      ? `
          background-color: ${palette(props.palette === 'default' ? 'white800' : `${props.palette}700`, {
            dark: `${props.palette === 'default' ? 'black200' : `${props.palette}700`}`,
          })(props)};
        `
      : ''
  }
`;

export const getInteractiveButtonOverrides = (props: any) => {
  if (props.hover && props.variant !== 'link') {
    return theme('native.Button', 'styles.hover')(props);
  }
  if (props.hoveractive && props.variant !== 'link') {
    return theme('native.Button', 'styles.hoveractive')(props);
  }
  return '';
};

export const getOutlinedButtonProperties = (props) => `
  background-color: ${palette('default')(props)};
  border: 1px solid ${palette(props.palette, { dark: `${props.palette}300` })(props)};

  ${
    props.hover && isInteractive(props)
      ? `
          background-color: ${palette(`${props.palette}Tint`, { dark: `${props.palette}Shade` })(props)};
          border: 1px solid ${palette(props.palette, { dark: `${props.palette}300` })(props)};
        `
      : ''
  }

  ${
    props.hoveractive && isInteractive(props)
      ? `
          background-color: ${palette(`${props.palette}100`, { dark: `${props.palette}Shade` })(props)};
          border: 1px solid ${palette(props.palette, { dark: `${props.palette}300` })(props)};
        `
      : ''
  }
`;

export const getGhostButtonProperties = (props) => `
  background-color: transparent;
  border: transparent;

  ${
    props.hover
      ? `
          background-color: rgba(0, 0, 0, 0.05);
        `
      : ''
  }

  ${
    props.hoveractive
      ? `
          background-color: rgba(0, 0, 0, 0.1);
        `
      : ''
  }
`;

export const getLinkButtonProperties = (props) => `
  background-color: transparent;
  border: transparent;

  ${
    props.hover && Platform.OS === 'web'
      ? `
          text-decoration: underline;
          text-decoration-color: ${
            props.palette === 'default'
              ? palette('text')(props)
              : palette(props.palette, { dark: `${props.palette}300` })(props)
          };
        `
      : ''
  }
`;

////////////////////////////////////////////////////////////////////////////////////

export const StyledButtonText = styled(Text)`
  color: ${(props: any) => palette(`${props.palette}Inverted`)(props)};
  font-weight: ${fontWeight('semibold')};

  ${theme('native.Button', 'Text.styles.base')};

  ${(props: any) => props.size && getButtonTextSizeProperties(props)};
  ${(props: any) => isInteractive(props) && getInteractiveButtonTextProperties(props)};

  ${(props: any) => props.variant === 'outlined' && getOutlinedButtonTextProperties(props)};
  ${(props: any) => props.variant === 'link' && getLinkButtonTextProperties(props)};
  ${(props: any) => props.variant === 'ghost' && getGhostButtonTextProperties(props)};
`;

export const getButtonTextSizeProperties = (props) => {
  const styles = {
    small: `
      font-size: ${fontSize('100')(props)}px;

      ${theme('native.Button', `Text.styles.sizes.small`)(props)};
    `,
    default: `
      ${theme('native.Button', `Text.styles.sizes.default`)(props)};
    `,
    medium: `
      ${theme('native.Button', `Text.styles.sizes.medium`)(props)};
    `,
    large: `
      font-size: ${fontSize('300')(props)}px;

      ${theme('native.Button', `Text.styles.sizes.large`)(props)};
    `,
  };
  return styles[props.size];
};

export const getInteractiveButtonTextProperties = (props: any) => `
  ${
    props.hover && props.variant !== 'link'
      ? `
          ${theme('native.Button', 'Text.styles.hover')(props)};
        `
      : ''
  }

  ${
    props.hoveractive && props.variant !== 'link'
      ? `
          ${theme('native.Button', 'Text.styles.hoveractive')(props)};
        `
      : ''
  }
`;

export const getOutlinedButtonTextProperties = (props) => `
  color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};

  ${theme('native.Button', `Text.styles.outlined`)(props)};
`;

export const getGhostButtonTextProperties = (props) => `
  color: ${
    props.palette === 'default'
      ? palette('defaultInverted')(props)
      : palette(props.palette, { dark: `${props.palette}300` })(props)
  };

  ${theme('native.Button', `Text.styles.ghost`)(props)};
`;

export const getLinkButtonTextProperties = (props) => `
  color: ${
    props.palette === 'default'
      ? palette('text')(props)
      : palette(props.palette, { dark: `${props.palette}300` })(props)
  };

  ${
    Platform.OS !== 'web'
      ? `
          text-decoration: underline;
          text-decoration-color: ${
            props.palette === 'default'
              ? palette('text')(props)
              : palette(props.palette, { dark: `${props.palette}300` })(props)
          };
        `
      : ''
  }


  ${theme('native.Button', `Text.styles.link`)(props)};
`;

////////////////////////////////////////////////////////

export const StyledButtonIcon = styled(Icon)`
  ${(props) =>
    props.isBefore
      ? `
      margin-left: -${space(1)(props)}px;
      margin-right: ${space(2)(props)}px;
    `
      : ''};
  ${(props) => (props.isBefore ? theme('native.Button.Icon', `styles.before`)(props) : '')}

  ${(props) =>
    props.isAfter
      ? `
      margin-left: ${space(2)(props)}px;
      margin-right: -${space(1)(props)}px;
    `
      : ''};
  ${(props) => (props.isAfter ? theme('native.Button.Icon', `styles.after`)(props) : '')}

  ${(props) => theme('native.Button.Icon', `styles.base`)(props)};
`;

export const getButtonIconColor = (props) => {
  if (props.variant === 'ghost') {
    return props.palette === 'default'
      ? palette('defaultInverted')(props)
      : palette(props.palette, { dark: `${props.palette}300` })(props);
  }
  if (props.variant === 'outlined') {
    return palette(props.palette, { dark: `${props.palette}300` })(props);
  }
  if (props.variant === 'link') {
    return props.palette === 'default'
      ? palette('text')(props)
      : palette(props.palette, { dark: `${props.palette}300` })(props);
  }
  return palette(`${props.palette}Inverted`)(props);
};

////////////////////////////////////////////////////////////////////////////////////

export const ButtonSpinner = styled(Spinner)`
  position: absolute;

  ${(props) => theme('native.Button.Spinner', `styles.base`)(props)};
`;
