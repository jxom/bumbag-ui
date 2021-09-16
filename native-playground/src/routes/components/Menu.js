import React from 'react';
import { Box, Heading, Menu } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Menu</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Menu>
            <Menu.Item onPress={() => console.log('test')}>General</Menu.Item>
            <Menu.Item>Accounts</Menu.Item>
            <Menu.Item>Alerts</Menu.Item>
            <Menu.Item>Security</Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Dividers">
        <Preview>
          <Menu hasDividers>
            <Menu.Item>General</Menu.Item>
            <Menu.Item>Accounts</Menu.Item>
            <Menu.Item>Alerts</Menu.Item>
            <Menu.Item>Security</Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Dividers (no left padding)">
        <Preview>
          <Menu hasDividers disableLeftPadding>
            <Menu.Item>General</Menu.Item>
            <Menu.Item>Accounts</Menu.Item>
            <Menu.Item>Alerts</Menu.Item>
            <Menu.Item>Security</Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Disabled">
        <Preview>
          <Menu>
            <Menu.Item>General</Menu.Item>
            <Menu.Item disabled>Accounts</Menu.Item>
            <Menu.Item>Alerts</Menu.Item>
            <Menu.Item>Security</Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Icons (left)">
        <Preview>
          <Menu hasDividers>
            <Menu.Item iconBefore="chevron-down" iconBeforeProps={{ color: 'primary' }}>
              Settings
            </Menu.Item>
            <Menu.Item iconBefore="chevron-down" iconBeforeProps={{ color: 'primary' }}>
              Accounts
            </Menu.Item>
            <Menu.Item iconBefore="chevron-down" iconBeforeProps={{ color: 'primary' }}>
              Alerts
            </Menu.Item>
            <Menu.Item iconBefore="chevron-down" iconBeforeProps={{ color: 'primary' }}>
              Security
            </Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Icons (right)">
        <Preview>
          <Menu hasDividers>
            <Menu.Item iconAfter="chevron-down" iconAfterProps={{ color: 'primary' }}>
              Settings
            </Menu.Item>
            <Menu.Item iconAfter="chevron-down" iconAfterProps={{ color: 'primary' }}>
              Accounts
            </Menu.Item>
            <Menu.Item iconAfter="chevron-down" iconAfterProps={{ color: 'primary' }}>
              Alerts
            </Menu.Item>
            <Menu.Item iconAfter="chevron-down" iconAfterProps={{ color: 'primary' }}>
              Security
            </Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Addon components (before)">
        <Preview>
          <Menu hasDividers>
            <Menu.Item before={<Box backgroundColor="blue" width="major-2" height="major-2" borderRadius="16px" />}>
              Settings
            </Menu.Item>
            <Menu.Item before={<Box backgroundColor="red" width="major-2" height="major-2" borderRadius="16px" />}>
              Accounts
            </Menu.Item>
            <Menu.Item before={<Box backgroundColor="orange" width="major-2" height="major-2" borderRadius="16px" />}>
              Alerts
            </Menu.Item>
            <Menu.Item before={<Box backgroundColor="purple" width="major-2" height="major-2" borderRadius="16px" />}>
              Security
            </Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Addon components (after)">
        <Preview>
          <Menu hasDividers>
            <Menu.Item after={<Box backgroundColor="blue" width="major-2" height="major-2" borderRadius="16px" />}>
              Settings
            </Menu.Item>
            <Menu.Item after={<Box backgroundColor="red" width="major-2" height="major-2" borderRadius="16px" />}>
              Accounts
            </Menu.Item>
            <Menu.Item after={<Box backgroundColor="orange" width="major-2" height="major-2" borderRadius="16px" />}>
              Alerts
            </Menu.Item>
            <Menu.Item after={<Box backgroundColor="purple" width="major-2" height="major-2" borderRadius="16px" />}>
              Security
            </Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Static items">
        <Preview>
          <Menu>
            <Menu.Item isStatic>General</Menu.Item>
            <Menu.Item>Accounts</Menu.Item>
            <Menu.Item>Alerts</Menu.Item>
            <Menu.Item>Security</Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Option groups (radio)">
        <Preview>
          <Menu hasDividers>
            <Menu.OptionGroup defaultValue="asc" type="radio">
              <Menu.OptionItem value="asc">Ascending</Menu.OptionItem>
              <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Option groups (checked)">
        <Preview>
          <Menu hasDividers>
            <Menu.OptionGroup defaultValue={['australia', 'india']} type="checkbox">
              <Menu.OptionItem value="australia">Australia</Menu.OptionItem>
              <Menu.OptionItem value="us">United States</Menu.OptionItem>
              <Menu.OptionItem value="india">India</Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Option groups (check alignment)">
        <Preview>
          <Menu hasDividers>
            <Menu.OptionGroup alignCheck="right" defaultValue="asc" type="radio">
              <Menu.OptionItem value="asc">Ascending</Menu.OptionItem>
              <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Option groups (colors)">
        <Preview>
          <Menu hasDividers>
            <Menu.OptionGroup palette="red" defaultValue="asc" type="radio">
              <Menu.OptionItem value="asc">Ascending</Menu.OptionItem>
              <Menu.OptionItem value="desc">Descending</Menu.OptionItem>
            </Menu.OptionGroup>
          </Menu>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Option list (radio)">
        <Preview>
          <Menu.OptionList
            defaultValue="asc"
            type="radio"
            options={[
              {
                label: 'Ascending',
                value: 'asc',
              },
              {
                label: 'Descending',
                value: 'desc',
              },
            ]}
          />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Option list (checkbox)">
        <Preview>
          <Menu.OptionList
            defaultValue={['australia', 'india']}
            type="checkbox"
            options={[
              {
                label: 'Australia',
                value: 'australia',
              },
              {
                label: 'United Kingdom',
                value: 'uk',
              },
              {
                label: 'India',
                value: 'india',
              },
            ]}
          />
        </Preview>
      </PreviewSection>
    </Box>
  );
}
