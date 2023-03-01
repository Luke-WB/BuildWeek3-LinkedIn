const initialState = {
   content: []
}

const experiencesFetch = (state = initialState, action) => {
   switch (action.type) {
      case "GET_EXPERIENCES":
         return {
            ...state,
               content : [...action.payload]
            }
      default:
         return state;
   }
};

export default experiencesFetch;