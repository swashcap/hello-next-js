import Highlight, { defaultProps } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'
import React from 'react'
import clsx from 'clsx'

type ComponentProps<T> = T extends React.Component<infer U> ? U : never

export interface CodeBlockProps
  extends Omit<ComponentProps<Highlight>, 'children'> {
  children?: string
  className?: string
}

export const CodeBlock: React.FC<any> = ({
  children,
  className: cls,
  ...rest
}) => (
  <Highlight
    {...defaultProps}
    code={children ? children.trim() : ''}
    theme={{
      ...github,
      plain: {
        color: '#333',
        backgroundColor: '#f4f4f4'
      }
    }}
    {...rest}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={clsx('code lh-title pa3', className, cls)} style={style}>
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
