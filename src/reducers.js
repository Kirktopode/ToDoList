import {
  ADD_TODO,
  VisibilityFilters,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_DISPLAY_TIME
} from './actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
  displayTime: true
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  displayTime
})

export default todoApp;

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function displayTime(state = true, action){
  switch(action.type){
    case TOGGLE_DISPLAY_TIME:
      //console.log("toggle")
      //console.log(state)
      return !state
    default:
      return state
  }
}

function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          time: action.time,
          completed: false,
          displayTime: true
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index){
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      })
    default:
      return state;
  }
}
