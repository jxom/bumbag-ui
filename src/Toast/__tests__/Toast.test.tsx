import * as React from 'react';
import render from '../../_utils/tests/render';
import Toast from '../Toast';

it('renders correctly for a basic Toast', () => {
  const { container } = render(
    <Toast>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
      keffiyeh helvetica.
    </Toast>
  );
  expect(container.firstChild).toMatchSnapshot();
});

['info', 'success', 'danger', 'warning'].forEach(type => {
  it(`renders correctly for a toast of type ${type}`, () => {
    const { container } = render(
      <Toast type={type}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica.
      </Toast>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

it('renders correctly for a Toast with a title', () => {
  const { container } = render(
    <Toast title="This is a title">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
      keffiyeh helvetica.
    </Toast>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a Toast with no close button', () => {
  const { container } = render(
    <Toast hideCloseButton>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
      keffiyeh helvetica.
    </Toast>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a Toast with a horizontal bar', () => {
  const { container } = render(
    <Toast hasHorizontalBar>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
      keffiyeh helvetica.
    </Toast>
  );
  expect(container.firstChild).toMatchSnapshot();
});

['info', 'success', 'danger', 'warning'].forEach(type => {
  it(`renders correctly for a tinted toast of type ${type}`, () => {
    const { container } = render(
      <Toast hasTint type={type}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica.
      </Toast>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
