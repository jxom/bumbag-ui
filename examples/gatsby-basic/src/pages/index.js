import React from 'react'
import { Box, Link, PageContent, Heading, Paragraph } from 'bumbag'
import { Link as GatsbyLink } from 'gatsby'

import SEO from '../components/SEO'
import Image from '../components/Image'

export default function Index() {
  return (
    <PageContent>
      <SEO title="Home" />
      <Heading>Bumbag's Basic Gatsby Example</Heading>
      <Paragraph>Welcome to your new Bumbag Gatsby site.</Paragraph>
      <Paragraph>Now go build something great with your Bumbag!</Paragraph>
      <Box maxWidth="300px">
        <Image />
      </Box>
      <Link use={GatsbyLink} to="/page-2/">
        Go to page 2
      </Link>
      <br />
      <Link use={GatsbyLink} to="/using-typescript/">
        Go to "Using TypeScript"
      </Link>
    </PageContent>
  )
}
