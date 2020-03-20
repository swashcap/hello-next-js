import React from 'react'
import clsx from 'clsx'

export type DividerProps = React.HTMLAttributes<HTMLHRElement>

export const Divider: React.FC<DividerProps> = ({ className, ...rest }) => (
  <hr className={clsx('bb bl-0 br-0 bt-0 b--silver', className)} {...rest} />
)
