import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import _Avatar, { AvatarCircle } from './styled';
import { AvatarProps as ReakitAvatarProps } from '@jmoxey/reakit/ts';
import { Omit } from '../types';

export type LocalAvatarProps = {
  a11yLabel?: string;
  alt?: string;
  color?: string;
  className?: string;
  fit?: 'cover' | 'contain';
  fitPosition?: string;
  initials?: string;
  kind?: 'circle' | 'square';
  palette?: string;
  size?: number | 'default' | 'xsmall' | 'small' | 'medium' | 'large';
  src?: string;
};
export type AvatarProps = LocalAvatarProps & Omit<ReakitAvatarProps, 'size'>;

const defaultProps: Partial<LocalAvatarProps> = {
  a11yLabel: undefined,
  alt: undefined,
  kind: 'square',
  className: undefined,
  color: undefined,
  fit: undefined,
  fitPosition: undefined,
  initials: undefined,
  palette: undefined,
  size: undefined,
  src: undefined
};

export const Avatar: React.FunctionComponent<LocalAvatarProps> = ({
  a11yLabel,
  className,
  initials,
  size,
  src,
  ...props
}) => (
  <React.Fragment>
    {src && (
      <_Avatar
        alt={a11yLabel}
        className={classNames({
          [className || '']: Boolean(className)
        })}
        styledSize={size}
        src={src}
        {...props}
      />
    )}
    {initials && (
      <AvatarCircle
        className={classNames({
          [className || '']: Boolean(className)
        })}
        styledSize={size}
        {...props}
      >
        {initials.split(' ').length === 2 ? initials.match(/\b\w/g) : initials.substring(0, 2)}
      </AvatarCircle>
    )}
  </React.Fragment>
);

Avatar.propTypes = {
  a11yLabel: PropTypes.string,
  alt: PropTypes.string,
  kind: PropTypes.oneOf(['circle', 'square']) as PropTypes.Validator<LocalAvatarProps['kind']>,
  color: PropTypes.string,
  className: PropTypes.string,
  fit: PropTypes.oneOf(['cover', 'contain']) as PropTypes.Validator<LocalAvatarProps['fit']>,
  fitPosition: PropTypes.string,
  initials: PropTypes.string,
  palette: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['default', 'xsmall', 'small', 'medium', 'large'])
  ]) as PropTypes.Validator<LocalAvatarProps['size']>,
  src: PropTypes.string
};
Avatar.defaultProps = defaultProps;

const C: React.FunctionComponent<AvatarProps> = Avatar;
export default C;
