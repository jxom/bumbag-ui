## Contents

- [Developing](#developing)
- [Commands](#commands)
- [Getting Fannypack set up on your machine](#getting-fannypack-set-up-on-your-machine)
- [Guide to developing a new component](#guide-to-developing-a-new-component)
  - [Fannypack library (`packages/fannypack`)](#fannypack-library-packagesfannypack)
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
- `yarn develop` - Compile components & listen for changes (only use this for testing Fannypack consumer apps)

## Getting Fannypack set up on your machine

To get Fannypack up and running on your machine, follow these steps:

1. Fork this repository

> Click on 'Fork' in the top right hand corner.

2. Clone your newly created forked Fannypack repository onto your machine

> Run `git clone git@github.com:<your-username>/fannypack.git` (SSH) or `git clone https://github.com/<your-username>/fannypack.git` (HTTPS) in your terminal

3. Go to the `fannypack` folder and install the dependencies

> Run `yarn`

4. Now you can start developing!

> Run `yarn docs` to get the component documentation up and running.

## Guide to developing a new component

- Create a new branch for your component

  > `git checkout -b add-my-compoenent`

The Fannypack repository is set up as [a "monorepo"]() consisting of two main packages: the **Fannypack library** (`packages/fannypack`) and the **website** (`packages/website`). When creating or updating a component, you will have to make changes in both these packages.

The list below is a guide (or checklist) to creating a new Fannypack component. You can reference this list as well as referencing existing components.

### Fannypack library (`packages/fannypack`)

- A **component folder** (e.g. `packages/fannypack/src/MyComponent/`) which consists of:
  - The component's `.tsx` file (e.g. `MyComponent.tsx`).
  - A `index.ts` file that exports the component and it's child components (if it has any).
  - A `styled.ts` file that manages the component's styling (CSS-in-JS via styled-components).
  - The components documentation (e.g. `MyComponent.mdx`).
  - A `__tests__` folder, consisting of the component's tests.

- The **component itself** (`MyComponent.tsx`):

  Ensure **local TypeScript prop types** are exported:

  > Local prop types consists of props which **locally** belong to the component.

  ```tsx
    export type LocalComponentProps = {
      children: React.ReactNode;
      name?: string
    };
    ```

  [A realistic example](https://github.com/fannypackui/fannypack/blob/master/packages/fannypack/src/Alert/Alert.tsx#L30)

  Ensure **Typescript prop types** are exported:

  > The difference between this, and **local prop types** is that it extends the local prop types to provide HTML/style based props that can belong on the component. Generally, you want to extend the type which the component inherits (if the component inherits the `<Button>` component, then you extend off `ButtonProps` - in the example above, `<Alert>` extends off `BoxProps`).

  ```tsx
    export type ComponentProps = ButtonProps & LocalComponentProps;
  ```

  [A realistic example](https://github.com/fannypackui/fannypack/blob/master/packages/fannypack/src/Alert/Alert.tsx#L41)

  Ensure that the **local prop types** are attached to the component

  ```tsx
    export const MyComponent: React.FunctionComponent<LocalComponentProps> = ({
  ```

  [A realistic example](https://github.com/fannypackui/fannypack/blob/master/packages/fannypack/src/Alert/Alert.tsx#L55)

  Ensure that your component has **prop types**:

  > There are identical to the **local TypeScript prop types**

  ```tsx
    MyComponent.propTypes = {
      children: PropTypes.node.isRequired,
      name: PropTypes.string
    }
  ```

  Ensure that your component has **default props**:

  ```tsx
    MyComponent.defaultProps = {
      name: 'Jake'
    }
  ```

  Ensure that the component is retyped to it's prop types when you `export default`:

  ```
    const C: React.FunctionComponent<ComponentProps> = MyComponent;
    export default C;
  ```

- The **component's `styled.ts`**

  > All of the component styles are kept in `styled.ts` files.

  Ensure that theme variables are used when neccessary:

  ```jsx
    padding: ${space(4)}rem;
  ```

  Ensure that the styled components are typed:

  > Generally, use the **local prop types** of the component, but you may need to add extra types if neccessary.

  ```tsx
    const MyComponent = styled(LocalComponentProps)`
  ```

  Ensure that the component is themeable:

  > Every component has a `base` in it's theme config. It's nice to add theme keys (e.g. `MyComponent.hover`) to stuff you think would be themeable inside the styled component.

  ```tsx
    const MyComponent = styled(LocalComponentProps)`
      &:hover {
        ${theme('fannypack.MyComponent.hover')};
      }
      & {
        ${theme('fannypack.MyComponent.base')};
      }
    `
  ```

- The component is **tested**

  Ensure that component snapshot tests are added in the `__tests__` folder

  Typically test **prop variants** as well as **user interaction & events**.

- The component is **accessible**

  Ensure that the component is WAI-ARIA compliant.

  > A good reference is the [WAI-ARIA Authoring Practices Doc](https://www.w3.org/TR/wai-aria-practices-1.1) as well as [Using ARIA: Roles, States and Properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

  Ensure that the component is tested via the [WAVE accessibility plugin](https://wave.webaim.org/extension/)

- Component is exported in [`src/index.js`](https://github.com/fannypackui/fannypack/blob/master/packages/fannypack/src/index.ts)

- Component's theme config is added to [`src/types/theme.ts`](https://github.com/fannypackui/fannypack/blob/master/packages/fannypack/src/types/theme.ts)

### Website (`packages/website`)

- The **component's documentation page** (e.g. `packages/website/pages/components/MyComponent.mdx`) contains:
  - Import instructions
  - Basic usage of the component
  - Variants of the component
  - Props table
  - Theming docs
- Add your component page to `utils/routes.js`
- Add your component to `utils/components.js` (or make sure it's ticked off as "complete")

## Pushing your changes and creating a pull request

Once you are happy with your new component, create a pull request by doing the following:

1. Push all your changes to your branch

  > `git push origin add-my-component`

2. Head to the Fannypack repository, and open a pull request

  > Or enter this in your address bar: `https://github.com/fannypackui/fannypack/compare/master...<your-username>:<branch>`


