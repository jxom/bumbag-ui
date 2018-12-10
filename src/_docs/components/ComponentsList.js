import React from 'react';

import { Box } from '../../primitives/index';
import Columns from '../../Columns';
import Column from '../../Column';
import Heading from '../../Heading';

import ComponentButton from './ComponentButton';
import AlertIcon from './ComponentIcons/Alert';
import AvatarIcon from './ComponentIcons/Avatar';
import BackdropIcon from './ComponentIcons/Backdrop';
import BlockquoteIcon from './ComponentIcons/Blockquote';
import ButtonIcon from './ComponentIcons/Button';
import CardIcon from './ComponentIcons/Card';
import CheckboxIcon from './ComponentIcons/Checkbox';
import CodeIcon from './ComponentIcons/Code';
import ColumnsIcon from './ComponentIcons/Columns';
import ContainerIcon from './ComponentIcons/Container';
import DialogIcon from './ComponentIcons/Dialog';
import DialogModalIcon from './ComponentIcons/DialogModal';
import DividerIcon from './ComponentIcons/Divider';
import FieldWrapperIcon from './ComponentIcons/FieldWrapper';
import GroupIcon from './ComponentIcons/Group';
import HeadingIcon from './ComponentIcons/Heading';
import IconIcon from './ComponentIcons/Icon';
import InputIcon from './ComponentIcons/Input';
import ImageIcon from './ComponentIcons/Image';
import LabelIcon from './ComponentIcons/Label';
import LinkIcon from './ComponentIcons/Link';
import ListIcon from './ComponentIcons/List';
import NavigationIcon from './ComponentIcons/Navigation';
import OverlayIcon from './ComponentIcons/Overlay';
import PaletteIcon from './ComponentIcons/Palette';
import PaneIcon from './ComponentIcons/Pane';
import ParagraphIcon from './ComponentIcons/Paragraph';
import PopoverIcon from './ComponentIcons/Popover';
import PrimitiveIcon from './ComponentIcons/Primitive';
import RadioIcon from './ComponentIcons/Radio';
import RatingIcon from './ComponentIcons/Rating';
import SelectIcon from './ComponentIcons/Select';
import SetIcon from './ComponentIcons/Set';
import SpinnerIcon from './ComponentIcons/Spinner';
import SwitchIcon from './ComponentIcons/Switch';
import TableIcon from './ComponentIcons/Table';
import TabsIcon from './ComponentIcons/Tabs';
import TagIcon from './ComponentIcons/Tag';
import TextIcon from './ComponentIcons/Text';
import TextareaIcon from './ComponentIcons/Textarea';
import TooltipIcon from './ComponentIcons/Tooltip';
import TypographyIcon from './ComponentIcons/Typography';

export default () => (
  <Box>
    <Heading use="h4" marginTop="large">
      Foundation
    </Heading>
    <Columns>
      <Column spread={3} spreadTablet={6}>
        <ComponentButton title="Primitives" href="/primitives">
          <PrimitiveIcon />
        </ComponentButton>
      </Column>
      <Column spread={3} spreadTablet={6}>
        <ComponentButton title="Palette" href="/palette">
          <PaletteIcon />
        </ComponentButton>
      </Column>
    </Columns>
    <Heading use="h4" marginTop="large">
      Typography
    </Heading>
    <Columns>
      <Column spread={3}>
        <ComponentButton title="Blockquote" href="/typography/blockquote">
          <BlockquoteIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Code" href="/code">
          <CodeIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Heading" href="/typography/heading">
          <HeadingIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Link" href="/typography/link">
          <LinkIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="List" href="/typography/list">
          <ListIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Paragraph" href="/typography/paragraph">
          <ParagraphIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Text" href="/typography/text">
          <TextIcon />
        </ComponentButton>
      </Column>
    </Columns>
    <Heading use="h4" marginTop="large">
      Layout
    </Heading>
    <Columns>
      <Column spread={3}>
        <ComponentButton title="Columns" href="/layout/columns">
          <ColumnsIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Container" href="/layout/container">
          <ContainerIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Pane" href="/layout/pane">
          <PaneIcon />
        </ComponentButton>
      </Column>
    </Columns>
    <Heading use="h4" marginTop="large">
      Components
    </Heading>
    <Columns>
      <Column spread={3}>
        <ComponentButton title="Alert" href="/components/alerts">
          <AlertIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Avatar" href="/components/avatar">
          <AvatarIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Button" href="/components/button">
          <ButtonIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Card" href="/components/card">
          <CardIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Dialog" href="/components/dialog">
          <DialogIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="DialogModal" href="/components/Dialogmodal">
          <DialogModalIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Divider" href="/components/divider">
          <DividerIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Icon" href="/components/icon">
          <IconIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Image" href="/components/image">
          <ImageIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Navigation" href="/components/navigation">
          <NavigationIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Popover" href="/components/popover">
          <PopoverIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Rating" href="/components/rating">
          <RatingIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Spinner" href="/components/spinner">
          <SpinnerIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Table" href="/components/table">
          <TableIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Tabs" href="/components/title">
          <TabsIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Tag" href="/components/tag">
          <TagIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Tooltip" href="/components/tooltip">
          <TooltipIcon />
        </ComponentButton>
      </Column>
    </Columns>
    <Heading use="h4" marginTop="large">
      Form
    </Heading>
    <Columns>
      <Column spread={3}>
        <ComponentButton title="Checkbox" href="/form/checkbox">
          <CheckboxIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="FieldWrapper" href="/form/fieldwrapper">
          <FieldWrapperIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Input" href="/form/input">
          <InputIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Label" href="/form/label">
          <LabelIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Radio" href="/form/radio">
          <RadioIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Select" href="/form/select">
          <SelectIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Switch" href="/form/switch">
          <SwitchIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Textarea" href="/form/textarea">
          <TextareaIcon />
        </ComponentButton>
      </Column>
    </Columns>
    <Heading use="h4" marginTop="large">
      Utilities
    </Heading>
    <Columns>
      <Column spread={3}>
        <ComponentButton title="Backdrop" href="/utils/backdrop">
          <BackdropIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Group" href="/utils/group">
          <GroupIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Overlay" href="/utils/overlay">
          <OverlayIcon />
        </ComponentButton>
      </Column>
      <Column spread={3}>
        <ComponentButton title="Set" href="/utils/set">
          <SetIcon />
        </ComponentButton>
      </Column>
    </Columns>
  </Box>
);
