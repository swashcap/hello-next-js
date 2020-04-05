import React from 'react'
import clsx from 'clsx'
import { ComponentDoc } from 'react-docgen-typescript'

import { Code } from '../Code'
import { Empty } from '../Empty'

export interface PropsTableProps extends React.HTMLAttributes<HTMLDivElement> {
  component?: React.ComponentType<any> & {
    __docgenInfo?: ComponentDoc
  }
}

/**
 * Props table.
 *
 * Display a React component's properties and related metadata in a table.
 */
export const PropsTable: React.FC<PropsTableProps> = ({
  className,
  component,
  ...rest
}) => {
  if (
    !component?.__docgenInfo ||
    !Object.keys(component.__docgenInfo.props).length
  ) {
    return <Empty>No props found</Empty>
  }

  const {
    __docgenInfo: { props },
  } = component

  return (
    <div className={clsx('overflow-scroll w-100', className)} {...rest}>
      <table className="collapse w-100">
        <thead className="bg-near-white tl v-top">
          <tr>
            <th className="pa2">Name</th>
            <th className="pa2">Type</th>
            <th className="pa2">Default</th>
            <th className="pa2">Description</th>
            <th className="pa2">Required</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props).map((key) => {
            const { defaultValue, description, name, required, type } = props[
              key
            ]

            return (
              <tr className="bb b--silver v-top" key={key}>
                <td className="pa2">
                  <Code>{name}</Code>
                </td>
                <td className="pa2">
                  <Code>
                    {type.name} {type.raw}
                  </Code>
                </td>
                <td className="pa2">
                  {!!defaultValue?.value && <Code>{defaultValue.value}</Code>}
                </td>
                <td className="pa2">{description}</td>
                <td className="pa2">{required ? 'Required' : ''}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
