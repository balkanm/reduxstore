import * as types from "./actionTypes";

export function addCart(cart) {
  return { type: types.ADD_CART, cart };
}

