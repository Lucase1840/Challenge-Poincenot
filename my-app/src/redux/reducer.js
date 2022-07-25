import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  FILTER_TODOS,
  RESET_TODOS
} from "./actions"

const initialState = {
  toDos: []
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TODOS:
      return { ...state, toDos: payload }

    case ADD_TODO:
      return { ...state, toDos: [...state.toDos, payload] }

    case DELETE_TODO:
      let filteredToDos = state.toDos.filter(e => e.id !== payload)
      return { ...state, toDos: filteredToDos }

    case CHANGE_STATUS:
      let ToDoWithStatusChanged = state.toDos.map(e => {
        if (e.id === payload) {
          return (e = {
            ...e,
            completed: e.completed ? false : true
          })
        } else {
          return e;
        }
      })
      return { ...state, toDos: ToDoWithStatusChanged }

    case FILTER_TODOS:
      return { ...state, toDos: payload }

    case RESET_TODOS:
      return { ...state, toDos: [] }

    default: return state;
  }
}