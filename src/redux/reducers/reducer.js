const Initial_state = {
  User_data: [],
};

export const todoreducers = (state = Initial_state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        User_data: [...state.User_data, action.payload],
      };
    case "REMOVE_DATA":
      const dldata = state.User_data.filter((e, k) => k !== action.payload);
      return {
        ...state,
        User_data: dldata,
      };

    default:
      return state;
  }
};
