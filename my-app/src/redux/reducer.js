import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO
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

    default: return state;
  }
}