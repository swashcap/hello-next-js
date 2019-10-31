import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import '../node_modules/tachyons/css/tachyons.css'

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
    {children}
  </div>
)
