import React from 'react'
import clsx from 'clsx'

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean
}

export const Code: React.FC<CodeProps> = ({ className, inline, ...rest }) => (
  <code
    className={clsx(
      'code f6 lh-title',
      inline && 'bg-near-white br1 pa1',
      className
    )}
    {...rest}
  />
)
