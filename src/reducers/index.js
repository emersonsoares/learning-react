import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      break
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id === action.id)
          return { ...todo, completed: !todo.completed }
        else
          return todo
      })
      break
    default:
      return state
      break
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({ todos, visibilityFilter })