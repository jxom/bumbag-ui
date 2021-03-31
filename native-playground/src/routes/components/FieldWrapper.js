import React from 'react';
import { Box, Heading, Input, FieldWrapper, Stack } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">FieldWrapper</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <FieldWrapper label="Username">
            <Input />
          </FieldWrapper>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Descriptions">
        <Preview>
          <FieldWrapper label="Username" description="This is your username">
            <Input />
          </FieldWrapper>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Hints">
        <Preview>
          <FieldWrapper label="Username" hint="Your username must be cool">
            <Input />
          </FieldWrapper>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Optional fields">
        <Preview>
          <FieldWrapper label="Username" isOptional>
            <Input />
          </FieldWrapper>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Required fields">
        <Preview>
          <FieldWrapper label="Username" isRequired>
            <Input />
          </FieldWrapper>
        </Preview>
      </PreviewSection>
      <PreviewSection title="States">
        <Preview>
          <Stack spacing="major-2">
            <FieldWrapper label="Username" validationText="This is an invalid name" state="danger">
              <Input defaultValue="Jake" />
            </FieldWrapper>
            <FieldWrapper label="Username" validationText="Please check the box!" state="primary">
              <Input defaultValue="Jake" />
            </FieldWrapper>
            <FieldWrapper label="Username" validationText="Nice one!" state="success">
              <Input defaultValue="Jake" />
            </FieldWrapper>
          </Stack>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
