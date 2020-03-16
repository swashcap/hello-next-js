import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import clsx from 'clsx'

export interface LinkProps
  extends NextLinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  underline?: boolean
}

export const Link: React.FC<LinkProps> = ({
  className,
  href,
  underline,
  ...rest
}) => {
  const props = {
    className: clsx(
      'black dim',
      underline ? 'underline' : 'no-underline',
      className
    ),
    ...rest
  }

  return (
    <NextLink href={href}>
      <a {...props} />
    </NextLink>
  )
}
