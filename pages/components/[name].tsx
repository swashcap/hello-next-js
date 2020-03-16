import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ComponentDoc } from 'react-docgen-typescript'

import { CodeBlock } from '../../components/styleguide/CodeBlock'
import { Empty } from '../../components/styleguide/Empty'
import { Heading } from '../../components/styleguide/Heading'
import { Nav } from '../../components/styleguide/Nav'
import { PropsTable } from '../../components/styleguide/PropsTable'
import { getComponentDoc } from '../../utils/getComponentDoc'
import {
  getLibraryComponentPaths,
  getLibraryComponentLinks
} from '../../utils/getLibraryComponents'
import { Demo } from '../../components/styleguide/Demo'

export interface ComponentPageProps {
  doc: ComponentDoc
  links: {
    href: string
    name: string
  }[]
}

export default ({ doc, links }: ComponentPageProps) => (
  <div className="flex nl3 nr3">
    <div className="ph3 w-100 w-20-m w-20-l">
      <Nav className="mv3" links={links} />
    </div>
    <div className="ph3 w-100 w-80-m w-80-l">
      <Heading>{doc.displayName}</Heading>
      {!!doc.description && doc.description}
      <CodeBlock language="typescript">
        {`import {${doc?.displayName}} from 'hello-next-js';`}
      </CodeBlock>
      <Heading id="demo" variant="2">
        Demo
      </Heading>
      <Demo />
      <Heading id="props" variant="2">
        Props
      </Heading>
      {Object.keys(doc.props).length ? (
        <PropsTable props={doc.props} />
      ) : (
        <Empty className="mv3">No props</Empty>
      )}
      <Heading id="methods" variant="2">
        Methods
      </Heading>
      {doc.methods.length ? (
        'methods'
      ) : (
        <Empty className="mv3">No methods</Empty>
      )}
    </div>
  </div>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getLibraryComponentPaths()

  return {
    fallback: false,
    paths: paths.map(name => ({
      params: { name }
    }))
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (Array.isArray(params.name)) {
    throw new Error(
      `Invalid name: ${params.name.toString()}. Expected a string.`
    )
  }

  const props: ComponentPageProps = {
    doc: await getComponentDoc(params.name),
    links: await getLibraryComponentLinks()
  }

  return { props }
}
