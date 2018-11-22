import React from 'react';
import render from '../../_utils/tests/render';
import Tabs from '../Tabs';
import 'jest-styled-components';

it('renders correctly for basic tabs', () => {
  const { container } = render(
    <Tabs.Container>
      {tabs => (
        <Tabs>
          <Tabs.Tab tab="dogs" {...tabs}>
            Dogs
          </Tabs.Tab>
          <Tabs.Tab tab="cats" {...tabs}>
            Cats
          </Tabs.Tab>
          <Tabs.Tab tab="parrots" {...tabs}>
            Parrots
          </Tabs.Tab>
        </Tabs>
      )}
    </Tabs.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an active tab', () => {
  const { container } = render(
    <Tabs.Container>
      {tabs => (
        <Tabs>
          <Tabs.Tab tab="dogs" isActive {...tabs}>
            Dogs
          </Tabs.Tab>
          <Tabs.Tab tab="cats" {...tabs}>
            Cats
          </Tabs.Tab>
          <Tabs.Tab tab="parrots" {...tabs}>
            Parrots
          </Tabs.Tab>
        </Tabs>
      )}
    </Tabs.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for tabs with content', () => {
  const { container } = render(
    <Tabs.Container>
      {tabs => (
        <div>
          <Tabs>
            <Tabs.Tab tab="dogs" {...tabs}>
              Dogs
            </Tabs.Tab>
            <Tabs.Tab tab="cats" {...tabs}>
              Cats
            </Tabs.Tab>
          </Tabs>
          <Tabs.Panel tab="dogs" padding="small" {...tabs}>
            Dogs are awesome
          </Tabs.Panel>
          <Tabs.Panel tab="cats" padding="small" {...tabs}>
            Cats are meh
          </Tabs.Panel>
        </div>
      )}
    </Tabs.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for fitted tabs', () => {
  const { container } = render(
    <Tabs.Container>
      {tabs => (
        <div>
          <Tabs isFitted>
            <Tabs.Tab tab="dogs" {...tabs}>
              Dogs
            </Tabs.Tab>
            <Tabs.Tab tab="cats" {...tabs}>
              Cats
            </Tabs.Tab>
          </Tabs>
        </div>
      )}
    </Tabs.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for center aligned tabs', () => {
  const { container } = render(
    <Tabs.Container>
      {tabs => (
        <div>
          <Tabs align="center">
            <Tabs.Tab tab="dogs" {...tabs}>
              Dogs
            </Tabs.Tab>
            <Tabs.Tab tab="cats" {...tabs}>
              Cats
            </Tabs.Tab>
          </Tabs>
        </div>
      )}
    </Tabs.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for right aligned tabs', () => {
  const { container } = render(
    <Tabs.Container>
      {tabs => (
        <div>
          <Tabs align="right">
            <Tabs.Tab tab="dogs" {...tabs}>
              Dogs
            </Tabs.Tab>
            <Tabs.Tab tab="cats" {...tabs}>
              Cats
            </Tabs.Tab>
          </Tabs>
        </div>
      )}
    </Tabs.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for boxed tabs', () => {
  const { container } = render(
    <Tabs.Container>
      {tabs => (
        <div>
          <Tabs type="boxed">
            <Tabs.Tab tab="dogs" {...tabs}>
              Dogs
            </Tabs.Tab>
            <Tabs.Tab tab="cats" {...tabs}>
              Cats
            </Tabs.Tab>
          </Tabs>
        </div>
      )}
    </Tabs.Container>
  );
  expect(container.firstChild).toMatchSnapshot();
});
