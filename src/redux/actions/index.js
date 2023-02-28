import showExp from "../reducer/profileReducer"
export const CARICA_FETCH = "CARICA_FETCH"
export const SET_SHOW_EXP = "SET_SHOW_EXP"

export const fetchProfile = (token) => {
  return async (pippo, getState) => {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/profile/me"
    try {
      // let res = await fetch(urlToFetch, {
      //   headers: {'Authorization': `Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjN2Y3MWYxOTNlNjAwMTM4MDdmNjAiLCJpYXQiOjE2Nzc0OTIwODEsImV4cCI6MTY3ODcwMTY4MX0.VsSZ2d0tCDoaQSZpm1CGnM4ctkdFFFZhAu36PvkG-hU
      //   `},
      // });

      const res = await fetch(urlToFetch, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmZhM2YxOTNlNjAwMTM4MDdmNTkiLCJpYXQiOjE2Nzc0ODg4MTYsImV4cCI6MTY3ODY5ODQxNn0.aQD1NJmhLvpzQEKvINIXWvlSMDQG-S49TU3R9DM5PWs`,
        },
      })
      if (res.ok) {
        let profile = await res.json()
        console.log(profile)
        pippo({
          type: CARICA_FETCH,
          payload: profile,
        })
      } else {
        // dispatch({
        //   type: HAS_ERROR,
        // });
      }
    } catch (error) {
      alert(error)
      // dispatch({
      //   type: IS_LOADING,
      // });
      // dispatch({
      //   type: HAS_ERROR,
      // });
    }
  }
}

export const showModalExp = (toggleState) => {
  return {
    type: SET_SHOW_EXP,
    payload: !toggleState
  }
}

// export const showModalExp = () => {
//   return (dispatch) => {
//     constsomeActionCreator(dispatch({
//       type: SET_SHOW_EXP,
//       payload: !showExp,
//     }));
//   };
// };

// export const showModalExp = (dispatch) => {
//   dispatch({
//     type: SET_SHOW_EXP,
//     payload: !showExp,
//   })
// }
