import React from 'react'
import clsx from 'clsx'

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement>

export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean
  inputProps?: React.HTMLAttributes<HTMLAnchorElement>
}

/**
 * Breadcrumb.
 *
 * Represent the current page.
 */
export class Breadcrumb extends React.Component<BreadcrumbProps> {
  static Item: React.FC<BreadcrumbItemProps> = ({
    active,
    children,
    className,
    inputProps: { className: inputClassName, ...inputRest } = {},
    ...rest
  }) => {
    const props = {
      className: clsx('dib', active && 'fw7 pv1', className),
      ...rest
    }

    if (active) {
      props['aria-current'] = 'page'
    }

    return (
      <li {...props}>
        {active ? (
          children
        ) : (
          <>
            <a
              className={clsx(
                'color-inherit dib dim no-underline pv1 pointer',
                inputClassName
              )}
              {...inputRest}
            >
              {children}
            </a>
            <span aria-hidden="true" className="ph1 silver">
              ‣
            </span>
          </>
        )}
      </li>
    )
  }

  render() {
    const { children, className, ...rest } = this.props

    return (
      <nav
        aria-label="breadcrumbs"
        className={clsx('dark-gray f6', className)}
        {...rest}
      >
        <ol className="list ma0 pa0">{children}</ol>
      </nav>
    )
  }
}
