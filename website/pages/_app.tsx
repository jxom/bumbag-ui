import 'bumbag-native/utils/resetWindow';
import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { Provider as BumbagProvider, Box, ToastManager } from 'bumbag';
import { Provider as NativeProvider, Box as NativeBox } from 'bumbag-native';
import _merge from 'lodash/merge';
import _omit from 'lodash/omit';

import defaultTheme from '../theme';
import { themeMap } from '../utils/themeMap';

function App({ Component, pageProps }: any) {
  const getLayout = (Component as any).getLayout || ((page) => page);

  ////////////////////////////////////////////////////////////

  const router = useRouter();
  const theme = React.useMemo(() => {
    const { theme: themeKey } = router.query;
    // @ts-ignore
    const targetTheme = themeMap[themeKey] || {};
    return _merge(defaultTheme, _omit(targetTheme, 'SideNav', 'PageWithSidebar'));
  }, [router.query]);

  ////////////////////////////////////////////////////////////

  const title = `${Component.title ? `${Component.title}` : ''}${
    Component.title ? '' : 'Bumbag – Themeable components for React & React Native'
  }`;
  const description = Component.description || 'Rapidly build accessible & themeable React applications with ease';

  ////////////////////////////////////////////////////////////

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Looptrack</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo
        title={title}
        titleTemplate={'%s — Bumbag'}
        description={description}
        openGraph={{
          url: 'https://bumbag.style',
          site_name: 'Bumbag',
          title: title.replace('Bumbag – ', ''),
          type: 'website',
          description,
          images: [
            {
              url: '/social.png',
            },
          ],
        }}
        twitter={{
          handle: '@jxom',
          site: '@jxom',
          cardType: 'summary_large_image',
        }}
      />
      <BumbagProvider isSSR theme={theme as any}>
        <NativeProvider theme={theme as any}>
          {getLayout(<Component {...pageProps} />)}
          <ToastManager isStacked={false} />
        </NativeProvider>
      </BumbagProvider>
    </>
  );
}

export default App;
