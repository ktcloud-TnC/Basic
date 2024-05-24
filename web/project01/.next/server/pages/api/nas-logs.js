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
exports.id = "pages/api/nas-logs";
exports.ids = ["pages/api/nas-logs"];
exports.modules = {

/***/ "moment-timezone":
/*!**********************************!*\
  !*** external "moment-timezone" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("moment-timezone");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/nas-logs.js":
/*!*******************************!*\
  !*** ./pages/api/nas-logs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst naslogDirectory = \"/n1/logs/all\"; // 예시: 절대 경로 직접 지정\nasync function getTodayLogPattern() {\n    const today = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()().tz(\"Asia/Seoul\").format(\"YYYYMMDD\");\n    return path__WEBPACK_IMPORTED_MODULE_1___default().join(naslogDirectory, `all-access-${today}.log`);\n}\nasync function handler(req, res) {\n    const logPath = await getTodayLogPattern();\n    try {\n        const logContent = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(logPath, \"utf8\");\n        res.status(200).send(logContent);\n    } catch (error) {\n        if (error.code === \"ENOENT\") {\n            res.status(404).json({\n                message: \"The log file for today does not exist.\"\n            });\n        } else {\n            console.error(\"Error reading file:\", error);\n            res.status(500).send(\"Failed to read log file.\");\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmFzLWxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUNMO0FBQ2E7QUFFckMsTUFBTUcsZUFBZSxHQUFHLGNBQWMsRUFBRSxrQkFBa0I7QUFFMUQsZUFBZUMsa0JBQWtCLEdBQUc7SUFDbEMsTUFBTUMsS0FBSyxHQUFHSCxzREFBTSxFQUFFLENBQUNJLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUMxRCxPQUFPTixnREFBUyxDQUFDRSxlQUFlLEVBQUUsQ0FBQyxXQUFXLEVBQUVFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFYyxlQUFlSSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLE9BQU8sR0FBRyxNQUFNUixrQkFBa0IsRUFBRTtJQUUxQyxJQUFJO1FBQ0YsTUFBTVMsVUFBVSxHQUFHLE1BQU1iLDJEQUFXLENBQUNZLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDckRELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILFVBQVUsQ0FBQyxDQUFDO0lBQ25DLEVBQUUsT0FBT0ksS0FBSyxFQUFFO1FBQ2QsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzNCUCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsd0NBQXdDO2FBQUUsQ0FBQyxDQUFDO1FBQzlFLE9BQU87WUFDTEMsT0FBTyxDQUFDSixLQUFLLENBQUMscUJBQXFCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1lBQzVDTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDAxLy4vcGFnZXMvYXBpL25hcy1sb2dzLmpzPzZiMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcclxuXHJcbmNvbnN0IG5hc2xvZ0RpcmVjdG9yeSA9ICcvbjEvbG9ncy9hbGwnOyAvLyDsmIjsi5w6IOygiOuMgCDqsr3roZwg7KeB7KCRIOyngOyglVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlMb2dQYXR0ZXJuKCkge1xyXG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkudHooJ0FzaWEvU2VvdWwnKS5mb3JtYXQoJ1lZWVlNTUREJyk7XHJcbiAgcmV0dXJuIHBhdGguam9pbihuYXNsb2dEaXJlY3RvcnksIGBhbGwtYWNjZXNzLSR7dG9kYXl9LmxvZ2ApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgbG9nUGF0aCA9IGF3YWl0IGdldFRvZGF5TG9nUGF0dGVybigpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgbG9nQ29udGVudCA9IGF3YWl0IGZzLnJlYWRGaWxlKGxvZ1BhdGgsICd1dGY4Jyk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChsb2dDb250ZW50KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICdFTk9FTlQnKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1RoZSBsb2cgZmlsZSBmb3IgdG9kYXkgZG9lcyBub3QgZXhpc3QuJyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlYWRpbmcgZmlsZTonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdGYWlsZWQgdG8gcmVhZCBsb2cgZmlsZS4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsIm1vbWVudCIsIm5hc2xvZ0RpcmVjdG9yeSIsImdldFRvZGF5TG9nUGF0dGVybiIsInRvZGF5IiwidHoiLCJmb3JtYXQiLCJqb2luIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImxvZ1BhdGgiLCJsb2dDb250ZW50IiwicmVhZEZpbGUiLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiLCJjb2RlIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/nas-logs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/nas-logs.js"));
module.exports = __webpack_exports__;

})();