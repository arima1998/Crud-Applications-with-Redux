export const ADD = (item) => {
  return {
    type: "ADD_DATA",
    payload: item,
  };
};
export const REMOVE = (id) => {
  return {
    type: "REMOVE_DATA",
    payload: id,
  };
};
