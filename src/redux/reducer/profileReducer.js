import { CARICA_FETCH } from "../actions";
import { SET_SHOW_EXP } from "../actions"

const initialState = {
  profile: {},
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
  showExp: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARICA_FETCH:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_SHOW_EXP:
      return {
        ...state,
        showExp: action.payload,
      }
    default:
      return state;
  }
};

export default profileReducer;
