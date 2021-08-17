import { Platform, TouchableOpacity } from 'react-native';

import { styled } from '../styled';
import { borderRadius, fontSize, fontWeight, palette, space, theme } from '../utils/theme';
import { getFontStyles } from '../utils/getFontStyles';
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
  padding: 0px ${(props) => `${space(4)(props)}px`};
  text-decoration: none;

  ${(props: any) =>
    props.palette === 'default'
      ? `
        border-width: 1px;
        border-style: solid;
        border-top-color: ${palette('white900', { dark: 'gray600' })(props)};
        border-bottom-color: ${palette('white900', { dark: 'gray600' })(props)};
        border-left-color: ${palette('white900', { dark: 'gray600' })(props)};
        border-right-color: ${palette('white900', { dark: 'gray600' })(props)};
        `
      : ''}

  ${theme('native.Button', 'styles.base')};

  ${(props: any) => (props.disabled ? getDisabledButtonProperties(props) : '')};
  ${(props: any) => (props.disabled ? theme('native.Button', `styles.disabled`)(props) : '')};

  ${(props: any) => (props.size ? getButtonSizeProperties(props) : '')};
  ${(props: any) => (props.size ? getButtonSizeOverrides(props) : '')};

  ${(props: any) => (props.isLoading ? getLoadingButtonProperties() : '')};
  ${(props: any) => (props.isLoading ? theme('native.Button', `styles.loading`)(props) : '')}

  ${(props: any) => (props.isStatic ? getStaticButtonProperties() : '')};
  ${(props: any) => (props.isStatic ? theme('native.Button', `styles.static`)(props) : '')}

  ${(props: any) => (isInteractive(props) ? getInteractiveButtonProperties(props) : '')};
  ${(props: any) => (isInteractive(props) ? getInteractiveButtonOverrides(props) : '')};

  ${(props: any) => (props.variant === 'outlined' ? getOutlinedButtonProperties(props) : '')};
  ${(props: any) => (props.variant === 'outlined' ? theme('native.Button', `styles.outlined`)(props) : '')}

  ${(props: any) => (props.variant === 'link' ? getLinkButtonProperties(props) : '')};
  ${(props: any) => (props.variant === 'link' ? theme('native.Button', `styles.link`)(props) : '')}

  ${(props: any) => (props.variant === 'ghost' ? getGhostButtonProperties(props) : '')};
  ${(props: any) => (props.variant === 'ghost' ? theme('native.Button', `styles.ghost`)(props) : '')}
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

export const getButtonSizeProperties = (props: any) => {
  const styles = {
    small: `
      min-height: ${space(8)(props)}px;
      padding: 0px ${space(3)(props)}px;
    `,
    default: ``,
    medium: `
      min-height: ${space(12)(props)}px;
      padding: 0px ${space(5)(props)}px;
    `,
    large: `
      min-height: ${space(13)(props)}px;
      padding: 0px ${space(6)(props)}px;
    `,
  };
  return styles[props.size];
};

export const getButtonSizeOverrides = (props: any) => {
  const styles = {
    small: theme('native.Button', `styles.sizes.small`)(props),
    default: theme('native.Button', `styles.sizes.default`)(props),
    medium: theme('native.Button', `styles.sizes.medium`)(props),
    large: theme('native.Button', `styles.sizes.large`)(props),
  };
  return styles[props.size];
};

export const getLoadingButtonProperties = () => `
  ${
    Platform.OS === 'web'
      ? `
          positon: relative;
          cursor: not-allowed;
        `
      : ''
  }
`;

export const getStaticButtonProperties = () => `
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

export const getOutlinedButtonProperties = (props: any) => `
  background-color: ${palette('default')(props)};
  border-width: 1px;
  border-style: solid;
  border-top-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
  border-bottom-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
  border-left-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
  border-right-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};

  ${
    props.hover && isInteractive(props)
      ? `
          background-color: ${palette(`${props.palette}Tint`, { dark: `${props.palette}Shade` })(props)};
          border-width: 1px;
          border-style: solid;
          border-top-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
          border-bottom-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
          border-left-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
          border-right-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
        `
      : ''
  }

  ${
    props.hoveractive && isInteractive(props)
      ? `
          background-color: ${palette(`${props.palette}100`, { dark: `${props.palette}Shade` })(props)};
          border-width: 1px;
          border-style: solid;
          border-top-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
          border-bottom-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
          border-left-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
          border-right-color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};
        `
      : ''
  }
`;

export const getGhostButtonProperties = (props: any) => `
  background-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;

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

export const getLinkButtonProperties = (props: any) => `
  background-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;

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

  ${getFontStyles({ fontWeight: '500' })};

  ${theme('native.Button', 'Text.styles.base')};

  ${(props: any) => props.size && getButtonTextSizeProperties(props)};
  ${(props: any) => isInteractive(props) && getInteractiveButtonTextProperties(props)};

  ${(props: any) => props.variant === 'outlined' && getOutlinedButtonTextProperties(props)};
  ${(props: any) => props.variant === 'link' && getLinkButtonTextProperties(props)};
  ${(props: any) => props.variant === 'ghost' && getGhostButtonTextProperties(props)};
`;

export const getButtonTextSizeProperties = (props: any) => {
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

export const getOutlinedButtonTextProperties = (props: any) => `
  color: ${palette(props.palette, { dark: `${props.palette}300` })(props)};

  ${theme('native.Button', `Text.styles.outlined`)(props)};
`;

export const getGhostButtonTextProperties = (props: any) => `
  color: ${
    props.palette === 'default'
      ? palette('defaultInverted')(props)
      : palette(props.palette, { dark: `${props.palette}300` })(props)
  };

  ${theme('native.Button', `Text.styles.ghost`)(props)};
`;

export const getLinkButtonTextProperties = (props: any) => `
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
  ${(props: any) =>
    props.isBefore
      ? `
      margin-left: -${space(1)(props)}px;
      margin-right: ${space(2)(props)}px;
    `
      : ''};
  ${(props: any) => (props.isBefore ? theme('native.Button.Icon', `styles.before`)(props) : '')}

  ${(props: any) =>
    props.isAfter
      ? `
      margin-left: ${space(2)(props)}px;
      margin-right: -${space(1)(props)}px;
    `
      : ''};
  ${(props: any) => (props.isAfter ? theme('native.Button.Icon', `styles.after`)(props) : '')}

  ${(props: any) => theme('native.Button.Icon', `styles.base`)(props)};
`;

export const getButtonIconColor = (props: any) => {
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

  ${(props: any) => theme('native.Button.Spinner', `styles.base`)(props)};
`;
