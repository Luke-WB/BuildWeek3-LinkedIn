export const CARICA_FETCH = "CARICA_FETCH";

export const fetchProfile = () => {
  return async (dispatch, getState) => {
    const urlToFetch = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      let res = await fetch(urlToFetch);
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
