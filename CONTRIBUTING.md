## Contents

- [Contents](#contents)
- [Developing](#developing)
- [Commands](#commands)
- [Getting Bumbag set up on your machine](#getting-bumbag-set-up-on-your-machine)
- [Guide to developing a new component](#guide-to-developing-a-new-component)
  - [Bumbag library (`packages/bumbag`)](#bumbag-library-packagesbumbag)
  - [Website (`packages/website`)](#website-packageswebsite)
- [Pushing your changes and creating a pull request](#pushing-your-changes-and-creating-a-pull-request)

## Developing

Before you start developing, ensure that you have installed the package's dependencies:

```
yarn
```

After everything has installed, you can run the docs on a development server which will listen for changes made in the components:

```
yarn docs
```

## Commands

- `yarn build` - Compile the components, type definitions, and proxy packages.
- `yarn type-check` - Check that all the types are valid
- `yarn lint` - Runs the linter
- `yarn lint:fix` - Fixes lint issues
- `yarn test` - Runs type-check, linter & tests
- `yarn docs` - Runs component documentation on a local development server.
- `yarn develop` - Compile components & listen for changes (only use this for testing Bumbag consumer apps)

## Getting Bumbag set up on your machine

To get Bumbag up and running on your machine, follow these steps:

1. Fork this repository

> Click on 'Fork' in the top right hand corner.

2. Clone your newly created forked Bumbag repository onto your machine

> Run `git clone git@github.com:<your-username>/bumbag.git` (SSH) or `git clone https://github.com/<your-username>/bumbag.git` (HTTPS) in your terminal

3. Go to the `bumbag` folder and install the dependencies

> Run `yarn`

4. Now you can start developing!

> Run `yarn docs` to get the component documentation up and running.

## Guide to developing a new component

- Create a new branch for your component

  > `git checkout -b add-my-component`

The Bumbag repository is set up as [a "monorepo"]() consisting of two main packages: the **Bumbag library** (`packages/bumbag`) and the **website** (`packages/website`). When creating or updating a component, you will have to make changes in both these packages.

The list below is a guide (or checklist) to creating a new Bumbag component. You can reference this list as well as referencing existing components.

### Bumbag library (`packages/bumbag`)

- A **component folder** (e.g. `packages/bumbag/src/MyComponent/`) which consists of:
  - The component's `.tsx` file (e.g. `MyComponent.tsx`).
  - A `index.ts` file that exports the component and it's child components (if it has any).
  - A `styles.ts` file that manages the component's styling (CSS-in-JS via emotion).
  - A `__tests__` folder, consisting of the component's tests.

- The **component itself** (`MyComponent.tsx`):

  Ensure **local TypeScript prop types** are exported:

  > Local prop types consists of props which **locally** belong to the component.

  ```tsx
    export type LocalComponentProps = {
      // A required prop
      name: string;

      // An optional prop (as denoted with ?)
      foo?: boolean;
    };
    ```

  [A realistic example](https://github.com/bumbag/bumbag-ui/blob/master/packages/bumbag/src/Button/Button.tsx#L15)

  Ensure **TypeScript prop types** are exported:

  > The difference between this, and **local prop types** is that it extends the local prop types to provide HTML/style based props that can belong on the component. Generally, you want to extend the type which the component inherits (if the component inherits the `<Button>` component, then you extend off `ButtonProps` - in the "realistic example" above, `<Button>` extends off `BoxProps`).

  ```tsx
    export type ComponentProps = ButtonProps & LocalComponentProps;
  ```

  [A realistic example](https://github.com/bumbag/bumbag-ui/blob/master/packages/bumbag/src/Button/Button.tsx#L32)

  Ensure the component has a `useProps` function to get it's HTML props.

  Ensure the component is created with the `createComponent` utility.
  - and the component returns an element via `createElement`,
  - and the `useProps` hook & appropriate `defaultProps` are attached to the component,
  - and the component has a `themeKey`.

  [A realistic example](https://github.com/bumbag/bumbag-ui/blob/master/packages/bumbag/src/Button/Button.tsx#L143)


- The **component's `styles.ts`**

  > All of the component styles are kept in `styles.ts` files.

  Ensure that theme variables are used when neccessary:

  ```jsx
    padding: ${space(4)}rem;
  ```

  Ensure that the component is themeable:

  > Every component has a `root` in it's theme config. It's nice to add theme keys (e.g. `MyComponent.styles.hover`) to stuff you think would be themeable inside the styled component.

  ```tsx
    export const MyComponent = styleProps => cssClass`
      &:hover {
        ${theme('MyComponent.styles.hover')(styleProps)};
      }
      & {
        ${theme('MyComponent.styles.base')(styleProps)};
      }
    `
  ```

- The component is **tested**

  Ensure that component snapshot tests are added in the `__tests__` folder

  Here are some things you may want to test:

  - Prop variants
  - User interaction
  - Overrides
  - Theming
  - Default props (via theme)

- The component is **accessible**

  Ensure that the component is WAI-ARIA compliant.

  > A good reference is the [WAI-ARIA Authoring Practices Doc](https://www.w3.org/TR/wai-aria-practices-1.1) as well as [Using ARIA: Roles, States and Properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

  Ensure that the component is tested via the [WAVE accessibility plugin](https://wave.webaim.org/extension/)

- Component is exported in [`src/index.ts`](https://github.com/bumbag/bumbag-ui/blob/master/packages/bumbag/src/index.ts)

- Component's theme config is added to [`src/types/theme.ts`](https://github.com/bumbag/bumbag-ui/blob/master/packages/bumbag/src/types/theme.ts)

### Website (`packages/website`)

- The **component's documentation page** (e.g. `packages/website/pages/components/MyComponent.mdx`) contains:
  - Import instructions
  - Basic usage of the component
  - Variants of the component
  - Prop types
  - Theming docs

## Pushing your changes and creating a pull request

Once you are happy with your new component, create a pull request by doing the following:

1. Push all your changes to your branch

  > `git push origin add-my-component`

2. Head to the Bumbag repository, and open a pull request

  > Or enter this in your address bar: `https://github.com/bumbagui/bumbag/compare/master...<your-username>:<branch>`


