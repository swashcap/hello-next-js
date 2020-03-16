import React from 'react'
import clsx from 'clsx'
import { Body } from './Body'

export type EmptyProps = React.HTMLAttributes<HTMLDivElement>

export const Empty: React.FC<EmptyProps> = ({
  className,
  children,
  ...rest
}) => (
  <div className={clsx('bg-near-white pa3 tc', className)} {...rest}>
    <Body style={{ margin: 0 }}>{children}</Body>
  </div>
)
