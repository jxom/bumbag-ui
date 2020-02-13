import * as React from 'react';
import { Box, Breadcrumb, Icon, Button, Set } from '../../';

export default { title: 'Breadcrumb' };

export const _default = () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item isCurrent>
      <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
    </Breadcrumb.Item>
  </Breadcrumb>
);

export const customSeparators = () => (
  <Box>
    <Breadcrumb separator="-">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item isCurrent>
        <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb separator={<Icon icon="chevron-right" color="gray100" fontSize="150" />}>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item isCurrent>
        <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb>
      <Breadcrumb.Item separator={<Icon icon="chevron-right" color="gray100" fontSize="150" />}>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item isCurrent>
        <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb hasSeparator={false}>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Separator />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Business</Breadcrumb.Link>
        <Breadcrumb.Separator>
          <Icon icon="chevron-right" color="gray100" fontSize="150" />
        </Breadcrumb.Separator>
      </Breadcrumb.Item>
      <Breadcrumb.Item isCurrent>
        <Breadcrumb.Link href="#">Staff Members</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Box>
);
