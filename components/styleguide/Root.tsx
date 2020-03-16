import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'

import { Footer } from './Footer'
import { Link } from './Link'
import { Nav } from './Nav'

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string
  title: string
}

export const Root: React.FC<RootProps> = ({
  className,
  children,
  description,
  title,
  ...rest
}) => (
  <div
    className={clsx('flex flex-column', className)}
    style={{ minHeight: '100vh' }}
    {...rest}
  >
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      {!!description && <meta name="description" content={description} />}
    </Head>
    <header className="bb b--silver items-center flex" role="banner">
      <Link className="fw7 pv3" href="/">
        Hello, Next.js!
      </Link>
      <Nav
        className="pl3"
        inline
        links={[
          {
            href: '/getting-started',
            name: 'Getting Started'
          },
          {
            href: '/components',
            name: 'Components'
          }
        ]}
      />
    </header>
    <main style={{ flex: 2 }}>{children}</main>
    <Footer />
  </div>
)
