import React from 'react'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProviderProps,
} from 'react-live'
import { mdx } from '@mdx-js/react'

import { Icon } from '../library/Icon'
import { prismTheme } from './prismTheme'

type ComponentProps<T> = T extends React.Component<infer U> ? U : never

export interface CodeBlockProps
  extends Omit<ComponentProps<Highlight>, 'children'> {
  children?: string
  className?: string
  live?: boolean
  preview?: boolean
  scope?: LiveProviderProps['scope']
}

export const CodeBlock: React.FC<any> = ({
  children,
  className: cls,
  language: lang,
  live,
  preview,
  scope,
  ...rest
}) => {
  const language = lang || (cls || '').replace(/language-/, '')
  const code = children?.trim() || ''
  const liveScope = {
    ...scope,
    Icon,
    mdx,
  }

  if (live) {
    return (
      <div className={clsx('ba b--light-gray', cls)} {...rest}>
        <LiveProvider
          code={code}
          language={language}
          scope={liveScope}
          theme={prismTheme}
        >
          <LivePreview className="pa3 pa4-ns" />
          <LiveError className="dark-red mv0 nt4 pa3" />
          {/* https://github.com/satya164/react-simple-code-editor#props */}
          <div className="bg-near-white pa2">
            <LiveEditor
              style={{
                fontFamily: 'Consolas, monaco, monospace',
                fontSize: '14px',
                lineHeight: 1.25,
                padding: 0,
                whiteSpace: 'pre-wrap',
              }}
            />
          </div>
        </LiveProvider>
      </div>
    )
  } else if (preview) {
    return (
      <div className={clsx('ba b--light-gray', cls)} {...rest}>
        <LiveProvider
          code={code}
          language={language}
          scope={liveScope}
          theme={prismTheme}
        >
          <LivePreview className="pa3 pa4-ns" />
          <LiveError className="dark-red mv0 nt4 pa3" />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={prismTheme}
      {...rest}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx('code f6 lh-title pa3', className, cls)}
          style={{
            ...style,
            whiteSpace: 'pre-wrap',
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
