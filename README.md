# Fannypack

<p align="center"><img src="./fannypack.png" width="400px"></img></p>

> Note: Fannypack is still work in progress, meaning that it's APIs will most likely change in the future until a stable 1.0.0 release.

[Read the docs here](https://fannypack.style)

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

## Contributors

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| <img src="https://avatars.githubusercontent.com/u/7336481?v=3" width="100px;"/><br /><sub>[<b>Jake Moxey</b>](https://jxom.io)<br />💻📖👀🤔</sub>| <img src="https://avatars.githubusercontent.com/u/19571028?v=3" width="100px;"/><br /><sub>[<b>Samantha W</b>](http://shooting-unicorns.com)<br />🎨🤔</sub> | <img src="https://avatars.githubusercontent.com/u/10344370?v=3" width="100px;"/><br /><sub>[<b>Dave Olsen</b>](https://daveolsen.com.au/)<br />💻👀🤔</sub> |<img src="https://avatars.githubusercontent.com/u/8334897?v=3" width="100px;"/><br /><sub>[<b>Michael Tan</b>](https://github.com/Michaeltym)<br />💻</sub>|<img src="https://avatars.githubusercontent.com/u/1747517?v=3" width="100px;"/><br /><sub>[<b>Terence Huynh</b>](http://terencehuynh.com/)<br />💻</sub>|<img src="https://avatars.githubusercontent.com/u/41710405?v=3" width="100px;"/><br /><sub>[<b>Daniela Gattoni</b>](https://github.com/danielagattoni)<br />💻</sub>|<img src="https://avatars.githubusercontent.com/u/3068563?v=3" width="100px;"/><br /><sub>[<b>Haz</b>](https://github.com/diegohaz)<br />📖</sub>
| :---: | :---: | :---: |:---: |:---: |:---: |:---: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## Acknowledgements

Thanks [Luke Edwards](https://twitter.com/lukeed05) for handing over the `fannypack` npm name!
