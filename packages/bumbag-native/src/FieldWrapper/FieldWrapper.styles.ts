import { View } from 'react-native';
import { Box } from '../Box';
import { Text } from '../Text';
import { styled } from '../styled';
import { fontSize, fontWeight, palette, space, theme } from '../utils/theme';

export const FieldWrapper = styled(View)`
  ${theme('native.FieldWrapper', 'styles.base')};
`;

export const LabelWrapper = styled(Box)`
  ${(props) =>
    props.variant === 'default' || props.variant === 'bordered'
      ? `
          margin-bottom: ${space(2)(props)}px;
        `
      : ''}

  ${theme('native.FieldWrapper', 'LabelWrapper.styles.base')};
`;

export const ContentWrapper = styled(Box)`
  ${(props) =>
    props.variant === 'underline' || props.variant === 'borderless'
      ? `
          margin-top: -${space(1)(props)}px;
        `
      : ''}

  ${theme('native.FieldWrapper', 'ContentWrapper.styles.base')};
`;

export const Label = styled(Text)`
  font-weight: 500;

  ${theme('native.FieldWrapper', 'Label.styles.base')};
`;

export const Description = styled(Text)`
  font-size: ${(props) => `${fontSize('150')(props)}px`};

  ${theme('native.FieldWrapper', 'DescriptionText.styles.base')};
`;

export const HintWrapper = styled(Box)`
  margin-top: ${(props) => `${space(1)(props)}px`};

  ${theme('native.FieldWrapper', 'HintTextWrapper.styles.base')};
`;

export const Hint = styled(Text)`
  font-size: ${(props) => `${fontSize('150')(props)}px`};

  ${theme('native.FieldWrapper', 'HintText.styles.base')};
`;

export const OptionalText = styled(Text)`
  font-size: ${(props) => `${fontSize('150')(props)}px`};
  color: ${palette('text100')};
  margin-left: ${(props) => `${space(2)(props)}px`};

  ${theme('native.FieldWrapper', 'OptionalText.styles.base')};
`;

export const RequiredText = styled(Text)`
  color: ${palette('danger')};
  margin-left: ${(props) => `${space(1)(props)}px`};
  font-weight: ${fontWeight('semibold')};
  font-size: ${(props) => `${fontSize('150')(props)}px`};

  ${theme('native.FieldWrapper', 'RequiredText.styles.base')};
`;

export const ValidationTextWrapper = styled(Box)`
  margin-top: ${(props) => `${space(1)(props)}px`};

  ${theme('native.FieldWrapper', 'ValidationTextWrapper.styles.base')};
`;

export const ValidationText = styled(Text)`
  font-size: ${(props) => `${fontSize('150')(props)}px`};

  ${theme('native.FieldWrapper', 'ValidationText.styles.base')};
`;
