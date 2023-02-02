export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// Delete items
export const DLT = (key) => {
  return {
    type: "REMOVE_CART",
    payload: key,
  };
};

// remove individual item
export const REMOVE = (item) => {
  return {
    type: "REMOVE_ONE",
    payload: item,
  };
};
