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
