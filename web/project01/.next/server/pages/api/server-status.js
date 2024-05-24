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
exports.id = "pages/api/server-status";
exports.ids = ["pages/api/server-status"];
exports.modules = {

/***/ "os-utils":
/*!***************************!*\
  !*** external "os-utils" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("os-utils");

/***/ }),

/***/ "(api)/./pages/api/server-status.js":
/*!************************************!*\
  !*** ./pages/api/server-status.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var os_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os-utils */ \"os-utils\");\n/* harmony import */ var os_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os_utils__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/server-status.js\n\nfunction handler(req, res) {\n    os_utils__WEBPACK_IMPORTED_MODULE_0___default().cpuUsage((cpuPercent)=>{\n        const memoryUsage = (os_utils__WEBPACK_IMPORTED_MODULE_0___default().totalmem() - os_utils__WEBPACK_IMPORTED_MODULE_0___default().freemem()) / os_utils__WEBPACK_IMPORTED_MODULE_0___default().totalmem() * 100;\n        const cpuUsage = cpuPercent * 100;\n        res.status(200).json({\n            cpuUsage: cpuUsage.toFixed(2),\n            memoryUsage: memoryUsage.toFixed(2)\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmVyLXN0YXR1cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2QkFBNkI7QUFDRTtBQUVoQixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCx3REFBZ0IsQ0FBQyxDQUFDSyxVQUFVLEdBQUs7UUFDL0IsTUFBTUMsV0FBVyxHQUFHLENBQUVOLHdEQUFnQixFQUFFLEdBQUdBLHVEQUFlLEVBQUUsSUFBSUEsd0RBQWdCLEVBQUUsR0FBSSxHQUFHO1FBQ3pGLE1BQU1JLFFBQVEsR0FBR0MsVUFBVSxHQUFHLEdBQUc7UUFFakNGLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDbkJOLFFBQVEsRUFBRUEsUUFBUSxDQUFDTyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdCTCxXQUFXLEVBQUVBLFdBQVcsQ0FBQ0ssT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0MDEvLi9wYWdlcy9hcGkvc2VydmVyLXN0YXR1cy5qcz82NjM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9zZXJ2ZXItc3RhdHVzLmpzXHJcbmltcG9ydCBvc1V0aWxzIGZyb20gJ29zLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBvc1V0aWxzLmNwdVVzYWdlKChjcHVQZXJjZW50KSA9PiB7XHJcbiAgICBjb25zdCBtZW1vcnlVc2FnZSA9ICgob3NVdGlscy50b3RhbG1lbSgpIC0gb3NVdGlscy5mcmVlbWVtKCkpIC8gb3NVdGlscy50b3RhbG1lbSgpKSAqIDEwMDtcclxuICAgIGNvbnN0IGNwdVVzYWdlID0gY3B1UGVyY2VudCAqIDEwMDtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIGNwdVVzYWdlOiBjcHVVc2FnZS50b0ZpeGVkKDIpLFxyXG4gICAgICBtZW1vcnlVc2FnZTogbWVtb3J5VXNhZ2UudG9GaXhlZCgyKSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJvc1V0aWxzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNwdVVzYWdlIiwiY3B1UGVyY2VudCIsIm1lbW9yeVVzYWdlIiwidG90YWxtZW0iLCJmcmVlbWVtIiwic3RhdHVzIiwianNvbiIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/server-status.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/server-status.js"));
module.exports = __webpack_exports__;

})();