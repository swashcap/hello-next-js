import React from 'react'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

import '../node_modules/tachyons/css/tachyons.css'
import '../components/library/Global.css'

import { Body } from '../components/styleguide/Body'
import { CodeBlock } from '../components/styleguide/CodeBlock'
import { Heading } from '../components/styleguide/Heading'
import { Root } from '../components/styleguide/Root'
import { Link } from '../components/styleguide/Link'

const components = {
  a: props => <Link underline {...props} />,
  h1: props => <Heading {...props} />,
  h2: props => <Heading variant="2" {...props} />,
  h3: props => <Heading variant="3" {...props} />,
  h4: props => <Heading variant="4" {...props} />,
  p: props => <Body {...props} />,
  pre: props => <div {...props} />,
  code: ({
    children,
    className,
    ...rest
  }: React.HTMLAttributes<HTMLElement>) => {
    const language = className.replace(/language-/, '')

    return (
      <CodeBlock className="mv3" language={language} {...rest}>
        {children}
      </CodeBlock>
    )
  }
}

export default ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={components}>
      <Root title="Hello, Next.js!">
        <Component {...pageProps} />
      </Root>
    </MDXProvider>
  )
}
