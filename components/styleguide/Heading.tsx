import React from 'react'
import clsx from 'clsx'
import { snakeCase } from 'lodash'

import style from './Heading.module.css'

export type HeadingVariant = '1' | '2' | '3' | '4'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariant
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  id: idProp,
  variant = '1',
  ...rest
}) => {
  const id = idProp || snakeCase(children)
  let Component

  if (variant === '2') {
    Component = 'h2'
  } else if (variant === '3') {
    Component = 'h3'
  } else if (variant === '4') {
    Component = 'h4'
  } else {
    Component = 'h1'
  }

  return (
    <Component
      className={clsx(
        style.Heading,
        'lh-title mb3 relative',
        variant === '1' && 'f1 fw8 mt3',
        variant === '2' && 'f2 fw5 mt4',
        variant === '3' && 'f3 fw5 mt4',
        variant === '4' && 'dark-gray f5 fw7 mt4 tracked ttu',
        className
      )}
      id={id}
      {...rest}
    >
      <a
        aria-label="Link to header"
        className={clsx(
          style.HeadingAnchor,
          'absolute dark-red dib f5 fw4 no-underline pv1 tc'
        )}
        href={`#${id}`}
      >
        #
      </a>
      {children}
    </Component>
  )
}
