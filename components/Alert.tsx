import React from 'react'
import clsx from 'clsx'

export type AlertVariant = 'error' | 'success' | 'warning'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The Alert's close function.
   *
   * Passing this function will cause the Alert to render a close 'x' button.
   */
  onClose?: Function

  /**
   * The Alert's appearance variation.
   *
   * @default 'warning'
   */
  variant?: AlertVariant
}

/**
 * Alert.
 *
 * Inform users of a change to their data, an error state, or a successful
 * interaction.
 */
export const Alert: React.FC<AlertProps> = ({
  children,
  className,
  onClose,
  variant = 'warning',
  ...rest
}) => (
  <div
    className={clsx(
      'ba br3 flex justify-start',
      variant === 'error' && 'b--dark-red bg-washed-red dark-red',
      variant === 'success' && 'b--dark-green bg-washed-green dark-green',
      variant === 'warning' && 'b--yellow bg-light-yellow black',
      className
    )}
    role="alert"
    {...rest}
  >
    <div className={clsx('pv2', onClose ? 'pl3' : 'ph3')} style={{ flex: 2 }}>
      {children}
    </div>
    {!!onClose && (
      <button
        aria-label="Close"
        className="bg-transparent bn button-reset color-inherit dim lh-solid f4
        ph3 pv2 pointer"
        type="button"
      >
        ×
      </button>
    )}
  </div>
)
