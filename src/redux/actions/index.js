export const CARICA_FETCH = "CARICA_FETCH";
export const IS_LOADING = "IS_LOADING";
export const SET_SHOW_EXP = "SET_SHOW_EXP";
export const HOME_FETCH = "HOME_FETCH";
export const REVERSE = "REVERSE";

export const fetchProfile = (key) => {
  return async (dispatch) => {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      if (res.ok) {
        let profile = await res.json();
        console.log(profile);
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
      alert(error);
    }
  };
};

export function fetchIdProfile(id, key) {
  const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      console.log(fetch.toString);
      if (response.ok) {
        const data = await response.json();
        console.log("azzzzzzz", data);
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
    const urlHomeGet = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const res = await fetch(urlHomeGet, {
        headers: {
          Authorization: `Bearer ${userKey}`,
        },
      });
      if (res.ok) {
        let post = await res.json();
        console.log("post", post);
        dispatch({
          type: HOME_FETCH,
          payload: post.reverse(),
        });
      } else {
        dispatch({
          type: IS_LOADING,
        });
      }
    } catch (error) {
      alert(error);
    }
  };
};
