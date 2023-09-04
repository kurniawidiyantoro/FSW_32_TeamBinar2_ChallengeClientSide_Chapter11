"use strict";
exports.id = 594;
exports.ids = [594];
exports.modules = {

/***/ 9594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vV": () => (/* binding */ setEmail),
/* harmony export */   "SL": () => (/* binding */ setLoggedIn),
/* harmony export */   "Xr": () => (/* binding */ setPlayedGames)
/* harmony export */ });
/* unused harmony exports setTotalScore, fetchUserTotalScore */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // export function loginRequest(){
//   return {
//     type: 'LOGIN_REQUEST'
//   }
//  };
//  export function loginSuccess (token, email) {
//   return{
//   type: 'LOGIN_SUCCESS',
//   payload: { token, email },
// }};
// export function loginFailure (error){
//   return{
//     type: 'LOGIN_FAILURE',
//     payload: error,
//   }  
// };

function setEmail(email) {
  return {
    type: 'SET_EMAIL',
    payload: email
  };
}
const setTotalScore = totalScore => ({
  type: 'SET_TOTAL_SCORE',
  payload: totalScore
});
const setLoggedIn = (isLoggedIn, user) => ({
  type: 'SET_LOGGED_IN',
  payload: {
    isLoggedIn,
    user
  }
});
const setPlayedGames = playedGames => ({
  type: 'SET_PLAYED_GAMES',
  payload: playedGames
});
const fetchUserTotalScore = userEmail => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const gamename = 'gamerps';

    if (!token) {
      console.log('Not Authorized!');
      window.location.replace('/login');
      return; // Return early if not authorized
    }

    const response = await Axios.post(`${"https://chapter11team2.cyclic.app"}/gamehistory/get/rank`, {
      email: userEmail,
      gamename
    }, {
      headers: {
        Authorization: `Basic ${token}`
      }
    });
    const userTotalScore = response.data.data.totalscore;
    dispatch(setTotalScore(userTotalScore)); // Dispatch the total score to Redux store
  } catch (error) {
    console.error('Error fetching user total score:', error);
  }
}; // export const loginUser = (email, password) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await Axios.post('http://localhost:3005/login', {
//       email,
//       password,
//     });
//     const { token, email: userEmail } = response.data;
//     localStorage.setItem('token', token);
//     localStorage.setItem('email', userEmail);
//     dispatch(loginSuccess(token, userEmail));
//     dispatch(setEmail(userEmail));
//   } catch (error) {
//     const errorMessage = error.response ? error.response.data.message : 'An error occurred';
//     dispatch(loginFailure(errorMessage));
//   }
// };

/***/ })

};
;