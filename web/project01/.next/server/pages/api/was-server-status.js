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
exports.id = "pages/api/was-server-status";
exports.ids = ["pages/api/was-server-status"];
exports.modules = {

/***/ "(api)/./pages/api/was-server-status.js":
/*!****************************************!*\
  !*** ./pages/api/was-server-status.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/was-server-status.js\nasync function handler(req, res) {\n    const WAS_SERVER_URL = `http://${process.env.WAS_SERVER_IP || \"172.25.1.177\"}`;\n    const wasServerStatusEndpoint = `${WAS_SERVER_URL}/api/was-server-status`;\n    try {\n        const response = await fetch(wasServerStatusEndpoint);\n        if (!response.ok) throw new Error(\"WAS 서버 상태 조회 실패\");\n        const data = await response.json();\n        res.status(200).json(data);\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd2FzLXNlcnZlci1zdGF0dXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQztBQUNsQixlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1DLGNBQWMsR0FBRyxDQUFDLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGFBQWEsSUFBSSxjQUFjLENBQUMsQ0FBQztJQUM5RSxNQUFNQyx1QkFBdUIsR0FBRyxDQUFDLEVBQUVKLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztJQUV6RSxJQUFJO1FBQ0EsTUFBTUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsdUJBQXVCLENBQUM7UUFDckQsSUFBSSxDQUFDQyxRQUFRLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JELE1BQU1DLElBQUksR0FBRyxNQUFNSixRQUFRLENBQUNLLElBQUksRUFBRTtRQUNsQ1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUM7SUFDL0IsRUFBRSxPQUFPRyxLQUFLLEVBQUU7UUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO1FBQ3JCYixHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQUVJLE9BQU8sRUFBRUYsS0FBSyxDQUFDRSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDAxLy4vcGFnZXMvYXBpL3dhcy1zZXJ2ZXItc3RhdHVzLmpzPzU3NTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3dhcy1zZXJ2ZXItc3RhdHVzLmpzXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IFdBU19TRVJWRVJfVVJMID0gYGh0dHA6Ly8ke3Byb2Nlc3MuZW52LldBU19TRVJWRVJfSVAgfHwgJzE3Mi4yNS4xLjE3Nyd9YDtcclxuICAgIGNvbnN0IHdhc1NlcnZlclN0YXR1c0VuZHBvaW50ID0gYCR7V0FTX1NFUlZFUl9VUkx9L2FwaS93YXMtc2VydmVyLXN0YXR1c2A7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdhc1NlcnZlclN0YXR1c0VuZHBvaW50KTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ1dBUyDshJzrsoQg7IOB7YOcIOyhsO2ajCDsi6TtjKgnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIldBU19TRVJWRVJfVVJMIiwicHJvY2VzcyIsImVudiIsIldBU19TRVJWRVJfSVAiLCJ3YXNTZXJ2ZXJTdGF0dXNFbmRwb2ludCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/was-server-status.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/was-server-status.js"));
module.exports = __webpack_exports__;

})();