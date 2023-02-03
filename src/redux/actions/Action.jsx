export const ADD_CART = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// Delete items
export const DELETE_CART = (key) => {
  return {
    type: "DELETE_CART",
    payload: key,
  };
};

// remove individual item
export const REMOVE_ITEM = (item) => {
  return {
    type: "REMOVE_ONE_ITEM",
    payload: item,
  };
};
