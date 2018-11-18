// @flow
import React, { type Element, type Node } from 'react';

import Heading from '../Heading';
import _Dialog from './styled';
import DialogContent from './DialogContent';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';

type Props = {
  border: true | 'shadow',
  children: Node,
  className?: string,
  footer?: string | Element<any>,
  title?: string | Element<any>
};

const Dialog = ({ border, children, footer, title, ...props }: Props) => (
  <_Dialog border={border} {...props}>
    {typeof title === 'string' ? (
      <DialogHeader>
        <Heading as="h5" isSubHeading>
          {title}
        </Heading>
      </DialogHeader>
    ) : (
      <DialogHeader>title</DialogHeader>
    )}
    <DialogContent>{children}</DialogContent>
    {footer && <DialogFooter>{footer}</DialogFooter>}
  </_Dialog>
);

Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;

Dialog.defaultProps = {
  border: true,
  className: undefined,
  footer: undefined,
  title: undefined
};

export default Dialog;
