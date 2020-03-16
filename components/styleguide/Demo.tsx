import React from 'react'
import clsx from 'clsx'
import { CodeBlock } from './CodeBlock'

export interface DemoProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string
}

export const Demo: React.FC<DemoProps> = ({ children, className, ...rest }) => (
  <div className={clsx('ba b--silver', className)} {...rest}>
    <div className="bg-white pa3"></div>
    <CodeBlock className="ma0" language="typescript">
      {children}
    </CodeBlock>
  </div>
)
