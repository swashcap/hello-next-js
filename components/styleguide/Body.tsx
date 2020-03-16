import React from 'react'
import clsx from 'clsx'

export type BodyProps = React.HTMLAttributes<HTMLParagraphElement>

export const Body: React.FC<BodyProps> = ({ className, ...rest }) => (
  <p className={clsx('mv3', className)} {...rest} />
)
