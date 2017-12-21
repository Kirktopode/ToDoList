import React from 'react'
import PropTypes from 'prop-types'

const Check = ({ active, onChange }) => {
  //let checked = ""
  //if(active) checked = "checked"
  return (
    <input
      type="checkbox"
      checked = {active}
      onChange={e => {
        onChange(e)
      }}
    />
  )
}

Check.propTypes = {
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Check
