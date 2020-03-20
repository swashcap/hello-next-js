import React from 'react'
import clsx from 'clsx'

export type FooterProps = React.HTMLAttributes<HTMLDivElement>

export const Footer: React.FC<FooterProps> = ({
  children,
  className,
  ...rest
}) => (
  <footer
    className={clsx('bt b--silver dark-gray pv2', className)}
    role="contentinfo"
    {...rest}
  >
    <div className="flex justify-between">
      <small className="f6 dib">Hello, Next.js!</small>
      <small className="f6 dib">
        Source code{' '}
        <a
          className="color-inherit dim"
          href="https://github.com/swashcap/hello-next-js"
        >
          on GitHub
        </a>
      </small>
    </div>
  </footer>
)
