export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const addToCart = (robot) => ({
  type: ADD_TO_CART,
  payload: robot,
});


export const incrementing = (robot) => ({
  type: INCREMENT_QUANTITY,
  payload: robot,
})

export const decrementing  = (robot) => ({
  type: DECREMENT_QUANTITY,
  payload: robot,
})

export const remove = (robot) => ({
  type: REMOVE_FROM_CART,
  payload: robot,
})