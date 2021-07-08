import { Box } from '../Box';
import { Pressable } from '../Pressable';
import { Text } from '../Text';
import { styled } from '../styled';
import { borderRadius, fontWeight, palette, space, theme } from '../utils/theme';

export const Menu = styled(Box)`
  background-color: ${palette('white')};
  border-radius: ${borderRadius('default')};
  overflow: hidden;

  ${theme('native.Menu', 'styles.base')};
` as any;

export const MenuItem = styled(Pressable)`
  flex-direction: row;
  width: 100%;
  ${(props) => (!props.disableLeftPadding ? `padding-left: ${space(4)(props)}px` : '')};

  ${getInteractiveProperties}

  ${(props) =>
    props.isStatic
      ? `
    cursor: unset;
  `
      : ''}

  ${theme('native.Menu.Item', 'styles.base')};
` as any;

export const MenuItemBeforeWrapper = styled(Box)`
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => `${space(4)(props)}px`};

  ${theme('native.Menu.Item', 'BeforeWrapper.styles.base')};
` as any;

export const MenuItemAfterWrapper = styled(Box)`
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => `${space(4)(props)}px`};

  ${theme('native.Menu.Item', 'AfterWrapper.styles.base')};
` as any;

export const MenuItemContent = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => `${space(4)(props)}px 0px`};
  padding-right: ${(props) => `${space(4)(props)}px`};
  width: 100%;
  ${(props) => (props.disableLeftPadding ? `padding-left: ${space(4)(props)}px` : '')};

  ${(props) =>
    props.hasDivider
      ? `
        border-bottom-width: 1px;
        border-bottom-color: ${palette('white800')(props)};
      `
      : ''}

  ${getInteractiveProperties}

  ${(props) =>
    props.disabled
      ? `
    opacity: 0.5;
  `
      : ''}

  ${theme('native.Menu.Item', 'Content.styles.base')};
` as any;

export const MenuItemContentText = styled(Text)`
  font-weight: ${fontWeight('500')};

  ${theme('native.Menu.Item', 'ContentText.styles.base')};
` as any;

export function isInteractive(props) {
  return !props.isLoading && !props.disabled && !props.isStatic;
}

export function getInteractiveProperties(props) {
  if (!isInteractive(props)) return ``;
  return `
    ${
      props.hover
        ? `
          background-color: ${palette('white600')(props)};

          ${theme('native.Menu.Item', 'styles.hover')(props)};
        `
        : ''
    }

    ${
      props.hoveractive
        ? `
          background-color: ${palette('white700')(props)};

          ${theme('native.Menu.Item', 'styles.hoveractive')(props)};
        `
        : ''
    }
  `;
}
