import React from 'react'
import { GetStaticProps } from 'next'

import { Heading } from '../../components/styleguide/Heading'
import { Nav } from '../../components/styleguide/Nav'
import { getLibraryComponentLinks } from '../../utils/getLibraryComponents'

export interface ComponentsPageProps {
  links: {
    href: string
    name: string
  }[]
}

export default ({ links }) => (
  <div className="flex nl3 nr3">
    <div className="ph3 w-100 w-20-m w-20-l">
      <Nav className="mv3" links={links} />
    </div>
    <div className="ph3 w-100 w-80-m w-80-l">
      <Heading>Components</Heading>
      <p className="mv3">Please enjoy this selection of reusable components.</p>
    </div>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const props: ComponentsPageProps = {
    links: await getLibraryComponentLinks()
  }

  return { props }
}
