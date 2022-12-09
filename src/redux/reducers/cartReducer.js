import * as types from "../actions/actionTypes";

export default function cartReducer(state = [], action) {

  switch (action.type) {
    case types.ADD_CART:
    return [...state, { ...action.cart }];
    default:
      return state;
  }
}
