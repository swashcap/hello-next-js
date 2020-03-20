import React from 'react'
import clsx from 'clsx'

import { Grid } from '../Grid'

export type FullPageLayoutProps = React.HTMLAttributes<HTMLDivElement>

export const FullPageLayout: React.FC<FullPageLayoutProps> = ({
  children,
  className,
  ...rest
}) => (
  <Grid className={clsx('flex-wrap', className)}>
    <Grid.Column className="w-100 w-80-m w-80-l">{children}</Grid.Column>
  </Grid>
)
