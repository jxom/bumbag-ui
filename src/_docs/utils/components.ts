import * as PropTypes from 'prop-types';
// @ts-ignore
import _groupBy from 'lodash/groupBy';

export type ComponentDetails = {
  name: string;
  docsPath: string;
  type: 'foundation' | 'component' | 'typography' | 'util' | 'layout' | 'form';
  status: 'complete' | 'pending';
};
export const componentDetailsPropTypes = {
  name: PropTypes.string.isRequired,
  docsPath: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['foundation', 'component', 'typography', 'util', 'layout', 'form']).isRequired,
  status: PropTypes.oneOf(['complete', 'pending']).isRequired
};

export const getSectionedComponents = () => _groupBy(componentList, (component: ComponentDetails) => component.type);

export const sectionTitles: { [key: string]: string } = {
  foundation: 'Foundation',
  typography: 'Typography',
  layout: 'Layout',
  component: 'Components',
  form: 'Form',
  util: 'Utilities'
};

export const componentList: Array<ComponentDetails> = [
  {
    name: 'Primitives',
    type: 'foundation',
    status: 'complete',
    docsPath: '/primitives'
  },
  {
    name: 'Palette',
    type: 'foundation',
    status: 'complete',
    docsPath: '/palette'
  },
  {
    name: 'Accordians',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Alert',
    type: 'component',
    status: 'complete',
    docsPath: '/components/alert'
  },
  {
    name: 'Avatar',
    type: 'component',
    status: 'complete',
    docsPath: '/components/avatar'
  },
  {
    name: 'Backdrop',
    type: 'util',
    status: 'complete',
    docsPath: '/utils/avatar'
  },
  {
    name: 'Badge',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Blockquote',
    type: 'typography',
    status: 'complete',
    docsPath: '/typography/blockquote'
  },
  {
    name: 'Breadcrumb',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Button',
    type: 'component',
    status: 'complete',
    docsPath: '/components/button'
  },
  {
    name: 'Callout',
    type: 'component',
    status: 'complete',
    docsPath: '/components/callout'
  },
  {
    name: 'CalloutOverlay',
    type: 'component',
    status: 'complete',
    docsPath: '/components/calloutoverlay'
  },
  {
    name: 'Card',
    type: 'component',
    status: 'complete',
    docsPath: '/components/card'
  },
  {
    name: 'Carousel',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Checkbox',
    type: 'form',
    status: 'complete',
    docsPath: '/form/checkbox'
  },
  {
    name: 'Code',
    type: 'typography',
    status: 'complete',
    docsPath: '/typography/code'
  },
  {
    name: 'Columns',
    type: 'layout',
    status: 'complete',
    docsPath: '/layout/columns'
  },
  {
    name: 'Container',
    type: 'layout',
    status: 'complete',
    docsPath: '/layout/container'
  },
  {
    name: 'Dialog',
    type: 'component',
    status: 'complete',
    docsPath: '/components/dialog'
  },
  {
    name: 'DialogModal',
    type: 'component',
    status: 'complete',
    docsPath: '/components/dialogmodal'
  },
  {
    name: 'Divider',
    type: 'component',
    status: 'complete',
    docsPath: '/components/divider'
  },
  {
    name: 'Empty',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Error',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'FieldWrapper',
    type: 'form',
    status: 'complete',
    docsPath: '/form/fieldwrapper'
  },
  {
    name: 'Grid',
    type: 'layout',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Group',
    type: 'util',
    status: 'complete',
    docsPath: '/utils/group'
  },
  {
    name: 'Heading',
    type: 'typography',
    status: 'complete',
    docsPath: '/typography/heading'
  },
  {
    name: 'Hidden',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Icon',
    type: 'component',
    status: 'complete',
    docsPath: '/components/icon'
  },
  {
    name: 'Image',
    type: 'component',
    status: 'complete',
    docsPath: '/components/image'
  },
  {
    name: 'Input',
    type: 'form',
    status: 'complete',
    docsPath: '/form/input'
  },
  {
    name: 'Label',
    type: 'form',
    status: 'complete',
    docsPath: '/form/label'
  },
  {
    name: 'Link',
    type: 'typography',
    status: 'complete',
    docsPath: '/typography/link'
  },
  {
    name: 'List',
    type: 'typography',
    status: 'complete',
    docsPath: '/typography/list'
  },
  {
    name: 'Loading',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Menu',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Modal',
    type: 'util',
    status: 'complete',
    docsPath: '/utils/modal'
  },
  {
    name: 'Navbar',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Navigation',
    type: 'component',
    status: 'complete',
    docsPath: '/components/navigation'
  },
  {
    name: 'Overlay',
    type: 'util',
    status: 'complete',
    docsPath: '/utils/overlay'
  },
  {
    name: 'Pagination',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Pane',
    type: 'layout',
    status: 'complete',
    docsPath: '/layout/pane'
  },
  {
    name: 'Paragraph',
    type: 'typography',
    status: 'complete',
    docsPath: '/typography/paragraph'
  },
  {
    name: 'Popover',
    type: 'util',
    status: 'complete',
    docsPath: '/utils/popover'
  },
  {
    name: 'Portal',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Radio',
    type: 'form',
    status: 'complete',
    docsPath: '/form/radio'
  },
  {
    name: 'Rating',
    type: 'component',
    status: 'complete',
    docsPath: '/components/rating'
  },
  {
    name: 'SearchableSelect',
    type: 'form',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Select',
    type: 'form',
    status: 'complete',
    docsPath: '/form/select'
  },
  {
    name: 'Set',
    type: 'util',
    status: 'complete',
    docsPath: '/utils/set'
  },
  {
    name: 'Sidebar',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Spinner',
    type: 'component',
    status: 'complete',
    docsPath: '/components/spinner'
  },
  {
    name: 'Step',
    type: 'util',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Switch',
    type: 'form',
    status: 'complete',
    docsPath: '/form/switch'
  },
  {
    name: 'Table',
    type: 'component',
    status: 'complete',
    docsPath: '/components/table'
  },
  {
    name: 'Tabs',
    type: 'component',
    status: 'complete',
    docsPath: '/components/tabs'
  },
  {
    name: 'Tag',
    type: 'component',
    status: 'complete',
    docsPath: '/components/tag'
  },
  {
    name: 'Text',
    type: 'typography',
    status: 'complete',
    docsPath: '/typography/text'
  },
  {
    name: 'Textarea',
    type: 'form',
    status: 'complete',
    docsPath: '/form/textarea'
  },
  {
    name: 'Timeline',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Toast',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  },
  {
    name: 'Tooltip',
    type: 'component',
    status: 'complete',
    docsPath: '/components/tooltip'
  },
  {
    name: 'Video',
    type: 'component',
    status: 'pending',
    docsPath: 'https://github.com/fannypackui/fannypack/issues/1'
  }
];
