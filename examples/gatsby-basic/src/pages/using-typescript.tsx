// If you don't want to use TypeScript you can delete this file!
import React from 'react'
import { PageProps, Link as GatsbyLink, graphql } from 'gatsby'
import { PageContent, Code, Heading, Link, Paragraph } from 'bumbag'

import SEO from '../components/SEO'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <PageContent>
    <SEO title="Using TypeScript" />
    <Heading>Gatsby supports TypeScript by default!</Heading>
    <Paragraph>
      This means that you can create and write <Code>.ts/.tsx</Code> files for your pages, components etc. Please note
      that the <Code>gatsby-*.js</Code> files (like gatsby-node.js) currently don't support TypeScript yet.
    </Paragraph>
    <Paragraph>
      For type checking you'll want to install <Code>typescript</Code> via npm and run <Code>tsc --init</Code> to create
      a <Code>.tsconfig</Code> file.
    </Paragraph>
    <Paragraph>
      You're currently on the page "{path}" which was built on {data.site.buildTime}.
    </Paragraph>
    <Paragraph>
      To learn more, head over to our{' '}
      <Link href="https://www.gatsbyjs.org/docs/typescript/">documentation about TypeScript</Link>.
    </Paragraph>
    <Link>
      {linkProps => (
        <GatsbyLink to="/" {...linkProps}>
          Go back to homepage
        </GatsbyLink>
      )}
    </Link>
  </PageContent>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
