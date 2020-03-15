import React from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The button's appearance variation
   *
   * @default 'primary'
   */
  variant?: ButtonVariant
}

/**
 * Button.
 *
 * The base interaction control.
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  ...rest
}) => (
  <button
    className={clsx(
      'ba br3 button-reset dim pointer tc',
      variant === 'primary' && 'b--transparent bg-dark-blue white ph3 pv2',
      variant === 'secondary' && 'b--dark-blue bg-white dark-blue ph3 pv2',
      variant === 'tertiary' && 'b--dark-gray bg-white dark-gray f6 ph2 pv1',
      className
    )}
    type="button"
    {...rest}
  />
)
