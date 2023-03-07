import { CARICA_FETCH, HOME_FETCH, IS_LOADING, REVERSE } from "../actions"
import { SET_SHOW_EXP } from "../actions"
import { SWITCH_COLOR } from "../actions"
import { ADD_FRIEND } from "../actions"

const initialState = {
  profile: {},
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
  showExp: false,
  post: [],
  loading: true,
  likeMe: false,
  friend: [],
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const dataid = action.payload
      let newArray = [...state.friend]
      if (!newArray.includes(dataid)) {
        newArray.push(action.payload)
      }
      return {
        ...state,
        friend: newArray,
      }
    case CARICA_FETCH:
      return {
        ...state,
        profile: action.payload,
      }
    case SET_SHOW_EXP:
      return {
        ...state,
        showExp: action.payload,
      }
    case HOME_FETCH:
      return {
        ...state,
        post: action.payload,
      }
    case IS_LOADING:
      return {
        ...state,
        loading: false,
      }
    case SWITCH_COLOR:
      return {
        ...state,
        likeMe: !action.payload,
      }
    default:
      return state
  }
}

export default profileReducer
