# Bumbag

## Installing Bumbag

Run the following command to install **Bumbag**:

```curl
yarn bumbag
```

## Getting set up

To start using the components, please follow these steps:

1. Wrap your application in a `<ThemeProvider>` which is provided by **Bumbag**:

```jsx
import { ThemeProvider } from 'bumbag';

const App = () => (
  <ThemeProvider>
    // ... your app
  </ThemeProvider>
);
```

2. Now you can start using components like so!:

```jsx
import { Button } from 'bumbag';

const MyApp = () => (
  <Button>
    Hello world!
  </Button>
);
```

## Developing

Before you start developing, ensure that you have installed the package's dependencies:

```
yarn
```

After everything has installed, you can run the docs on a development server which will listen for changes made in the components:

```
yarn docs
```

## Testing

To run the tests for the components:

```
yarn test
```

## Building

### Documentation

To build the documentation, simply run:

```
yarn build-docs
```

### Components

To build the components for a production environment, run:

```
yarn build
```
