import React from 'react'
import { snakeCase } from 'lodash'

export interface TableOfContentsProps
  extends React.HTMLAttributes<HTMLElement> {
  items: Array<[string, Array<string> | undefined]>
}

/**
 * Table of contents.
 *
 * Link to `Heading`s in a page.
 */
export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  ...rest
}) => (
  <nav {...rest}>
    <ol className="list mv0 pa0">
      {items.map(([item, subItems], i) => (
        <li key={i}>
          <a className="color-inherit db dim" href={`#${snakeCase(item)}`}>
            {item}
            {' ↓'}
          </a>
          {!!subItems && (
            <ol className="list mv0 pl3 pr0">
              {subItems.map((subItem, j) => (
                <li key={j}>
                  <a
                    className="color-inherit db dim"
                    href={`#${snakeCase(subItem)}`}
                  >
                    {subItem}
                  </a>
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  </nav>
)
