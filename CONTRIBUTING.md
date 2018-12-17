## Developing

Before you start developing, ensure that you have installed the package's dependencies:

```
yarn
```

After everything has installed, you can run the docs on a development server which will listen for changes made in the components:

```
yarn docs
```

## Guide to developing a new component

The list below is a guide (or checklist) to creating a new Fannypack component. You can reference this list as well as referencing existing components.

- A **component folder** (e.g. `MyComponent/`) which consists of:
  - The component's `.tsx` file (e.g. `MyComponent.tsx`).
  - A `index.ts` file that exports the component and it's child components (if it has any).
  - A `styled.ts` file that manages the component's styling (CSS-in-JS via styled-components).
  - The components documentation (e.g. `MyComponent.mdx`).
  - A `__tests__` folder, consisting of the component's tests.

- The **component's documentation** (`MyComponent.mdx`) contains:
  - Import instructions
  - Basic usage of the component
  - Variants of the component
  - Props table
  - Theming docs
  
- The **component itself** (`MyComponent.tsx`):

  Ensure **local TypeScript prop types** are exported:
  
  > Local prop types consists of props which **locally** belong to the component.
  
  ```tsx
    export type LocalComponentProps = {
      children: React.ReactNode;
      name?: string
    };
    ```
    
  [A realistic example](https://github.com/fannypackui/fannypack/blob/master/src/Alert/Alert.tsx#L28)
    
  Ensure **Typescript prop types** are exported:
  
  > The difference between this, and **local prop types** is that it extends the local prop types to provide HTML/style based props that can belong on the component. Generally, you want to extend the type which the component inherits (if the component inherits the `<Button>` component, then you extend off `ButtonProps` - in the example above, `<Alert>` extends off `BoxProps`).
  
  ```tsx
    export type ComponentProps = ButtonProps & LocalComponentProps;
  ```
  
  [A realistic example](https://github.com/fannypackui/fannypack/blob/master/src/Alert/Alert.tsx#L39)
  
  Ensure that the **local prop types** are attached to the component
  
  ```tsx
    export const MyComponent: React.FunctionComponent<LocalComponentProps> = ({
  ```
  
  [A realistic example](https://github.com/fannypackui/fannypack/blob/master/src/Alert/Alert.tsx#L53)
  
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
    padding: ${theme('fannypack.layout.spacing.xsmall')}rem;
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

- Component is exported in [`src/index.js`](https://github.com/fannypackui/fannypack/blob/master/src/index.ts)

- Component's theme config is added to [`src/types/theme.ts`](https://github.com/fannypackui/fannypack/blob/master/src/types/theme.ts)
  

## Testing

To run the tests for the components:

```
yarn test
```
