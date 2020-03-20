import React from 'react'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProviderProps
} from 'react-live'
import { mdx } from '@mdx-js/react'

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

  if (live) {
    return (
      <div className={clsx('ba b--silver', cls)} {...rest}>
        <LiveProvider
          code={code}
          language={language}
          scope={{
            ...scope,
            mdx
          }}
          theme={prismTheme}
        >
          <LivePreview className="pa3 pa4-ns" />
          <LiveError className="dark-red mv0 nt4 pa3" />
          {/* https://github.com/satya164/react-simple-code-editor#props */}
          <div className="bg-near-white pa2">
            <LiveEditor
              style={{
                fontFamily: 'Consolas, monaco, monospace',
                fontSize: '16px',
                lineHeight: '20px',
                padding: 0
              }}
            />
          </div>
        </LiveProvider>
      </div>
    )
  } else if (preview) {
    return (
      <div className={clsx('ba b--silver', cls)} {...rest}>
        <LiveProvider
          code={code}
          language={language}
          noInline
          scope={{
            mdx
          }}
          theme={prismTheme}
        >
          <LivePreview />
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
          className={clsx('code lh-title pa3', className, cls)}
          style={style}
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
