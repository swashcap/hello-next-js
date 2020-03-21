import React from 'react'
import { Grid } from '../Grid'

export interface SidebarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
  sidebar,
  ...rest
}) => (
  <Grid {...rest}>
    <Grid.Column className="w-100 w-20-m w-20-l">{sidebar}</Grid.Column>
    <Grid.Column className="w-100 w-80-m w-80-l">{children}</Grid.Column>
  </Grid>
)
