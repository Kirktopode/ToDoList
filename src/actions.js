/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_DISPLAY_TIME = 'TOGGLE_DISPLAY_TIME'
export const DELETE_TODO = 'DELETE_TODO'
export const COPY_TODO = 'COPY_TODO'
export const APPEND_TIMESTAMP = 'APPEND_TIMESTAMP'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text, time){
  return{
    type: ADD_TODO,
    text: text
  };
}

export function copyTodo(index, copies){
  return{
    type: COPY_TODO,
    index: index,
    copies: copies
  }
}

export function deleteTodo(index){
  return {
    type: DELETE_TODO,
    index: index
  }
}

export function appendTimestamp(index){
  return {
    type: APPEND_TIMESTAMP,
    index: index
  }
}

export function toggleTodo(index){
  return{
    type: TOGGLE_TODO,
    index: index
  };
}

export function setVisibilityFilter(filter){
  return{
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}

export function toggleDisplayTime(){
  return{
    type: TOGGLE_DISPLAY_TIME
  }
}
