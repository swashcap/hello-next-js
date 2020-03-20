import React from 'react'
import clsx from 'clsx'

export type CardElevation = '1' | '2'

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
      elevation === '1' && 'shadow-1',
      elevation === '2' && 'shadow-2',
      className
    )}
    {...rest}
  />
)
