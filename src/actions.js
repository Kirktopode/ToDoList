/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_DISPLAY_TIME = 'TOGGLE_DISPLAY_TIME'

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
    text: text,
    time: time
  };
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
