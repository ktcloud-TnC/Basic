"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hostname";
exports.ids = ["pages/api/hostname"];
exports.modules = {

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "(api)/./pages/api/hostname.js":
/*!*******************************!*\
  !*** ./pages/api/hostname.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/hostname.js\n\nfunction handler(req, res) {\n    // os 모듈의 hostname 함수를 사용하여 시스템의 호스트 이름을 가져옵니다.\n    const hostname = os__WEBPACK_IMPORTED_MODULE_0___default().hostname();\n    // 응답 객체의 status 메서드를 사용하여 HTTP 상태 코드를 설정합니다 (여기서는 200을 사용하여 요청이 성공적이었음을 나타냅니다).\n    // json 메서드를 사용하여 클라이언트에 JSON 형식의 응답을 보냅니다.\n    res.status(200).json({\n        hostname\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaG9zdG5hbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCO0FBQ0o7QUFFTCxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLCtDQUErQztJQUMvQyxNQUFNQyxRQUFRLEdBQUdKLGtEQUFXLEVBQUU7SUFFOUIsZ0ZBQWdGO0lBQ2hGLDJDQUEyQztJQUMzQ0csR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFRixRQUFRO0tBQUUsQ0FBQyxDQUFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0MDEvLi9wYWdlcy9hcGkvaG9zdG5hbWUuanM/ZTIzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvaG9zdG5hbWUuanNcclxuaW1wb3J0IG9zIGZyb20gJ29zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvLyBvcyDrqqjrk4jsnZggaG9zdG5hbWUg7ZWo7IiY66W8IOyCrOyaqe2VmOyXrCDsi5zsiqTthZzsnZgg7Zi47Iqk7Yq4IOydtOumhOydhCDqsIDsoLjsmLXri4jri6QuXHJcbiAgY29uc3QgaG9zdG5hbWUgPSBvcy5ob3N0bmFtZSgpO1xyXG5cclxuICAvLyDsnZHri7Ug6rCd7LK07J2YIHN0YXR1cyDrqZTshJzrk5zrpbwg7IKs7Jqp7ZWY7JesIEhUVFAg7IOB7YOcIOy9lOuTnOulvCDshKTsoJXtlanri4jri6QgKOyXrOq4sOyEnOuKlCAyMDDsnYQg7IKs7Jqp7ZWY7JesIOyalOyyreydtCDshLHqs7XsoIHsnbTsl4jsnYzsnYQg64KY7YOA64OF64uI64ukKS5cclxuICAvLyBqc29uIOuplOyEnOuTnOulvCDsgqzsmqntlZjsl6wg7YG065287J207Ja47Yq47JeQIEpTT04g7ZiV7Iud7J2YIOydkeuLteydhCDrs7Trg4Xri4jri6QuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBob3N0bmFtZSB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsib3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaG9zdG5hbWUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/hostname.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hostname.js"));
module.exports = __webpack_exports__;

})();