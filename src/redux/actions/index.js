export const CARICA_FETCH = "CARICA_FETCH";
export const IS_LOADING = "IS_LOADING";
export const SET_SHOW_EXP = "SET_SHOW_EXP";
export const HOME_FETCH = "HOME_FETCH";
export const REVERSE = "REVERSE";
export const SWITCH_COLOR = "SWITCH_COLOR";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const ARR_PROFILE = "ARR_PROFILE";
export const ADD_PREFE_JOBS = "ADD_PREFE_JOBS";
export const REMOVE_PREFE_JOBS = "REMOVE_PREFE_JOBS";

export const fetchProfile = (key) => {
  return async (dispatch) => {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: key,
        },
      });
      if (res.ok) {
        let profile = await res.json();
        dispatch({
          type: CARICA_FETCH,
          payload: profile,
        });
      } else {
        dispatch({
          type: IS_LOADING,
        });
      }
    } catch (error) {
      alert("fetchProfile", error);
    }
  };
};

export function fetchIdProfile(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
          },
        }
      );
      console.log(fetch.toString);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_PROFILE", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const showModalExp = (toggleState) => {
  return {
    type: SET_SHOW_EXP,
    payload: !toggleState,
  };
};

export const reversed = (userKey) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: userKey,
          },
        }
      );
      if (res.ok) {
        let post = await res.json();
        dispatch({
          type: HOME_FETCH,
          payload: post.reverse(),
        });
        dispatch({
          type: IS_LOADING,
        });
      } else {
      }
    } catch (error) {
      alert("reversed", error);
    }
  };
};

export const allProfile = (key) => {
  return async (dispatch) => {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/profile/";
    try {
      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: key,
        },
      });
      if (res.ok) {
        let arrProfile = await res.json();
        dispatch({
          type: ARR_PROFILE,
          payload: arrProfile,
        });
      } else {
        dispatch({
          type: IS_LOADING,
        });
      }
    } catch (error) {
      alert("fetchProfile", error);
    }
  };
};

export const likeToggle = (param) => {
  console.log(param);
  return {
    type: SWITCH_COLOR,
    payload: !param,
  };
};

export const addFriend = (param) => {
  return {
    type: ADD_FRIEND,
    payload: param,
  };
};

export const removeFriend = (param) => {
  return {
    type: REMOVE_FRIEND,
    payload: param,
  };
};

export const addPrefeJobs = (param) => {
  return {
    type: ADD_PREFE_JOBS,
    payload: param,
  };
};

export const removePrefeJobs = (param) => {
  return {
    type: REMOVE_PREFE_JOBS,
    payload: param,
  };
};
