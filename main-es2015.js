(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/weather-widget-main/weather-widget-main.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/weather-widget-main/weather-widget-main.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"divWeatherMain\"> \n    <div class=\"entete\">\n        <span class = \"p-0\"> Météo France</span>\n        <div class=\"px-0\">\n            <!-- {{DateAujoudhui|date:'short'}} -->\n        </div>\n        <div class=\"form-group  \" >\n \n\n            <!-- <input  type='search'   [(ngModel)]=\"city\"   (input)=\"getForcecastServiceByCity()\"  placeholder=\" Ville\"> -->\n            <input  type='search'  [(ngModel)]=\"city\" placeholder=\" Ville\">\n\n            <!-- <button class=\"btn btn-secondary\" type=\"button\" (click)=\"saveForm()\" >Search</button> -->\n            <!-- <button class=\"btn btn-secondary\" type=\"button\" (click)=\"getForcecastServiceByCity($event)\" >Search</button> -->\n            <!-- <button class=\"btn btn-secondary\" type=\"button\"  >Search</button> -->\n    \n            <button class = \"buttonSearch\"    (click)=\"getForcecastServiceByCity()\">\n                <i class=\"fa-solid fa-magnifying-glass loup\"></i>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"row part1\">\n        <div class=\"col-6 p1-col-g\">\n            <div *ngIf=\"!WeatherData.isDay\" class=\"weatherWidgetRow\">\n                <i class=\"fas fa-3x fa-moon moon\"></i>  \n            </div>   \n            <div *ngIf=\"isClouds && WeatherData.isDay\" class=\" isClouds \">\n                <i class=\"fas fa-3x fa-sun sun \"></i>  \n                <i class=\"fas fa-cloud fa-3x cloud\"></i>\n            </div>\n            <div *ngIf=\"isClear && WeatherData.isDay\" class=\"weatherWidgetRow \">\n                <i class=\"fas fa-3x fa-sun sun \"></i>  \n            </div>\n            <div *ngIf=\"isRain && WeatherData.isDay\" class=\"rain\">  \n                <i class=\"fa-solid fa-2x fa-cloud cloudDark\"></i>                      \n                <div class=\"droplet\">\n                    <span style=\"--i:12\"> </span>\n                    <span style=\"--i:15\"> </span>\n                    <span style=\"--i:17\"> </span>\n                </div>\n            </div>\n            <div class=\"weatherTodayDescription py-3\" >{{WeatherData.weather.description}}</div>\n        </div>\n        <div class=\"col-6 p1-col-d weatherToday\">\n            <div class = \"name \" >{{WeatherData.name}},</div>\n            {{DateAujoudhui|date:'mediumDate'}}, {{DateAujoudhui|date:'shortTime'}}\n         \n            <div class = \"tempcel my-2\" >\n                <i class=\"fa fa-1x fa-thermometer-full\" aria-hidden=\"true\"></i>\n                {{WeatherData.temp_celcius}}°\n            </div>\n        </div>\n    </div>\n\n\n\n    <!-- <div class=\"weatherTodayDetails\" style=\"font-size: 32px;margin-top: 5px;\"> -->\n    <div class=\"container\" >\n        <div class=\"row details \" >\n            <div class=\"col col-g  \">\n                <div class=\"row r1  \">\n                    <div class=\"col r1-col-g\"  >\n                       \n                        <!-- <i class=\"fa fa-check\" aria-hidden=\"true\"></i> -->\n\n                        <!-- <i class=\"fa-thin fa-sunset\"></i> -->\n                        <!-- <i class=\"fa-sharp fa-solid fa-sunset\"></i> -->\n                        sunrise\n                    </div>\n                    <!-- <div class=\"col-4 r1-col-d\" style=\"background-color: rgb(255, 98, 0);\"> -->\n                    <div class=\"col-4 r1-col-d\"  > \n                        {{WeatherData.sunrise_time}}  \n                    </div>\n                </div>\n                <div class=\"row r1  \">\n                    <div class=\"col r1-col-g\"  >\n                        <!-- <i class=\"fa fa-thermometer-full\" aria-hidden=\"true\"></i> -->\n                        <i class=\"fa-solid fa-temperature-three-quarters\"></i>\n                        T° max/min\n                    \n\n                    </div>\n                    <div class=\"col-4 r1-col-d\" >\n                        {{WeatherData.temp_max}}°/{{WeatherData.temp_min}}°  \n                    </div>\n                </div>\n                <!-- <div class=\"row r1\">\n                    <div class=\"col r1-col-g\" style=\"background-color: rgb(255, 0, 38);\">\n                        Vent\n                    </div>\n                    <div class=\"col-4 r1-col-d\" style=\"background-color: rgb(255, 98, 0);\">\n                        {{WeatherData.wind.speed}} Km/h\n                    </div>\n                </div> -->\n            </div>\n            <div class=\"col col-d\">\n                <div class=\"row r1\">\n                    <div class=\"col r1-col-g\"  >\n                        sunset\n                    </div>\n                    <div class=\"col-4 r1-col-d\"  >\n                        {{WeatherData.sunset_time}}\n                    </div>\n                </div>\n                <!-- <div class=\"row r1\">\n                    <div class=\"col r1-col-g\" style=\"background-color: rgb(255, 0, 234);\">\n                        T°.ressentie \n                    </div>\n                    <div class=\"col-4 r1-col-d\" style=\"background-color: rgb(144, 0, 255);\">\n                        {{WeatherData.temp_feels_like}}° \n                    </div>\n                </div> -->\n                <div class=\"row r1\">\n                    <div class=\"col r1-col-g\"  >\n                        <i class=\"fa-solid fa-wind\"></i>\n                        Vent\n                    </div>\n                    <div class=\"col-4 r1-col-d\"  >\n                        {{WeatherData.wind.speed}} Km/h\n                    </div>\n                </div>\n            </div>\n        </div>\n<!--     \n        <div class=\"details px-5\"  >\n         <p class = \"\">  Temp.ressentie   {{WeatherData.temp_feels_like}}°</p>   \n        </div> -->\n    \n        <!-- <div class=\"details px-5\"  >\n            Humidity  {{WeatherData.main.humidity}}%\n        </div> -->\n          \n        <!-- <ul>\n            <li>\n                <a> T° max/min  {{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°</a>\n            </li>\n            <li>\n                <a> Temp.ressentie  {{WeatherData.temp_feels_like}}°</a>\n            </li>\n            <li>\n                <a> Humidity  {{WeatherData.main.humidity}}%</a>\n            </li>\n        </ul> -->\n    </div>\n\n    <div class=\"forecast\">\n        <ng-container *ngFor = \"let w of weather; index as i\" class = \"ng-container p-5\">\n\n          <table style=\"width:100%\">            \n             <tr >\n                <!-- <td  style=\"background-color: rgb(98, 0, 255)\"> {{w.dt_txt|date:'EEEE':undefined:'fr'}} </td> -->\n                <td class=\"jour\" > {{w.dt_txt|date:'EEEE'}} </td>\n                <!-- <td  class=\"meteo\"  style=\"background-color: rgb(0, 255, 30)\"> -->\n                <td  class=\"meteo\"   >\n            \n                        <div *ngIf=\"w.isClouds\" class=\" isClouds\">\n                            <i class=\"fas fa-2x fa-sun sun \"></i> \n                            <i class=\"fas fa-2x  fa-cloud cloud \"></i>\n                        </div>\n                        <div *ngIf=\"w.isClear\" class=\"isClear\">\n                            <i class=\"fas fa-2x fa-sun sun m-0 \"></i> \n                        </div>\n                        <div *ngIf=\"w.isRain\" class=\"rain\">  \n                                <i class=\"fa-solid fa-2x fa-cloud cloudDark\"></i>                      \n                            <div class=\"droplet\">\n                                <span style=\"--i:12\"> </span>\n                                <span style=\"--i:15\"> </span>\n                                <span style=\"--i:17\"> </span>\n                            </div>\n\n                            <!-- <i class=\" fas  fa-3x fa-cloud-showers-heavy showers\"></i> -->\n                            <!-- <img src=\"assets/images/pluie.gif\" class=\"pluie \" alt=\"Paris\" > -->   \n                        </div>\n                     <!-- <i class=\"fas fa-3x fa-sun sun \"></i>   -->\n                </td>   \n                <td class = \"temp\">                   \n                     {{w.temp_max}}° \n                </td>                 \n                <td class =\"temp\"> \n                     {{w.temp_min}}° \n                </td>\n \n             </tr>\n    \n          </table>  \n\n          <!-- <table style=\"width:100%\">\n            <tr>\n              <th>Firstname</th>\n              <th>Lastname</th> \n              <th>Age</th>\n            </tr>\n            <tr>\n              <td>Jill</td>\n              <td>Smith</td>\n              <td>50</td>\n            </tr>\n            <tr>\n              <td>Eve</td>\n              <td>Jackson</td>\n              <td>94</td>\n            </tr>\n            <tr>\n              <td>John</td>\n              <td>Doe</td>\n              <td>80</td>\n            </tr>\n          </table> -->\n        \n\n        </ng-container>\n\n    </div>\n</div>\n\n\n<!-- <div class=\"row\" style=\"background-color: red;\" >\n\n    <div class=\"col-6\" style=\"background-color: yellow;\">\n        <div class=\"row\">\n            <div class=\"col-3 col-sm-3 col-lg-3 \" style=\"background-color: rgb(0, 234, 255);\">\n                T° max/min\n            </div>\n            <div class=\"col-3 col-sm-3 col-lg-3  \" style=\"background-color: rgb(81, 0, 255);\">\n                {{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°  \n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"col-6\" style=\"background-color: rgb(0, 255, 153);\">\n\n    </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-weather-widget-main></app-weather-widget-main>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Components/weather-widget-main/weather-widget-main.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/weather-widget-main/weather-widget-main.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#divWeatherMain{\n    margin: 100px auto;\n    display: block;\n    /* width : 320px; */\n    min-width : 320px;\n    max-width: 425px;\n    /* min-height: 700px;\n    max-height: 900px;  */\n    /* height: fit-content; */\n    /* max-height: 100vh; */\n    /* background: url(\"/Weather/assets/images/bg_weather.jpg\"); */\n    background: url('https://hiliasse.github.io/Weather/assets/images/bg_weather.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    color: white;;\n    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\n}\n.entete{\n    display:-webkit-box;\n    display:flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 0;  \n    padding: 0;\n}\n.form-group{\n\n    margin:0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    outline: none;\n}\n.form-group input{\n   \n    margin: 0;\n    outline: none;\n    width: 0;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    color: black;\n    -webkit-transition: all .9s  cubic-bezier(0.18, 0.89, 0.32, 1.25);\n    transition: all .9s  cubic-bezier(0.18, 0.89, 0.32, 1.25);\n}\n.form-group input::-webkit-input-placeholder{\n \n    text-align: center;\n}\n.form-group input::-moz-placeholder{\n \n    text-align: center;\n}\n.form-group input::-ms-input-placeholder{\n \n    text-align: center;\n}\n.form-group input::placeholder{\n \n    text-align: center;\n}\n.form-group:hover input,\n.form-group input :focus,\n.form-group input :valid\n{\n    width: 100px;\n    max-height: 30px;\n    /* background-color: white; */\n    background-color: #2f4858;\n    color: white;\n   \n}\n.buttonSearch  {\n    outline: none;\n    border: none;\n    cursor: pointer;\n    max-height: 30px;\n    background-color: transparent;\n    color: white;\n}\n.part1{\n    margin: 0;\n    padding: 0;\n    padding-top: 15%;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.p1-col-g{\n    min-height: 90px;\n}\n.p1-col-g .isClouds{\n    margin-top: 30px;\n    padding-bottom: 40px;\n}\n.p1-col-g .rain{\n    margin-top: 25px;\n}\n.weatherWidgetRow{\n    display:block;\n    margin:0 auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; \n}\n.sun{\n    margin-top: 10px;\n    color: yellow;\n    -webkit-filter: drop-shadow( 1px 1px 10px yellow);\n            filter: drop-shadow( 1px 1px 10px yellow);\n}\n.moon{\n    margin-top: 10px;\n    color: white;\n    -webkit-filter: drop-shadow( 1px 1px 10px white);\n            filter: drop-shadow( 1px 1px 10px white);\n}\n.cloud{\n    /* color: rgb(104, 175, 197);\n    filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197)); */\n    color: rgb(166, 185, 191);\n    -webkit-filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197));\n            filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197));\n    -webkit-animation-name: cloudMovement;\n            animation-name: cloudMovement;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n.weatherTodayDescription{\n     \n    font-size: clamp(1rem,1vw,1vw);\n    text-align: center;\n}\n.weatherToday{\n    margin: 0;\n    font-size: clamp(1rem,1vw,1.8vw);\n    /* text-align: center; */\n}\n.container{\n    padding: 10px 0; \n}\n.details{\n    margin: 0;\n    font-size: clamp(0.7rem,0.6vw,0.7vw);\n    max-height: 100px ;\n}\n.col-g{\n     padding: 0;\n     padding-left: 15px;\n}\n.col-d{\n    padding: 0;\n    padding-left: 10px;\n    padding-right: 5px;\n}\n.r1{\n    margin: 0; \n    max-height: 40px ;\n}\n.r1-col-g{\n    padding: 0;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.r1-col-d{\n    padding: 0;\n}\n.forecast{\n    margin: 0;\n    border-top: 2px solid rgb(193, 218, 230);\n    padding:  10px 0;\n    /* background-color: rgb(255, 0, 0); */\n    border-bottom: 2px solid rgb(193, 218, 230);\n    \n}\n.jour{\n    width: 30%;\n}\ntd{\n    padding-top: 10px;\n    padding-left: 15px;\n    padding-bottom: 10px;\n    font-size: clamp(0.7rem,1vw,0.8vw);\n    /* background-color: aqua; */\n}\n/* \ntr{\n   background-color: brown;\n} */\n.meteo{\n    width: 30%;\n    padding-left: 0;\n    padding-right: 0;\n}\n.isClouds {\n    position: relative;\n    /* width: 100%; */\n}\n.isClouds .sun {\n    left: 50%;\n    top : 50%;\n    position: absolute;\n    -webkit-transform: translate(-50%,-70%);\n            transform: translate(-50%,-70%);\n    /* background-color: aqua; */\n}\n.isClouds .cloud {\n    \n    left: 50%;\n    top : 50%;\n    position: absolute;\n    -webkit-transform: translate(-30%,-50%);\n            transform: translate(-30%,-50%);\n    /* animation-name: cloudMovement; */\n \n}\n.isClear {\n    position: relative;\n }\n.isClear .sun{\n   position: absolute;\n   left: 50%;\n   top : 50%;\n   -webkit-transform: translate(-50%,-50%);\n           transform: translate(-50%,-50%);\n}\n.showers{\n    color: rgb(96, 108, 111);\n    -webkit-filter: drop-shadow( 1px 1px 5px rgb(55, 88, 97));\n            filter: drop-shadow( 1px 1px 5px rgb(55, 88, 97));\n}\n.temp{\n    text-align: center;\n}\n.rain {\n   position: relative;\n}\n.rain .cloudDark{\n    position: absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    color: rgb(96, 108, 111);\n}\n.droplet{\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    padding-left: 40%;\n    padding-top: 10%;\n    \n}\n.droplet span {\n    position: relative;\n    /* background-color: aqua; */\n    background-color: white;\n    width: 5px;\n    height: 5px;\n    z-index: 1;\n    margin: 0 2px;\n    border-radius: 50%;\n    /* animation-name: rainMovement;\n    animation-iteration-count: infinite;\n    animation-duration: var(20s/--i);\n    animation-timing-function: ease-in-out; */\n    -webkit-animation: rainMovement 2s ease  infinite normal forwards;\n            animation: rainMovement 2s ease  infinite normal forwards;\n    -webkit-animation-duration: calc(15s/var(--i));\n            animation-duration: calc(15s/var(--i));\n   \n \n}\n@-webkit-keyframes rainMovement {\n    0%{\n        -webkit-transform: translateY(0) scale(0.3);\n                transform: translateY(0) scale(0.3);\n        opacity: 1;\n  \n    }\n    70% {\n        -webkit-transform: translateY(20px) scale(0.3);\n                transform: translateY(20px) scale(0.3);\n        /* opacity: 0; */\n    }\n    100%{\n        scale: (0.2);\n        opacity: 0;\n    }\n}\n@keyframes rainMovement {\n    0%{\n        -webkit-transform: translateY(0) scale(0.3);\n                transform: translateY(0) scale(0.3);\n        opacity: 1;\n  \n    }\n    70% {\n        -webkit-transform: translateY(20px) scale(0.3);\n                transform: translateY(20px) scale(0.3);\n        /* opacity: 0; */\n    }\n    100%{\n        scale: (0.2);\n        opacity: 0;\n    }\n}\n@-webkit-keyframes cloudMovement{\n    from{margin-left: -30px;}\n    to{margin-left: 10px;}\n}\n@keyframes cloudMovement{\n    from{margin-left: -30px;}\n    to{margin-left: 10px;}\n}\n@media (max-width : 425px) and  (min-width : 350px){\n    .weatherTodayDescription{\n     \n        font-size:1.2rem;\n    }\n\n    .weatherToday{\n\n        font-size:1.2rem;\n    }\n    \n    .details{\n\n        /* font-size: clamp(0.7rem,0.6vw,0.7vw); */\n        font-size:0.9rem;\n        /* max-height: 100px ; */\n    }\n\n\n    td{\n        font-size:1rem;\n        /* font-size: clamp(0.7rem,1vw,0.8vw); */\n        /* width: 20%; */\n        /* background-color: aqua; */\n    }\n}\n/* @keyframes cloudMovement{\n    from{margin-left: -55px;}\n    to{margin-left: 65px;}\n} */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1tYWluL3dlYXRoZXItd2lkZ2V0LW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7eUJBQ3FCO0lBQ3JCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsOERBQThEO0lBQzlELGtGQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osb0RBQW9EO0FBQ3hEO0FBQ0E7SUFDSSxtQkFBWTtJQUFaLFlBQVk7SUFDWix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTs7SUFFSSxRQUFRO0lBQ1Isb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBR0E7O0lBRUksU0FBUztJQUNULGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlFQUF5RDtJQUF6RCx5REFBeUQ7QUFDN0Q7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFIQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFIQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFIQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFFQTs7OztJQUlJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixZQUFZOztBQUVoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCO0FBSUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpREFBeUM7WUFBekMseUNBQXlDO0FBQzdDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdEQUF3QztZQUF4Qyx3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJOzJEQUN1RDtJQUN2RCx5QkFBeUI7SUFDekIsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1QjtBQUdBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksU0FBUztJQUNULG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFFQTtLQUNLLFVBQVU7S0FDVixrQkFBa0I7QUFDdkI7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBR0E7SUFDSSxTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsMkNBQTJDOztBQUUvQztBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0FBQ2hDO0FBQ0E7OztHQUdHO0FBR0g7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsU0FBUztJQUNULGtCQUFrQjtJQUNsQix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLG1DQUFtQzs7QUFFdkM7QUFFQTtJQUNJLGtCQUFrQjtDQUNyQjtBQUVEO0dBQ0csa0JBQWtCO0dBQ2xCLFNBQVM7R0FDVCxTQUFTO0dBQ1QsdUNBQStCO1dBQS9CLCtCQUErQjtBQUNsQztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlEQUFpRDtZQUFqRCxpREFBaUQ7QUFDckQ7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0dBQ0csa0JBQWtCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCOzs7NkNBR3lDO0lBQ3pDLGlFQUF5RDtZQUF6RCx5REFBeUQ7SUFDekQsOENBQXNDO1lBQXRDLHNDQUFzQzs7O0FBRzFDO0FBRUE7SUFDSTtRQUNJLDJDQUFtQztnQkFBbkMsbUNBQW1DO1FBQ25DLFVBQVU7O0lBRWQ7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO1FBQ3RDLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFVBQVU7SUFDZDtBQUNKO0FBZEE7SUFDSTtRQUNJLDJDQUFtQztnQkFBbkMsbUNBQW1DO1FBQ25DLFVBQVU7O0lBRWQ7SUFDQTtRQUNJLDhDQUFzQztnQkFBdEMsc0NBQXNDO1FBQ3RDLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSSxLQUFLLGtCQUFrQixDQUFDO0lBQ3hCLEdBQUcsaUJBQWlCLENBQUM7QUFDekI7QUFIQTtJQUNJLEtBQUssa0JBQWtCLENBQUM7SUFDeEIsR0FBRyxpQkFBaUIsQ0FBQztBQUN6QjtBQUdBO0lBQ0k7O1FBRUksZ0JBQWdCO0lBQ3BCOztJQUVBOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTs7UUFFSSwwQ0FBMEM7UUFDMUMsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtJQUM1Qjs7O0lBR0E7UUFDSSxjQUFjO1FBQ2Qsd0NBQXdDO1FBQ3hDLGdCQUFnQjtRQUNoQiw0QkFBNEI7SUFDaEM7QUFDSjtBQUdBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvd2VhdGhlci13aWRnZXQtbWFpbi93ZWF0aGVyLXdpZGdldC1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGl2V2VhdGhlck1haW57XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8qIHdpZHRoIDogMzIwcHg7ICovXG4gICAgbWluLXdpZHRoIDogMzIwcHg7XG4gICAgbWF4LXdpZHRoOiA0MjVweDtcbiAgICAvKiBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA5MDBweDsgICovXG4gICAgLyogaGVpZ2h0OiBmaXQtY29udGVudDsgKi9cbiAgICAvKiBtYXgtaGVpZ2h0OiAxMDB2aDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCIvV2VhdGhlci9hc3NldHMvaW1hZ2VzL2JnX3dlYXRoZXIuanBnXCIpOyAqL1xuICAgIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9iZ193ZWF0aGVyLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTs7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbi5lbnRldGV7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDA7ICBcbiAgICBwYWRkaW5nOiAwO1xufVxuLmZvcm0tZ3JvdXB7XG5cbiAgICBtYXJnaW46MDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbiBcbi5mb3JtLWdyb3VwIGlucHV0e1xuICAgXG4gICAgbWFyZ2luOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IGFsbCAuOXMgIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI1KTtcbn1cblxuXG4uZm9ybS1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1ncm91cDpob3ZlciBpbnB1dCxcbi5mb3JtLWdyb3VwIGlucHV0IDpmb2N1cyxcbi5mb3JtLWdyb3VwIGlucHV0IDp2YWxpZFxue1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjQ4NTg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgXG59XG5cbi5idXR0b25TZWFyY2ggIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWF4LWhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiBcblxuLnBhcnQxe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiAxNSU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnAxLWNvbC1ne1xuICAgIG1pbi1oZWlnaHQ6IDkwcHg7XG59XG5cbi5wMS1jb2wtZyAuaXNDbG91ZHN7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuLnAxLWNvbC1nIC5yYWlue1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi53ZWF0aGVyV2lkZ2V0Um93e1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7IFxufVxuXG4uc3Vue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDEwcHggeWVsbG93KTtcbn1cblxuLm1vb257XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCAxMHB4IHdoaXRlKTtcbn1cblxuLmNsb3Vke1xuICAgIC8qIGNvbG9yOiByZ2IoMTA0LCAxNzUsIDE5Nyk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCA1cHggcmdiKDEwNCwgMTc1LCAxOTcpKTsgKi9cbiAgICBjb2xvcjogcmdiKDE2NiwgMTg1LCAxOTEpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDFweCAxcHggNXB4IHJnYigxMDQsIDE3NSwgMTk3KSk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNsb3VkTW92ZW1lbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuLndlYXRoZXJUb2RheURlc2NyaXB0aW9ue1xuICAgICBcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sMXZ3LDF2dyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VhdGhlclRvZGF5e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sMXZ3LDEuOHZ3KTtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAxMHB4IDA7IFxufVxuXG4uZGV0YWlsc3tcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjdyZW0sMC42dncsMC43dncpO1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4IDtcbn1cblxuLmNvbC1ne1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5jb2wtZHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4gICBcbi5yMXtcbiAgICBtYXJnaW46IDA7IFxuICAgIG1heC1oZWlnaHQ6IDQwcHggO1xufVxuLnIxLWNvbC1ne1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yMS1jb2wtZHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5cbi5mb3JlY2FzdHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigxOTMsIDIxOCwgMjMwKTtcbiAgICBwYWRkaW5nOiAgMTBweCAwO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApOyAqL1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTkzLCAyMTgsIDIzMCk7XG4gICAgXG59XG5cbi5qb3Vye1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbnRke1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IGNsYW1wKDAuN3JlbSwxdncsMC44dncpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXG59XG4vKiBcbnRye1xuICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG59ICovXG5cblxuLm1ldGVve1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5pc0Nsb3VkcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xufVxuXG4uaXNDbG91ZHMgLnN1biB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcCA6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNzAlKTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xufVxuXG4uaXNDbG91ZHMgLmNsb3VkIHtcbiAgICBcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wIDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLC01MCUpO1xuICAgIC8qIGFuaW1hdGlvbi1uYW1lOiBjbG91ZE1vdmVtZW50OyAqL1xuIFxufVxuXG4uaXNDbGVhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH1cbiBcbi5pc0NsZWFyIC5zdW57XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBsZWZ0OiA1MCU7XG4gICB0b3AgOiA1MCU7XG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuXG4uc2hvd2Vyc3tcbiAgICBjb2xvcjogcmdiKDk2LCAxMDgsIDExMSk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCA1cHggcmdiKDU1LCA4OCwgOTcpKTtcbn1cblxuLnRlbXB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmFpbiB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYWluIC5jbG91ZERhcmt7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDo1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBjb2xvcjogcmdiKDk2LCAxMDgsIDExMSk7XG59XG5cbi5kcm9wbGV0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogNDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgXG59XG5cbi5kcm9wbGV0IHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDAgMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvKiBhbmltYXRpb24tbmFtZTogcmFpbk1vdmVtZW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKDIwcy8tLWkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAqL1xuICAgIGFuaW1hdGlvbjogcmFpbk1vdmVtZW50IDJzIGVhc2UgIGluZmluaXRlIG5vcm1hbCBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMTVzL3ZhcigtLWkpKTtcbiAgIFxuIFxufVxuXG5Aa2V5ZnJhbWVzIHJhaW5Nb3ZlbWVudCB7XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjMpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICBcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKDAuMyk7XG4gICAgICAgIC8qIG9wYWNpdHk6IDA7ICovXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIHNjYWxlOiAoMC4yKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2xvdWRNb3ZlbWVudHtcbiAgICBmcm9te21hcmdpbi1sZWZ0OiAtMzBweDt9XG4gICAgdG97bWFyZ2luLWxlZnQ6IDEwcHg7fVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoIDogNDI1cHgpIGFuZCAgKG1pbi13aWR0aCA6IDM1MHB4KXtcbiAgICAud2VhdGhlclRvZGF5RGVzY3JpcHRpb257XG4gICAgIFxuICAgICAgICBmb250LXNpemU6MS4ycmVtO1xuICAgIH1cblxuICAgIC53ZWF0aGVyVG9kYXl7XG5cbiAgICAgICAgZm9udC1zaXplOjEuMnJlbTtcbiAgICB9XG4gICAgXG4gICAgLmRldGFpbHN7XG5cbiAgICAgICAgLyogZm9udC1zaXplOiBjbGFtcCgwLjdyZW0sMC42dncsMC43dncpOyAqL1xuICAgICAgICBmb250LXNpemU6MC45cmVtO1xuICAgICAgICAvKiBtYXgtaGVpZ2h0OiAxMDBweCA7ICovXG4gICAgfVxuXG5cbiAgICB0ZHtcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgIC8qIGZvbnQtc2l6ZTogY2xhbXAoMC43cmVtLDF2dywwLjh2dyk7ICovXG4gICAgICAgIC8qIHdpZHRoOiAyMCU7ICovXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXG4gICAgfVxufVxuXG5cbi8qIEBrZXlmcmFtZXMgY2xvdWRNb3ZlbWVudHtcbiAgICBmcm9te21hcmdpbi1sZWZ0OiAtNTVweDt9XG4gICAgdG97bWFyZ2luLWxlZnQ6IDY1cHg7fVxufSAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/Components/weather-widget-main/weather-widget-main.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/weather-widget-main/weather-widget-main.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WeatherWidgetMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetMainComponent", function() { return WeatherWidgetMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/service */ "./src/app/service/service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let WeatherWidgetMainComponent = class WeatherWidgetMainComponent {
    constructor(serviceWeather) {
        this.serviceWeather = serviceWeather;
        this.ForecastData = { city: "", list: "" };
        this.test = ["name", "prenom"];
        // weather : IWeather [] = [] ;
        this.weather = [];
        this.array = [];
        this.datePrecedent = "";
        this.DateAujoudhui = new Date();
        this.dateToday = "";
        this.dateTodayFinal = "";
        this.listDateTemp = [{ date: "", tmin: "", tmax: "" }];
        this.city = "Paris";
        this.tmpMax = "0";
        this.tmpMin = "0";
        this.isClear = false;
        this.isRain = false;
        this.isClouds = false;
        this.alive = true;
    }
    ngOnDestroy() {
        // this.sub.unsubscribe();
        console.log("unsubscribe");
        this.alive = false;
    }
    ngOnInit() {
        this.WeatherData = {
            main: {},
            weather: {},
            wind: {}
        };
        this.getWeatherData();
        this.getForecastData();
    }
    getWeatherData() {
        // fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr')
        // .then(response=>response.json())
        // .then(data=>{this.setWeatherData(data)})
        // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
        // this.setWeatherData(data);
        console.log("ville " + this.city);
        this.serviceWeather.weatherServiceByCity(this.city).subscribe(data => this.setWeatherData(data));
    }
    setWeatherData(data) {
        this.WeatherData = data;
        console.log("setWeatherData");
        console.log(data);
        let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
        let sunriseTime = new Date(this.WeatherData.sys.sunrise * 1000);
        // console.log(" sunsetTime : " + sunsetTime);
        // console.log(" sunriseTime : " + sunriseTime);
        this.WeatherData.sunrise_time = sunriseTime.toLocaleTimeString();
        this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
        // console.log(" sunset_time localtime : " + this.WeatherData.sunset_time );
        // console.log(" sunrise_time localtime : " + this.WeatherData.sunrise_time );
        let currentDate = new Date();
        this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
        this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
        this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
        this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
        this.WeatherData.wind.speed = (this.WeatherData.wind.speed * 3.6).toFixed();
        this.WeatherData.weather.main = this.WeatherData.weather[0].main;
        this.WeatherData.weather.description = this.WeatherData.weather[0].description;
        this.WeatherData.name = this.WeatherData.name;
        switch (this.WeatherData.weather.main) {
            case "Clear":
                this.isClear = true;
                this.isClouds = false;
                this.isRain = false;
                break;
            case "Rain":
                this.isRain = true;
                this.isClouds = false;
                this.isClear = false;
                break;
            case "Clouds":
                this.isClouds = true;
                this.isRain = false;
                this.isClear = false;
                break;
        }
    }
    getForecastData() {
        console.log("test");
        this.sub = this.serviceWeather.forcecastServiceByCity(this.city).subscribe(data => this.setForcecastData(data));
        // this.serviceWeather.getForcecastService()
        //   .subscribe(
        //     data => {  
        //         console.log(data);
        //           for (let i = 0 ; i<40; i++){
        //             if (i == 0){
        //               this.dateToday = data.list[0].dt_txt.slice(0,10);
        //               this.tmpMin = (data.list[0].main.temp_min- 273.15).toFixed()
        //             }
        //             if (this.dateToday == data.list[i].dt_txt.slice(0,10) ) {
        //               if (this.tmpMax <= (data.list[i].main.temp_max- 273.15).toFixed()){
        //                 this.tmpMax = (data.list[i].main.temp_max- 273.15).toFixed();
        //                 this.listDateTemp.push({
        //                   date: this.dateToday,
        //                   tmin: this.tmpMin,
        //                   tmax: this.tmpMax
        //                 })
        //               }
        //             }else {
        //               this.dateToday = data.list[i].dt_txt.slice(0,10);
        //               this.tmpMax = (data.list[i].main.temp_max- 273.15).toFixed();
        //               this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed();
        //             }
        //             if( this.datePrecedent != data.list[i].dt_txt.slice(0,10)){               
        //               console.log("diff")
        //               this.weather.push({
        //                 name: data.city.name,
        //                 dt_txt: data.list[i].dt_txt.slice(0, 10),
        //                 date: formatDate(data.list[i].dt_txt.slice(0, 10), 'dd/MM/yyyy', 'en-FR'),
        //                 humidity: data.list[i].main.humidity,
        //                 temp_max: this.tmpMax,
        //                 temp_min: this.tmpMin,
        //                 weather_main: data.list[i].weather[0].main,
        //                 weather_description: data.list[i].weather[0].description,
        //                 wind: data.list[i].wind.speed,
        //                 isClear: false,
        //                 isClouds: false,
        //                 isRain: false
        //               })
        //             }
        //               this.datePrecedent = data.list[i].dt_txt.slice(0,10);
        //           }   
        //            console.log(this.weather);
        //            console.log(this.listDateTemp);
        //            this.datamatch();
        //     }
        //   )
    }
    setForcecastData(data) {
        // this.array = JSON.parse(JSON.stringify(data));
        console.log(data);
        for (let i = 0; i < 40; i++) {
            if (i == 0) {
                this.dateToday = data.list[0].dt_txt.slice(0, 10);
                this.tmpMin = (data.list[0].main.temp_min - 273.15).toFixed();
                // console.log("boucle 0");
            }
            if (this.dateToday == data.list[i].dt_txt.slice(0, 10)) {
                // this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed(1);
                if (this.tmpMax <= (data.list[i].main.temp_max - 273.15).toFixed()) {
                    this.tmpMax = (data.list[i].main.temp_max - 273.15).toFixed();
                    // if (this.tmpMin >= (data.list[i].main.temp_min- 273.15).toFixed(1))
                    // { this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed(1); }
                    this.listDateTemp.push({
                        date: this.dateToday,
                        tmin: this.tmpMin,
                        tmax: this.tmpMax
                    });
                    // console.log("dateToday :" + this.dateToday);
                    // console.log("tmpmax :" + this.tmpMax);
                    // console.log("tmpmin :" + this.tmpMin);
                }
                // else if (this.tmpMin) {
                // }
            }
            else {
                this.dateToday = data.list[i].dt_txt.slice(0, 10);
                this.tmpMax = (data.list[i].main.temp_max - 273.15).toFixed();
                this.tmpMin = (data.list[i].main.temp_min - 273.15).toFixed();
                // console.log("dateToday else :" + this.dateToday);
                // console.log("tmpmax else:" + this.tmpMax);
                // console.log("tmpmin else:" + this.tmpMin);
            }
            if (this.datePrecedent != data.list[i].dt_txt.slice(0, 10)) {
                console.log("diff");
                // console.log(this.weather[i].temp_max )
                this.weather.push({
                    name: data.city.name,
                    // dt_txt: data.list[i].dt_txt, 
                    dt_txt: data.list[i].dt_txt.slice(0, 10),
                    date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(data.list[i].dt_txt.slice(0, 10), 'dd/MM/yyyy', 'en-FR'),
                    humidity: data.list[i].main.humidity,
                    // temp_max: data.list[i].main.temp_max,
                    // temp_min: data.list[i].main.temp_min,
                    // temp_max: (data.list[i].main.temp_max- 273.15).toFixed(),
                    // temp_min: (data.list[i].main.temp_min - 273.15).toFixed(),
                    // temp_max: this.tmpMax.slice(0, 2),
                    // temp_min: this.tmpMin.slice(0, 2),
                    temp_max: this.tmpMax,
                    temp_min: this.tmpMin,
                    weather_main: data.list[i].weather[0].main,
                    weather_description: data.list[i].weather[0].description,
                    wind: data.list[i].wind.speed,
                    isClear: false,
                    isClouds: false,
                    isRain: false
                });
            }
            this.datePrecedent = data.list[i].dt_txt.slice(0, 10);
        }
        console.log(this.weather);
        //  console.log(this.weather[i].weather);
        console.log(this.listDateTemp);
        this.datamatch();
    }
    datamatch() {
        // console.log("datamatch")
        for (let w of this.weather) {
            switch (w.weather_main) {
                case "Clear":
                    w.isClear = true;
                    w.isClouds = false;
                    w.isRain = false;
                    break;
                case "Rain":
                    w.isRain = true;
                    w.isClouds = false;
                    w.isClear = false;
                    break;
                case "Clouds":
                    w.isClouds = true;
                    w.isRain = false;
                    w.isClear = false;
                    break;
            }
            console.log(w);
            for (let j = 0; j < this.listDateTemp.length; j++) {
                if (w.dt_txt == this.listDateTemp[j].date) {
                    // console.log("same date :" + w.date)
                    // w.temp_max = this.listDateTemp[j].tmax.slice(0,2);
                    w.temp_max = this.listDateTemp[j].tmax;
                    // w.temp_max = this.listDateTemp[j].tmax.replace(".","");
                }
            }
        }
        for (let i = 0; i < 1; i++) {
            this.weather[i].temp_min = this.WeatherData.temp_min;
        }
    }
    // saveForm(){
    //   let location = {
    //     city: this.city,
    //     state: this.code
    //   };
    //   localStorage.setItem('location', JSON.stringify(location));
    //   console.log("search");   
    //   console.log(event);  
    //   console.log(location);   
    // }
    getForcecastServiceByCity() {
        /* on reinitialise tableau weather*/
        this.weather = [];
        console.log("getForcecastServiceByCity");
        console.log(this.city);
        // console.log(event.target);
        this.getWeatherData();
        this.serviceWeather.forcecastServiceByCity(this.city).subscribe(data => {
            console.log(data),
                this.setForcecastData(data);
        });
    }
};
WeatherWidgetMainComponent.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
];
WeatherWidgetMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-widget-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/weather-widget-main/weather-widget-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-widget-main.component.css */ "./src/app/Components/weather-widget-main/weather-widget-main.component.css")).default]
    })
], WeatherWidgetMainComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-weather-widget';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/weather-widget-main/weather-widget-main.component */ "./src/app/Components/weather-widget-main/weather-widget-main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8__);









Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _Components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_3__["WeatherWidgetMainComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        // providers: [],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__["LOCALE_ID"], useValue: "fr-FR" }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/service/service.ts":
/*!************************************!*\
  !*** ./src/app/service/service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.url = 'https://api.openweathermap.org/data/2.5/forecast?q=Paris&cnt=40&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
        this.url_forecast_api = 'https://api.openweathermap.org/data/2.5/forecast?q=';
        this.url_forecast_city = 'Paris';
        this.url_forecast_cle = '&cnt=40&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
        this.url_weather_api = 'https://api.openweathermap.org/data/2.5/weather?q=';
        this.url_weather_city = 'Paris';
        this.url_weather_cle = '&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
    }
    weatherServiceByCity(city) {
        return this.http.get(this.url_weather_api + city + this.url_weather_cle);
    }
    forcecastServiceByCity(city) {
        // return this.http.get<any >(this.url_start + this.url_city + this.url_end)
        return this.http.get(this.url_forecast_api + city + this.url_forecast_cle);
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hiliasse\Documents\Angular\Angular-Weather-Widget-master\angular-weather-widget\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map