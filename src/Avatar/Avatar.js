// @flow
import React, { Fragment } from 'react';
import classNames from 'classnames';
import _Avatar, { AvatarCircle } from './styled';

type AvatarType = 'circle' | 'square';

type Size = 'default' | 'xsmall' | 'small' | 'medium' | 'large';

type Props = {
  a11yLabel?: string,
  kind?: AvatarType,
  className?: string,
  fit?: 'cover' | 'contain',
  initials?: string,
  size?: Size | number,
  src?: string
};

const Avatar = ({ a11yLabel, className, initials, kind, size, src, ...props }: Props) => (
  <Fragment>
    {src && (
      <_Avatar
        alt={a11yLabel}
        className={classNames({
          [className || '']: Boolean(className)
        })}
        kind={kind}
        size={size}
        src={src}
        {...props}
      />
    )}
    {initials && (
      <AvatarCircle
        alt={a11yLabel}
        className={classNames({
          [className || '']: Boolean(className)
        })}
        kind={kind}
        size={size}
        {...props}
      >
        {initials.split(' ').length === 2 ? initials.match(/\b\w/g) : initials.substring(0, 2)}
      </AvatarCircle>
    )}
  </Fragment>
);

Avatar.defaultProps = {
  a11yLabel: undefined,
  kind: 'square',
  className: null,
  fit: null,
  initials: undefined,
  size: undefined,
  src: undefined
};

export default Avatar;
