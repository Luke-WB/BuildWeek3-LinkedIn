import {
  ADD_PREFE_JOBS,
  CARICA_FETCH,
  HOME_FETCH,
  IS_LOADING,
  REMOVE_FRIEND,
  REMOVE_PREFE_JOBS,
  REVERSE,
} from "../actions";
import { SET_SHOW_EXP } from "../actions";
import { SWITCH_COLOR } from "../actions";
import { ADD_FRIEND } from "../actions";
import { ARR_PROFILE } from "../actions";

const initialState = {
  profile: {},
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs",
  showExp: false,
  post: [],
  loading: true,
  likeMe: false,
  friend: [],
  arrProfile: [],
  arrNotFriend: [],
  prefe: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const dataid = action.payload;
      let newArray = [...state.friend];
      if (!newArray.includes(dataid)) {
        newArray.push(action.payload);
      }
      return {
        ...state,
        friend: newArray,
      };
    case REMOVE_FRIEND:
      const dataid2 = action.payload;
      let newArray2 = [...state.friend];
      for (let i = 0; i < newArray2.length; i++) {
        if (newArray2[i]?.includes(dataid2)) {
          newArray2.splice(i, 1);
        }
      }
      return {
        ...state,
        friend: newArray2,
      };
    case ADD_PREFE_JOBS:
      const jobId = action.payload;
      let arrJob = [...state.prefe];
      let arrJobFilter = arrJob.map((el) => el._id);
      console.log("oooooo", arrJob);
      if (!arrJobFilter.includes(jobId._id)) {
        arrJob.push(action.payload);
      }
      return {
        ...state,
        prefe: arrJob,
      };
    case REMOVE_PREFE_JOBS:
      const jobId2 = action.payload;
      let arrJob2 = [...state.prefe];
      let arrJob2Filter = arrJob2.map((el) => el._id);
      console.log("oooooo", arrJob2);
      for (let i = 0; i < arrJob2Filter.length; i++) {
        if (arrJob2Filter[i]?.includes(jobId2._id)) {
          arrJob2.splice(i, 1);
        }
      }
      return {
        ...state,
        prefe: arrJob2,
      };
    case ARR_PROFILE:
      return {
        ...state,
        arrProfile: action.payload,
      };
    case CARICA_FETCH:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_SHOW_EXP:
      return {
        ...state,
        showExp: action.payload,
      };
    case HOME_FETCH:
      return {
        ...state,
        post: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SWITCH_COLOR:
      return {
        ...state,
        likeMe: !action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
