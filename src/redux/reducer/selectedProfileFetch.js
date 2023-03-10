const initialState = {
  content: [],
};

const selectedProfileFetch = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default selectedProfileFetch;
