import React from 'react'
import clsx from 'clsx'

export type FooterProps = React.HTMLAttributes<HTMLDivElement>

export const Footer: React.FC<FooterProps> = ({
  children,
  className,
  ...rest
}) => (
  <footer
    className={clsx('bt b--silver dark-gray', className)}
    role="contentinfo"
    {...rest}
  >
    <div className="flex justify-between">
      <small className="dib f6 pv2">Hello, Next.js!</small>
      <ul className="f6 list ma0 pa0 flex">
        <li>
          <a className="color-inherit dib ph3 pv2" href="#">
            Link 3
          </a>
        </li>
        <li>
          <a className="color-inherit dib pv2" href="#">
            Link 4
          </a>
        </li>
      </ul>
    </div>

    {children}
  </footer>
)
