import React from 'react'

import { Link } from './Link'
import clsx from 'clsx'

export interface NavProps extends React.HTMLProps<HTMLElement> {
  inline?: boolean
  links: {
    href: string
    name: string
  }[]
}

export const Nav: React.FC<NavProps> = ({ inline, links, ...rest }) => (
  <nav {...rest}>
    <ul className={clsx('list ma0 pa0', inline ? 'flex' : 'nl2 nr2')}>
      {links.map(({ href, name }) => (
        <li key={href}>
          <Link className={inline ? 'dib ph2 pv3' : 'db ph2 pv1'} href={href}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
