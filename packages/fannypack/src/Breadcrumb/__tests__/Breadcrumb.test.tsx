import * as React from 'react';
import render from '../../_utils/tests/render';
import Breadcrumb from '../Breadcrumb';

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Step>Home</Breadcrumb.Step>
        <Breadcrumb.Step>Breadcrumb</Breadcrumb.Step>
        <Breadcrumb.Step isCurrent>Basic Usage</Breadcrumb.Step>
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('with custom separationColor', () => {
    it('renders correctly', () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Step>Home</Breadcrumb.Step>
          <Breadcrumb.Step>Breadcrumb</Breadcrumb.Step>
          <Breadcrumb.Step isCurrent>Basic Usage</Breadcrumb.Step>
        </Breadcrumb>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with link', () => {
    it('renders correctly', () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Step href="/home">Home</Breadcrumb.Step>
          <Breadcrumb.Step href="/breadcrumb">Breadcrumb</Breadcrumb.Step>
          <Breadcrumb.Step href="/usage" isCurrent>
            Basic Usage
          </Breadcrumb.Step>
        </Breadcrumb>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
