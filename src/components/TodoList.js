import React from 'react'
import PropTypes from 'prop-types'
import TodoTime from '../containers/TodoTime'

const TodoList = ({ todos, onTodoClick, onDeleteClick, onCopyClick, onAppendClick}) => (

  <ul>
    {todos.map((todo, index) => (

      <TodoTime
        index={todo.key}
        todo={JSON.stringify(todo)}
        key={todo.text}
        {...todo}
        onClick={() => onTodoClick(todo.key)}
        onDeleteClick={() => onDeleteClick(todo.key)}
        onCopyClick = {(copies) => onCopyClick(todo.key, copies)}
        onAppendClick = {() => onAppendClick(todo.key)}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCopyClick: PropTypes.func.isRequired,
  onAppendClick: PropTypes.func.isRequired
}

export default TodoList
