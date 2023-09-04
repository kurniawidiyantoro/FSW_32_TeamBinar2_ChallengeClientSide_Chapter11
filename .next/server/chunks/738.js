exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 3738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2367);
/* harmony import */ var _styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const Features = () => {
  const items = [{
    title: "Rock Paper Scissors",
    description: "Game Bantung Gunting Kertas melawan computer",
    backgroundImage: '/images/rock-paper-scissor.jpg'
  }, {
    title: "Head or Tails",
    description: "Mencoba menebak hasil dari lemparan coin",
    backgroundImage: '/images/coin.jpg'
  }, {
    title: "Game Dadu",
    description: "Permainan lempar dadu melawan komputer",
    backgroundImage: '/images/dadu.jpg'
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default().FeaturePageImage),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `py-12 md:py-20`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: `${(_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default()["max-w-3xl"])} mx-auto text-center pb-12 md:pb-20`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default().featureTitle),
            children: "Game List"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default().featureDescription),
            children: "Berbagai permainan yang bisa anda mainkan di website kami"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default().mderwSm),
          children: items.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default().rectangleItem),
            style: {
              backgroundImage: `url(${item.backgroundImage})`
            },
            "data-aos": "fade-up",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: (_styles_feature_module_css__WEBPACK_IMPORTED_MODULE_2___default().rectangleItemContent),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
                className: `h4 mb-2`,
                children: item.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                children: item.description
              })]
            })
          }, index))
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);

/***/ }),

/***/ 2367:
/***/ ((module) => {

// Exports
module.exports = {
	"FeaturePageImage": "feature_FeaturePageImage__15vSC",
	"LeaderboardPageImage": "feature_LeaderboardPageImage__3ZiuA",
	"GamecoinPageImage": "feature_GamecoinPageImage__16mwe",
	"GamedicePageImage": "feature_GamedicePageImage__3ZZr_",
	"featureTitle": "feature_featureTitle__3j_jX",
	"featureDescription": "feature_featureDescription__1_igv",
	"mderwSm": "feature_mderwSm__1hnjs",
	"rectangleItem": "feature_rectangleItem__RYjPa",
	"rectangleItemContent": "feature_rectangleItemContent__1VXOY",
	"played": "feature_played__3Cusk",
	"playedText": "feature_playedText__1n4px",
	"tableStyle": "feature_tableStyle__1fvkw",
	"buttonContainer": "feature_buttonContainer__DEWS8",
	"buttonPDF": "feature_buttonPDF__P23Up",
	"mderw-sm": "feature_mderw-sm__EtlwB"
};


/***/ })

};
;