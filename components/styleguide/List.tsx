import React from 'react'
import clsx from 'clsx'

export type ListElement = 'ol' | 'ul'

type GetHTMLAttributes<T> = T extends React.DetailedHTMLProps<infer U, any>
  ? U
  : never

export type ListProps<T extends ListElement> = GetHTMLAttributes<
  JSX.IntrinsicElements[T]
> & {
  as?: T
}

export const List = <T extends ListElement = 'ul'>({
  as: asProp,
  className,
  ...rest
}: ListProps<T>) => {
  const Component = asProp || 'ul'

  return <Component className={clsx('mv3 pl3', className)} {...rest} />
}
