import React from 'react'
import clsx from 'clsx'

export type IconName =
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'close'

/**
 * The icon's size.
 *
 * - Small: 1rem
 * - Large: 2rem
 */
export type IconSize = 'small' | 'large'

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The icon's name.
   */
  name: IconName

  /**
   * The icon's size.
   *
   * @default 'medium'
   */
  size?: IconSize
}

/**
 * Icon.
 */
export const Icon: React.FC<IconProps> = ({
  className,
  name,
  size = 'small',
  ...rest
}) => (
  <span
    className={clsx(
      'dib tc',
      size === 'small' && 'f5 h1 w1',
      size === 'large' && 'f4 h2 w2',
      className
    )}
    {...rest}
  >
    {name === 'arrowDown' && '↓'}
    {name === 'arrowLeft' && '←'}
    {name === 'arrowRight' && '→'}
    {name === 'arrowUp' && '↑'}
    {name === 'close' && '✕'}
  </span>
)
