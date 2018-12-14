import { palette, theme } from 'styled-tools';

import styled, { css } from '../styled';
import CardCard from '../Card/CardCard';
import CardHeader from '../Card/CardHeader';
import CardContent from '../Card/CardContent';
import CardTitle from '../Card/CardTitle';
import CardFooter from '../Card/CardFooter';
import Button from '../Button';
import { CalloutProps } from './Callout';
import { CalloutCloseProps } from './CalloutClose';
import Icon, { IconProps } from '../Icon/Icon';

const getTintAttributes = (props: any) => {
  const { type, hasTint } = props;

  if (!hasTint || !type) {
    return;
  }

  return css`
    background-color: ${type && palette(`${type}Tint`)(props)};
    box-shadow: none;
    color: ${type && palette(`${type}TintInverted`)(props)};
    fill: ${type && palette(`${type}TintInverted`)(props)};
    ${theme('fannypack.Callout.tint')};
  `;
};

export default styled(CardCard)<CalloutProps>`
  border: none;
  position: relative;

  ${getTintAttributes};

  & {
    ${theme('fannypack.Callout.base')};
  }
`;

export const CalloutClose = styled(Button)<CalloutCloseProps>`
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  width: 30px;
  height: 30px;
  padding: 0;
  text-align: right;

  &:hover {
    background-color: ${palette('whiteDarker')};
    & {
      ${theme('fannypack.Callout.Close.hover')};
    }
  }

  ${theme('fannypack.Callout.Close.base')};
`;

export const CalloutHeader = styled(CardHeader)`
  display: flex;
  justify-content: flex-start;

  & {
    ${theme('fannypack.Callout.Header.base')};
  }
`;

export const CalloutContent = styled(CardContent)`
  & {
    ${theme('fannypack.Callout.Content.base')};
  }
`;

export const CalloutTitle = styled(CardTitle)`
  & {
    ${theme('fannypack.Callout.Title.base')};
  }
`;

export const CalloutFooter = styled(CardFooter)`
  & {
    ${theme('fannypack.Callout.Footer.base')};
  }
`;

export const CalloutIcon = styled(Icon)<IconProps>`
  margin-right: ${theme('fannypack.layout.spacing.xsmall')}rem;

  & {
    ${theme('fannypack.Callout.Icon.base')};
  }
`;
