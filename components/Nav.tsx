import React from 'react'

export type NavProps = React.HTMLProps<HTMLDivElement>

export const Nav: React.FC<NavProps> = props => (
  <nav {...props}>
    <ul className="flex list ma0 nested-links pa0">
      <li>
        <a className="dib no-underline pa3" href="#" rel="bookmark">
          Link 1
        </a>
      </li>
      <li>
        <a className="dib no-underline pa3" href="#" rel="bookmark">
          Link 2
        </a>
      </li>
    </ul>
  </nav>
)
