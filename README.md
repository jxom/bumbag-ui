# Fannypack
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors)
[![Build Status](https://img.shields.io/travis/fannypackui/fannypack.svg?style=flat-square)](https://travis-ci.org/fannypackui/fannypack)
[![NPM](https://img.shields.io/npm/v/fannypack/latest.svg?style=flat-square)](https://www.npmjs.com/package/fannypack)

<p align="center"><img src="./fannypack.png" width="400px"></img></p>

> Note: Fannypack is still work in progress, meaning that it's APIs will most likely change in the future until a stable release.

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

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/7336481?v=4" width="100px;"/><br /><sub><b>Jake Moxey</b></sub>](https://jxom.io/)<br />[💻](https://github.com/fannypackui/fannypack/commits?author=jxom "Code") [📖](https://github.com/fannypackui/fannypack/commits?author=jxom "Documentation") [🤔](#ideas-jxom "Ideas, Planning, & Feedback") [👀](#review-jxom "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/19571028?v=4" width="100px;"/><br /><sub><b>Samantha Wong</b></sub>](https://shooting-unicorns.com)<br />[💻](https://github.com/fannypackui/fannypack/commits?author=samantha-wong "Code") [🤔](#ideas-samantha-wong "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/10344370?v=4" width="100px;"/><br /><sub><b>Dave Olsen</b></sub>](http://daveolsen.com.au)<br />[💻](https://github.com/fannypackui/fannypack/commits?author=daveols "Code") [🤔](#ideas-daveols "Ideas, Planning, & Feedback") [👀](#review-daveols "Reviewed Pull Requests") | [<img src="https://avatars1.githubusercontent.com/u/8334897?v=4" width="100px;"/><br /><sub><b>Yiming Tan(Michael)</b></sub>](https://github.com/Michaeltym)<br />[💻](https://github.com/fannypackui/fannypack/commits?author=Michaeltym "Code") | [<img src="https://avatars1.githubusercontent.com/u/1747517?v=4" width="100px;"/><br /><sub><b>Terence Huynh</b></sub>](http://terencehuynh.com)<br />[💻](https://github.com/fannypackui/fannypack/commits?author=terencehuynh "Code") | [<img src="https://avatars2.githubusercontent.com/u/41710405?v=4" width="100px;"/><br /><sub><b>Daniela Gattoni</b></sub>](https://github.com/danielagattoni)<br />[💻](https://github.com/fannypackui/fannypack/commits?author=danielagattoni "Code") | [<img src="https://avatars3.githubusercontent.com/u/3068563?v=4" width="100px;"/><br /><sub><b>Haz</b></sub>](https://twitter.com/diegohaz)<br />[📖](https://github.com/fannypackui/fannypack/commits?author=diegohaz "Documentation") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/309754?v=4" width="100px;"/><br /><sub><b>Wez Pyke</b></sub>](http://twitter.com/wezpyke)<br />[💻](https://github.com/fannypackui/fannypack/commits?author=wezpyke "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Acknowledgements

Thanks [Luke Edwards](https://twitter.com/lukeed05) for handing over the `fannypack` npm name!
