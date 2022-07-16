import {

} from "./actions"

const initialState = {

}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    // case GET_PRODUCTS:
    //   return { ...state, products: payload }
    default: return state;
  }
}