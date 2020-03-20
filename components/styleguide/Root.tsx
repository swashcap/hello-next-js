import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { Divider } from './Divider'
import { Footer } from './Footer'
import { FullPageLayout } from './layouts/FullPageLayout'
import { Link } from './Link'
import { Nav } from './Nav'
import { SearchForm } from './SearchForm'
import { SidebarLayout } from './layouts/SidebarLayout'
import { VisuallyHidden } from '../library/VisuallyHidden'
import { Grid } from './Grid'

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
}) => {
  const { pathname } = useRouter()

  return (
    <div
      className={clsx('flex flex-column', className)}
      style={{ minHeight: '100vh' }}
      {...rest}
    >
      <VisuallyHidden as="a" focusable href="#content">
        Skip to content
      </VisuallyHidden>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        {!!description && <meta name="description" content={description} />}
      </Head>
      <header className="bb b--silver items-center" role="banner">
        <Grid className="flex-wrap items-center">
          <Grid.Column className="w-100 w-70-l">
            <Link className="fw7 pv3" href="/">
              Hello, Next.js!
            </Link>
            <Nav
              className="inline-flex pl3"
              inline
              links={[
                {
                  href: '/components/',
                  name: 'Components'
                }
              ]}
            />
          </Grid.Column>
          <Grid.Column className="w-100 w-30-l">
            <SearchForm
              onSubmit={event => {
                event.preventDefault()
              }}
            />
          </Grid.Column>
        </Grid>
      </header>
      <main style={{ flex: 2 }}>
        {pathname.includes('components') ? (
          <SidebarLayout
            sidebar={
              <>
                <Nav
                  className="mb2 mt3"
                  links={[
                    {
                      href: '/components/',
                      name: 'Getting Started'
                    }
                  ]}
                />
                <Divider className="mv2" />
                <Nav
                  className="mv2"
                  links={[
                    {
                      href: '/components/Alert/',
                      name: 'Alert'
                    },
                    {
                      href: '/components/Breadcrumb/',
                      name: 'Breadcrumb'
                    },
                    {
                      href: '/components/Button/',
                      name: 'Button'
                    },
                    {
                      href: '/components/Card/',
                      name: 'Card'
                    }
                  ]}
                />
                <Divider className="mv2" />
                <Nav
                  className="mv2"
                  links={[
                    {
                      href: '/components/utilities/',
                      name: 'Utilities'
                    }
                  ]}
                />
              </>
            }
          >
            <article className="mb4 mt3" id="content">
              {children}
            </article>
          </SidebarLayout>
        ) : (
          <FullPageLayout id="content">{children}</FullPageLayout>
        )}
      </main>
      <Footer />
    </div>
  )
}
