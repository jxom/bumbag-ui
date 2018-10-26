# Fannypack

<p align="center"><img src="./fannypack.png" width="400px"></img></p>

> Note: Fannypack is still work in progress, meaning that it's APIs will most likely change in the future until a stable 1.0.0 release.

[Read the docs: https://fannypack.style](https://fannypack.style)

## Installing Fannypack

Run the following command to install **Fannypack**:

```curl
yarn add fannypack
```

## Getting set up

To start using the components, please follow these steps:

1. Wrap your application in a `<ThemeProvider>` which is provided by **Fannypack**:

```jsx
import { ThemeProvider } from 'fannypack';

const App = () => (
  <ThemeProvider>
    // ... your app
  </ThemeProvider>
);
```

2. Now you can start using components like so!:

```jsx
import { Button } from 'fannypack';

const MyApp = () => (
  <Button>
    Hello world!
  </Button>
);
```

## Acknowledgements

Thanks [Luke Edwards](https://twitter.com/lukeed05) for handing over the `fannypack` npm name!
