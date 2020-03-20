import React from 'react'
import clsx from 'clsx'

export type GridProps = React.HTMLAttributes<HTMLDivElement>

export type GridColumnProps = React.HTMLAttributes<HTMLDivElement>

export class Grid extends React.Component<GridProps> {
  static Column({ className, ...rest }: GridColumnProps) {
    return <div className={clsx('ph3', className)} {...rest} />
  }

  render() {
    const { className, ...rest } = this.props

    return <div className={clsx('flex nl3 nr3', className)} {...rest} />
  }
}
