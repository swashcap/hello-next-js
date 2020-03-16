import React from 'react'
import clsx from 'clsx'

export type HeadingVariant = '1' | '2'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariant
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  variant = '1',
  ...rest
}) => {
  const Component = variant === '1' ? 'h1' : 'h2'

  return (
    <Component
      className={clsx(
        'lh-title mb3',
        variant === '1' && 'f1 fw8 mt3',
        variant === '2' && 'f2 fw5 mt4',
        className
      )}
      {...rest}
    />
  )
}
