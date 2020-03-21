import React from 'react'
import clsx from 'clsx'

import style from './Card.module.css'

export type CardElevation = '1' | '2' | '3'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elevation of the card.
   *
   * @default '1'
   */
  elevation?: CardElevation
}

/**
 * Card.
 *
 * Isolate content from its surroundings.
 */
export const Card: React.FC<CardProps> = ({
  className,
  elevation = '1',
  ...rest
}) => (
  <div
    className={clsx(
      'ba b--moon-gray bg-white br3 pa3',
      elevation === '1' && style['Card--elevation-1'],
      elevation === '2' && style['Card--elevation-2'],
      elevation === '3' && style['Card--elevation-3'],
      className
    )}
    {...rest}
  />
)
