import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, displayTime, text, time }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    {text + ( displayTime ? (" " + time) : "")}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  displayTime: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Todo
