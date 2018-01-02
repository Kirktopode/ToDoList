import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDeleteClick, onCopyClick, onAppendClick, completed, displayTime, text, time, index }) => (
  <li
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    <button
      onClick={onDeleteClick}
    >
    x
    </button>
    <button
      onClick={onAppendClick}
    >
    Append Time
    </button>
    <span
      onClick={onClick}
    >
    {text + ( displayTime ? (" " + time) : "")}
    </span>
    <input
      id = {"copy-count-" + index}
      type="number"
    />
    <button
      onClick = {() => {
        let copies = document.getElementById("copy-count-" + index).value
        if(isNaN(copies) || copies < 0) copies = 0
        onCopyClick(copies)
      }}
    >
    Copy
    </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onCopyClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onAppendClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  displayTime: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Todo
