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
exports.id = "pages/api/products/list";
exports.ids = ["pages/api/products/list"];
exports.modules = {

/***/ "(api)/./pages/api/products/list.js":
/*!************************************!*\
  !*** ./pages/api/products/list.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/products/list.js\nasync function handler(req, res) {\n    const WAS_SERVER_URL = `http://${process.env.WAS_SERVER_IP || \"172.25.1.177\"}`;\n    const productListEndpoint = `${WAS_SERVER_URL}/api/products/list`;\n    try {\n        const response = await fetch(productListEndpoint);\n        if (!response.ok) {\n            throw new Error(\"Echo 서버로부터 제품 목록을 불러오는데 실패했습니다.\");\n        }\n        const products = await response.json();\n        res.status(200).json(products);\n    } catch (error) {\n        console.error(\"제품 목록 조회 중 오류:\", error);\n        res.status(500).json({\n            message: \"제품 목록을 조회하는 데 실패했습니다.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQTZCO0FBQ2QsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxjQUFjLEdBQUcsQ0FBQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLElBQUksY0FBYyxDQUFDLENBQUM7SUFDNUUsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUFFSixjQUFjLENBQUMsa0JBQWtCLENBQUM7SUFFakUsSUFBSTtRQUNGLE1BQU1LLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLG1CQUFtQixDQUFDO1FBQ2pELElBQUksQ0FBQ0MsUUFBUSxDQUFDRSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO1FBQ3RDWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBQztJQUNqQyxFQUFFLE9BQU9HLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDdkNiLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFBRUksT0FBTyxFQUFFLHVCQUF1QjtTQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QwMS8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9saXN0LmpzPzE5YjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3Byb2R1Y3RzL2xpc3QuanNcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IFdBU19TRVJWRVJfVVJMID0gYGh0dHA6Ly8ke3Byb2Nlc3MuZW52LldBU19TRVJWRVJfSVAgfHwgJzE3Mi4yNS4xLjE3Nyd9YDtcclxuICAgIGNvbnN0IHByb2R1Y3RMaXN0RW5kcG9pbnQgPSBgJHtXQVNfU0VSVkVSX1VSTH0vYXBpL3Byb2R1Y3RzL2xpc3RgO1xyXG4gIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9kdWN0TGlzdEVuZHBvaW50KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRWNobyDshJzrsoTroZzrtoDthLAg7KCc7ZKIIOuqqeuhneydhCDrtojrn6zsmKTripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukLicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfsoJztkogg66qp66GdIOyhsO2ajCDspJEg7Jik66WYOicsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAn7KCc7ZKIIOuqqeuhneydhCDsobDtmoztlZjripQg642wIOyLpO2MqO2WiOyKteuLiOuLpC4nIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIldBU19TRVJWRVJfVVJMIiwicHJvY2VzcyIsImVudiIsIldBU19TRVJWRVJfSVAiLCJwcm9kdWN0TGlzdEVuZHBvaW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJwcm9kdWN0cyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/list.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/list.js"));
module.exports = __webpack_exports__;

})();