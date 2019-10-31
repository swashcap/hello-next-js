import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import '../node_modules/tachyons/css/tachyons.css'
import { Nav } from './Nav'

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string
  title: string
}

export const Root: React.FC<RootProps> = ({
  children,
  description,
  title,
  ...rest
}) => (
  <div {...rest}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      {!!description && <meta name="description" content={description} />}
    </Head>
    <header className="bb b--silver items-center flex" role="banner">
      <h1 className="f5 fw4 mv0 pr3 pv3">Hello, Next.js!</h1>
      <Nav />
    </header>
    <main>{children}</main>
  </div>
)
