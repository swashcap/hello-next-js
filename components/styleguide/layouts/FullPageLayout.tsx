import React from 'react'

import { Grid } from '../Grid'

export type FullPageLayoutProps = React.HTMLAttributes<HTMLDivElement>

export const FullPageLayout: React.FC<FullPageLayoutProps> = ({
  children,
  ...rest
}) => (
  <Grid {...rest}>
    <Grid.Column className="w-100 w-80-m w-80-l">{children}</Grid.Column>
  </Grid>
)
