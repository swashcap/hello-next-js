import React from 'react'
import clsx from 'clsx'

import styles from './VisuallyHidden.module.css'

export type VisuallyHiddenElement = 'a' | 'span'

type GetHTMLAttributes<T> = T extends React.DetailedHTMLProps<infer U, any>
  ? U
  : never

export type VisuallyHiddenProps<
  T extends VisuallyHiddenElement
> = GetHTMLAttributes<JSX.IntrinsicElements[T]> & {
  as?: T
  focusable?: boolean
}

/**
 * VisuallyHidden.
 *
 * Make content accessible to screen readers only.
 */
export const VisuallyHidden = <T extends VisuallyHiddenElement = 'span'>({
  as: asProp,
  className,
  focusable,
  ...rest
}: VisuallyHiddenProps<T>) => {
  const Component = asProp || 'span'

  return (
    <Component
      className={clsx(
        styles.VisuallyHidden,
        'bg-black bn dib pa1 tc white',
        focusable && styles['VisuallyHidden--focusable'],
        className
      )}
      {...rest}
    />
  )
}
