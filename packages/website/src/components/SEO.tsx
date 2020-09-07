import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = (props: any) => {
  const { pathname } = useLocation();
  const seo = {
    title: props.title || 'Bumbag',
    titleTemplate: pathname === '/' ? `%s` : '%s | Bumbag',
    description: 'Rapidly build accessible & themeable React applications with ease',
    image: '/social.png',
    url: 'https://bumbag.style',
  };
  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <link rel="icon" type="image/png" href="/icon.png" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:creator" content="@jxom" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
