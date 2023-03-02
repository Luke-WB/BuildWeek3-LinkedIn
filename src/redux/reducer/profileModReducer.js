import { MODIFICA_PROFILO } from "../actions";

const initialState = {
  profileModified: {
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
};

const profileReducerModified = (state = initialState, action) => {
  switch (action.type) {
    case MODIFICA_PROFILO:
      return {
        ...state,
        profileModified: {
          ...state.profileModified,
          name: action.payload,
          surname: action.payload,
          email: action.payload,
          bio: action.payload,
          title: action.payload,
          area: action.payload,
        },
      };

    default:
      return state;
  }
};

export default profileReducerModified;
