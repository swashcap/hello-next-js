import React from 'react'
import clsx from 'clsx'
import { ComponentDoc } from 'react-docgen-typescript'

import { Code } from '../Code'
import { Empty } from '../Empty'

export interface MethodsTable extends React.HTMLAttributes<HTMLDivElement> {
  component?: React.ComponentType<any> & {
    __docgenInfo?: ComponentDoc
  }
}

/**
 * Methods table.
 *
 * Display a React component's methods.
 */
export const MethodsTable: React.FC<MethodsTable> = ({
  className,
  component,
  ...rest
}) => {
  if (!component?.__docgenInfo?.methods?.length) {
    return <Empty>No methods found</Empty>
  }

  const {
    __docgenInfo: { methods },
  } = component

  return (
    <div className={clsx('overflow-scroll w-100', className)} {...rest}>
      <table className="collapse w-100">
        <thead className="bg-near-white tl v-top">
          <tr>
            <th className="pa2">Name</th>
          </tr>
        </thead>
        <tbody>
          {methods.map(({ name }) => {
            return (
              <tr className="bb b--silver v-top" key={name}>
                <td className="pa2">
                  <Code>{name}</Code>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
