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
exports.id = "app/api/sendEmail/route";
exports.ids = ["app/api/sendEmail/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_andrey_dev_my_project_src_app_api_sendEmail_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/sendEmail/route.js */ \"(rsc)/./src/app/api/sendEmail/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sendEmail/route\",\n        pathname: \"/api/sendEmail\",\n        filename: \"route\",\n        bundlePath: \"app/api/sendEmail/route\"\n    },\n    resolvedPagePath: \"/Users/andrey/dev/my-project/src/app/api/sendEmail/route.js\",\n    nextConfigOutput,\n    userland: _Users_andrey_dev_my_project_src_app_api_sendEmail_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sendEmail/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kRW1haWwlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlbmRFbWFpbCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlbmRFbWFpbCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFuZHJleSUyRmRldiUyRm15LXByb2plY3QlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYW5kcmV5JTJGZGV2JTJGbXktcHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNXO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JnZ3JhbnQvPzgxNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FuZHJleS9kZXYvbXktcHJvamVjdC9zcmMvYXBwL2FwaS9zZW5kRW1haWwvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmRFbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmRFbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZEVtYWlsL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FuZHJleS9kZXYvbXktcHJvamVjdC9zcmMvYXBwL2FwaS9zZW5kRW1haWwvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2VuZEVtYWlsL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/sendEmail/route.js":
/*!****************************************!*\
  !*** ./src/app/api/sendEmail/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nasync function POST(req) {\n    try {\n        const { data } = await req.json();\n        const smtpTransport = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            host: \"smtp.yandex.ru\",\n            port: 465,\n            secure: true,\n            auth: {\n                user: \"orggrant@yandex.ru\",\n                pass: \"vylfbattkgsddaaz\"\n            },\n            tls: {\n                rejectUnauthorized: false\n            }\n        }, {\n            from: \"orggrant <orggrant@yandex.ru\"\n        });\n        const mailOption = {\n            from: \"orggrant@yandex.ru\",\n            to: \"orggrant@yandex.ru\",\n            subject: `Заявка с сайта orggrant.ru от ${data.name}`,\n            text: `\n      Имя: ${data.name},\n      Телефон: ${data.phone},\n      E-mail: ${data.email},\n    `\n        };\n        await smtpTransport.sendMail(mailOption);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Email Sent Successfully\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Failed to Send Email\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kRW1haWwvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1A7QUFFN0IsZUFBZUUsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBQy9CLE1BQU1DLGdCQUFnQkwsdURBQTBCLENBQzlDO1lBQ0VPLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLE1BQU07Z0JBQ0pDLE1BQU07Z0JBQ05DLE1BQU07WUFDUjtZQUNBQyxLQUFLO2dCQUFFQyxvQkFBb0I7WUFBTTtRQUNuQyxHQUNBO1lBQ0VDLE1BQU07UUFDUjtRQUdGLE1BQU1DLGFBQWE7WUFDakJELE1BQU07WUFDTkUsSUFBSTtZQUNKQyxTQUFTLENBQUMsOEJBQThCLEVBQUVmLEtBQUtnQixJQUFJLENBQUMsQ0FBQztZQUNyREMsTUFBTSxDQUFDO1dBQ0YsRUFBRWpCLEtBQUtnQixJQUFJLENBQUM7ZUFDUixFQUFFaEIsS0FBS2tCLEtBQUssQ0FBQztjQUNkLEVBQUVsQixLQUFLbUIsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7UUFDRDtRQUVBLE1BQU1qQixjQUFja0IsUUFBUSxDQUFDUDtRQUU3QixPQUFPakIsa0ZBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRW9CLFNBQVM7UUFBMEIsR0FDckM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU8zQixrRkFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFb0IsU0FBUztRQUF1QixHQUNsQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL29yZ2dyYW50Ly4vc3JjL2FwcC9hcGkvc2VuZEVtYWlsL3JvdXRlLmpzPzViZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3Qgc210cFRyYW5zcG9ydCA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KFxuICAgICAge1xuICAgICAgICBob3N0OiBcInNtdHAueWFuZGV4LnJ1XCIsXG4gICAgICAgIHBvcnQ6IDQ2NSxcbiAgICAgICAgc2VjdXJlOiB0cnVlLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgdXNlcjogXCJvcmdncmFudEB5YW5kZXgucnVcIixcbiAgICAgICAgICBwYXNzOiBcInZ5bGZiYXR0a2dzZGRhYXpcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGxzOiB7IHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyb206IFwib3JnZ3JhbnQgPG9yZ2dyYW50QHlhbmRleC5ydVwiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBtYWlsT3B0aW9uID0ge1xuICAgICAgZnJvbTogXCJvcmdncmFudEB5YW5kZXgucnVcIixcbiAgICAgIHRvOiBcIm9yZ2dyYW50QHlhbmRleC5ydVwiLFxuICAgICAgc3ViamVjdDogYNCX0LDRj9Cy0LrQsCDRgSDRgdCw0LnRgtCwIG9yZ2dyYW50LnJ1INC+0YIgJHtkYXRhLm5hbWV9YCxcbiAgICAgIHRleHQ6IGBcbiAgICAgINCY0LzRjzogJHtkYXRhLm5hbWV9LFxuICAgICAg0KLQtdC70LXRhNC+0L06ICR7ZGF0YS5waG9uZX0sXG4gICAgICBFLW1haWw6ICR7ZGF0YS5lbWFpbH0sXG4gICAgYCxcbiAgICB9O1xuXG4gICAgYXdhaXQgc210cFRyYW5zcG9ydC5zZW5kTWFpbChtYWlsT3B0aW9uKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogXCJFbWFpbCBTZW50IFN1Y2Nlc3NmdWxseVwiIH0sXG4gICAgICB7IHN0YXR1czogMjAwIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gU2VuZCBFbWFpbFwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibm9kZW1haWxlciIsIlBPU1QiLCJyZXEiLCJkYXRhIiwianNvbiIsInNtdHBUcmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInRscyIsInJlamVjdFVuYXV0aG9yaXplZCIsImZyb20iLCJtYWlsT3B0aW9uIiwidG8iLCJzdWJqZWN0IiwibmFtZSIsInRleHQiLCJwaG9uZSIsImVtYWlsIiwic2VuZE1haWwiLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/sendEmail/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.js&appDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fandrey%2Fdev%2Fmy-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();