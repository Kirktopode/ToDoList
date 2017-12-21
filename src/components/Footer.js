import React from 'react'
import FilterLink from '../containers/FilterLink'
import DisplayTime from '../containers/DisplayTime'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <DisplayTime />
      Time Added
  </p>
)

export default Footer
