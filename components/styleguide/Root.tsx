import Head from 'next/head'
import React from 'react'
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

const assetPrefix = (process.env.assetPrefix || '').replace(/\/$/, '')

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
        <link rel="icon" href={`${assetPrefix}/favicon.ico`} />
        <title>{title}</title>
        {!!description && <meta name="description" content={description} />}
      </Head>
      <header
        className="bb b--silver pb3 pb0-m pb0-l items-center"
        role="banner"
      >
        <Grid className="items-center">
          <Grid.Column className="w-100 w-70-l">
            <Link className="fw7 pv3" href="/">
              Hello, Next.js!
            </Link>
            <Nav
              className="inline-flex pl3"
              inline
              links={[
                {
                  href: `${assetPrefix}/components/`,
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
                      href: `${assetPrefix}/components/`,
                      name: 'Getting Started'
                    }
                  ]}
                />
                <Divider className="mv2" />
                <Nav
                  className="mv2"
                  links={[
                    {
                      href: `${assetPrefix}/components/Alert/`,
                      name: 'Alert'
                    },
                    {
                      href: `${assetPrefix}/components/Breadcrumb/`,
                      name: 'Breadcrumb'
                    },
                    {
                      href: `${assetPrefix}/components/Button/`,
                      name: 'Button'
                    },
                    {
                      href: `${assetPrefix}/components/Card/`,
                      name: 'Card'
                    },
                    {
                      href: `${assetPrefix}/components/Icon/`,
                      name: 'Icon'
                    }
                  ]}
                />
                <Divider className="mv2" />
                <Nav
                  className="mv2"
                  links={[
                    {
                      href: `${assetPrefix}/components/utilities/`,
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
