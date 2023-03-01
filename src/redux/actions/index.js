export const CARICA_FETCH = "CARICA_FETCH";
export const SET_SHOW_EXP = "SET_SHOW_EXP";
export const HOME_FETCH = "HOME_FETCH";

export const fetchProfile = (token) => {
  return async (dispatch, getState) => {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      // let res = await fetch(urlToFetch, {
      //   headers: {'Authorization': `Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjN2Y3MWYxOTNlNjAwMTM4MDdmNjAiLCJpYXQiOjE2Nzc0OTIwODEsImV4cCI6MTY3ODcwMTY4MX0.VsSZ2d0tCDoaQSZpm1CGnM4ctkdFFFZhAu36PvkG-hU
      //   `},
      // });

      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
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
        // dispatch({
        //   type: HAS_ERROR,
        // });
      }
    } catch (error) {
      alert(error);
      // dispatch({
      //   type: IS_LOADING,
      // });
      // dispatch({
      //   type: HAS_ERROR,
      // });
    }
  };
};


export function fetchIdProfile(id) {
  const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
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

export function getExperiences(id) {
  const urlToFetch = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
  return async (dispatch) => {
     try {
        const response = await fetch(urlToFetch, {
          method: "GET",
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
            'Content-Type': 'application/json'
          },
        })
        if (response.ok) {
           const data = await response.json();
           console.log("getExp", data);
           dispatch({type: "GET_EXPERIENCES", payload: data})
        } else {
           alert("Error fetching results");
        }
     } catch (error) {
        console.log(error);
     }
  }
}
export const showModalExp = (toggleState) => {
  return {
    type: SET_SHOW_EXP,
    payload: !toggleState,
  };
};

export const fetchHome = (token) => {
  return async (dispatch, getState) => {
    const urlHomeGet = "https://striveschool-api.herokuapp.com/api/posts/ ";
    try {
      const res = await fetch(urlHomeGet, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
        },
      });
      if (res.ok) {
        let post = await res.json();
        console.log("post",post);
        dispatch({
          type: HOME_FETCH,
          payload: post,
        });
      } else {
        // dispatch({
        //   type: HAS_ERROR,
        // });
      }
    } catch (error) {
      alert(error);
      // dispatch({
      //   type: IS_LOADING,
      // });
      // dispatch({
      //   type: HAS_ERROR,
      // });
    }
  };
};
