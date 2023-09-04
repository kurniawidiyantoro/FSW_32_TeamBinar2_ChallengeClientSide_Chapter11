"use strict";
(() => {
var exports = {};
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 2923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://chapter11team2.cyclic.app"}/usergame/get`);
    const userData = response.data;
    const userId = userData.id;
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2923));
module.exports = __webpack_exports__;

})();