"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./redux/reducer/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  user: {},
  email: '',
  // email: typeof window !== 'undefined' ? localStorage.getItem('email') || '' : '',
  // password: typeof window !== 'undefined' ? localStorage.getItem('password') || '' : '',
  playedGames: {},
  totalScore: 0,
  error: ''
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload.user,
        email: action.payload.email
      });

    case 'SET_TOTAL_SCORE':
      return _objectSpread(_objectSpread({}, state), {}, {
        totalScore: action.payload
      });

    case 'SET_EMAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        email: action.payload
      });

    case 'SET_PLAYED_GAMES':
      return _objectSpread(_objectSpread({}, state), {}, {
        playedGames: _objectSpread(_objectSpread({}, state.playedGames), action.payload)
      });
    // case 'LOGIN_REQUEST':
    //   return { ...state, loading: true, error: '' };
    // case 'LOGIN_SUCCESS':
    //   return { ...state, loading: false, token: action.payload.token, email: action.payload.email, error: '' };
    // case 'LOGIN_FAILURE':
    //   return { ...state, loading: false, error: action.payload };  

    default:
      return state;
  }
}
;
;// CONCATENATED MODULE: ./redux/store.js



const reducers = (0,external_redux_namespaceObject.combineReducers)({
  reducer: reducer
});
const store = (0,external_redux_namespaceObject.legacy_createStore)(reducers, (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
/* harmony default export */ const redux_store = (store);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import '../styles/globals.css'





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: redux_store,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7347));
module.exports = __webpack_exports__;

})();