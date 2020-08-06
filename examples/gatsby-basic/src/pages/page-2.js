import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { PageContent, Link, Heading, Paragraph } from 'bumbag'

import SEO from '../components/SEO'

const SecondPage = () => (
  <PageContent>
    <SEO title="Page two" />
    <Heading>Hi from the second page</Heading>
    <Paragraph>Welcome to page 2</Paragraph>
    <Link use={GatsbyLink} to="/">
      Go back to the homepage
    </Link>
  </PageContent>
)

export default SecondPage
