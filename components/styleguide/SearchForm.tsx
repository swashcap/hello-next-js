import React from 'react'
import clsx from 'clsx'

export interface SearchFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}

export const SearchForm: React.FC<SearchFormProps> = ({
  className,
  ...rest
}) => (
  <form className={clsx('flex', className)} role="search" {...rest}>
    <input
      className="bb bl br-0 bt b--silver black db input-reset lh-copy ph2 pv1 sans-serif w-100"
      placeholder="Component name…"
      style={{
        flex: 2
      }}
    />
    <button
      className="ba b--transparent bg-dark-gray button-reset dib dim lh-copy ph2 pv1 pointer sans-serif white"
      type="submit"
    >
      Search
    </button>
  </form>
)
