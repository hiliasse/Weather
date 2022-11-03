function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/weather-widget-main/weather-widget-main.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/weather-widget-main/weather-widget-main.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWeatherWidgetMainWeatherWidgetMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"divWeatherMain\"> \n    <div class=\"entete\">\n        <span class = \"p-0\"> Météo France</span>\n        <div class=\"px-0\">\n            <!-- {{DateAujoudhui|date:'short'}} -->\n        </div>\n        <div class=\"form-group  \" >\n \n\n            <!-- <input  type='search'   [(ngModel)]=\"city\"   (input)=\"getForcecastServiceByCity()\"  placeholder=\" Ville\"> -->\n            <input  type='search'  [(ngModel)]=\"city\" placeholder=\" Ville\">\n\n            <!-- <button class=\"btn btn-secondary\" type=\"button\" (click)=\"saveForm()\" >Search</button> -->\n            <!-- <button class=\"btn btn-secondary\" type=\"button\" (click)=\"getForcecastServiceByCity($event)\" >Search</button> -->\n            <!-- <button class=\"btn btn-secondary\" type=\"button\"  >Search</button> -->\n    \n            <button class = \"buttonSearch\"    (click)=\"getForcecastServiceByCity()\">\n                <i class=\"fa-solid fa-magnifying-glass loup\"></i>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"row part1\">\n        <div class=\"col-6 p1-col-g\">\n            <div *ngIf=\"!WeatherData.isDay\" class=\"weatherWidgetRow\">\n                <i class=\"fas fa-3x fa-moon moon\"></i>  \n            </div>   \n            <div *ngIf=\"isClouds && WeatherData.isDay\" class=\" isClouds \">\n                <i class=\"fas fa-3x fa-sun sun \"></i>  \n                <i class=\"fas fa-cloud fa-3x cloud\"></i>\n            </div>\n            <div *ngIf=\"isClear && WeatherData.isDay\" class=\"weatherWidgetRow \">\n                <i class=\"fas fa-3x fa-sun sun \"></i>  \n            </div>\n            <div *ngIf=\"isRain && WeatherData.isDay\" class=\"rain\">  \n                <i class=\"fa-solid fa-2x fa-cloud cloudDark\"></i>                      \n                <div class=\"droplet\">\n                    <span style=\"--i:12\"> </span>\n                    <span style=\"--i:15\"> </span>\n                    <span style=\"--i:17\"> </span>\n                </div>\n            </div>\n            <div class=\"weatherTodayDescription py-3\" >{{WeatherData.weather.description}}</div>\n        </div>\n        <div class=\"col-6 p1-col-d weatherToday\">\n            <div class = \"name \" >{{WeatherData.name}},</div>\n            {{DateAujoudhui|date:'mediumDate'}}, {{DateAujoudhui|date:'shortTime'}}\n         \n            <div class = \"tempcel my-2\" >\n                <i class=\"fa fa-1x fa-thermometer-full\" aria-hidden=\"true\"></i>\n                {{WeatherData.temp_celcius}}°\n            </div>\n        </div>\n    </div>\n\n\n\n    <!-- <div class=\"weatherTodayDetails\" style=\"font-size: 32px;margin-top: 5px;\"> -->\n    <div class=\"container\" >\n        <div class=\"row details \" >\n            <div class=\"col col-g  \">\n                <div class=\"row r1  \">\n                    <div class=\"col r1-col-g\"  >\n                       \n                        <!-- <i class=\"fa fa-check\" aria-hidden=\"true\"></i> -->\n\n                        <!-- <i class=\"fa-thin fa-sunset\"></i> -->\n                        <!-- <i class=\"fa-sharp fa-solid fa-sunset\"></i> -->\n                        sunrise\n                    </div>\n                    <!-- <div class=\"col-4 r1-col-d\" style=\"background-color: rgb(255, 98, 0);\"> -->\n                    <div class=\"col-4 r1-col-d\"  > \n                        {{WeatherData.sunrise_time}}  \n                    </div>\n                </div>\n                <div class=\"row r1  \">\n                    <div class=\"col r1-col-g\"  >\n                        <!-- <i class=\"fa fa-thermometer-full\" aria-hidden=\"true\"></i> -->\n                        <i class=\"fa-solid fa-temperature-three-quarters\"></i>\n                        T° max/min\n                    \n\n                    </div>\n                    <div class=\"col-4 r1-col-d\" >\n                        {{WeatherData.temp_max}}°/{{WeatherData.temp_min}}°  \n                    </div>\n                </div>\n                <!-- <div class=\"row r1\">\n                    <div class=\"col r1-col-g\" style=\"background-color: rgb(255, 0, 38);\">\n                        Vent\n                    </div>\n                    <div class=\"col-4 r1-col-d\" style=\"background-color: rgb(255, 98, 0);\">\n                        {{WeatherData.wind.speed}} Km/h\n                    </div>\n                </div> -->\n            </div>\n            <div class=\"col col-d\">\n                <div class=\"row r1\">\n                    <div class=\"col r1-col-g\"  >\n                        sunset\n                    </div>\n                    <div class=\"col-4 r1-col-d\"  >\n                        {{WeatherData.sunset_time}}\n                    </div>\n                </div>\n                <!-- <div class=\"row r1\">\n                    <div class=\"col r1-col-g\" style=\"background-color: rgb(255, 0, 234);\">\n                        T°.ressentie \n                    </div>\n                    <div class=\"col-4 r1-col-d\" style=\"background-color: rgb(144, 0, 255);\">\n                        {{WeatherData.temp_feels_like}}° \n                    </div>\n                </div> -->\n                <div class=\"row r1\">\n                    <div class=\"col r1-col-g\"  >\n                        <i class=\"fa-solid fa-wind\"></i>\n                        Vent\n                    </div>\n                    <div class=\"col-4 r1-col-d\"  >\n                        {{WeatherData.wind.speed}} Km/h\n                    </div>\n                </div>\n            </div>\n        </div>\n<!--     \n        <div class=\"details px-5\"  >\n         <p class = \"\">  Temp.ressentie   {{WeatherData.temp_feels_like}}°</p>   \n        </div> -->\n    \n        <!-- <div class=\"details px-5\"  >\n            Humidity  {{WeatherData.main.humidity}}%\n        </div> -->\n          \n        <!-- <ul>\n            <li>\n                <a> T° max/min  {{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°</a>\n            </li>\n            <li>\n                <a> Temp.ressentie  {{WeatherData.temp_feels_like}}°</a>\n            </li>\n            <li>\n                <a> Humidity  {{WeatherData.main.humidity}}%</a>\n            </li>\n        </ul> -->\n    </div>\n\n    <div class=\"forecast\">\n        <ng-container *ngFor = \"let w of weather; index as i\" class = \"ng-container p-5\">\n\n          <table style=\"width:100%\">            \n             <tr >\n                <!-- <td  style=\"background-color: rgb(98, 0, 255)\"> {{w.dt_txt|date:'EEEE':undefined:'fr'}} </td> -->\n                <td class=\"jour\" > {{w.dt_txt|date:'EEEE'}} </td>\n                <!-- <td  class=\"meteo\"  style=\"background-color: rgb(0, 255, 30)\"> -->\n                <td  class=\"meteo\"   >\n            \n                        <div *ngIf=\"w.isClouds\" class=\" isClouds\">\n                            <i class=\"fas fa-2x fa-sun sun \"></i> \n                            <i class=\"fas fa-2x  fa-cloud cloud \"></i>\n                        </div>\n                        <div *ngIf=\"w.isClear\" class=\"isClear\">\n                            <i class=\"fas fa-2x fa-sun sun m-0 \"></i> \n                        </div>\n                        <div *ngIf=\"w.isRain\" class=\"rain\">  \n                                <i class=\"fa-solid fa-2x fa-cloud cloudDark\"></i>                      \n                            <div class=\"droplet\">\n                                <span style=\"--i:12\"> </span>\n                                <span style=\"--i:15\"> </span>\n                                <span style=\"--i:17\"> </span>\n                            </div>\n\n                            <!-- <i class=\" fas  fa-3x fa-cloud-showers-heavy showers\"></i> -->\n                            <!-- <img src=\"assets/images/pluie.gif\" class=\"pluie \" alt=\"Paris\" > -->   \n                        </div>\n                     <!-- <i class=\"fas fa-3x fa-sun sun \"></i>   -->\n                </td>   \n                <td class = \"temp\">                   \n                     {{w.temp_max}}° \n                </td>                 \n                <td class =\"temp\"> \n                     {{w.temp_min}}° \n                </td>\n \n             </tr>\n    \n          </table>  \n\n          <!-- <table style=\"width:100%\">\n            <tr>\n              <th>Firstname</th>\n              <th>Lastname</th> \n              <th>Age</th>\n            </tr>\n            <tr>\n              <td>Jill</td>\n              <td>Smith</td>\n              <td>50</td>\n            </tr>\n            <tr>\n              <td>Eve</td>\n              <td>Jackson</td>\n              <td>94</td>\n            </tr>\n            <tr>\n              <td>John</td>\n              <td>Doe</td>\n              <td>80</td>\n            </tr>\n          </table> -->\n        \n\n        </ng-container>\n\n    </div>\n</div>\n\n\n<!-- <div class=\"row\" style=\"background-color: red;\" >\n\n    <div class=\"col-6\" style=\"background-color: yellow;\">\n        <div class=\"row\">\n            <div class=\"col-3 col-sm-3 col-lg-3 \" style=\"background-color: rgb(0, 234, 255);\">\n                T° max/min\n            </div>\n            <div class=\"col-3 col-sm-3 col-lg-3  \" style=\"background-color: rgb(81, 0, 255);\">\n                {{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°  \n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"col-6\" style=\"background-color: rgb(0, 255, 153);\">\n\n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-weather-widget-main></app-weather-widget-main>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Components/weather-widget-main/weather-widget-main.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/Components/weather-widget-main/weather-widget-main.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWeatherWidgetMainWeatherWidgetMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#divWeatherMain{\n    margin: 100px auto;\n    display: block;\n    width : 320px;\n    max-height: 100vh;\n    background: url(\"/assets/images/bg_weather.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    color: white;;\n    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\n}\n.entete{\n    display:-webkit-box;\n    display:flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 0;  \n    padding: 0;\n}\n.form-group{\n\n    margin:0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    outline: none;\n}\n.form-group input{\n   \n    margin: 0;\n    outline: none;\n    width: 0;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    color: black;\n    -webkit-transition: all .9s  cubic-bezier(0.18, 0.89, 0.32, 1.25);\n    transition: all .9s  cubic-bezier(0.18, 0.89, 0.32, 1.25);\n}\n.form-group input::-webkit-input-placeholder{\n \n    text-align: center;\n}\n.form-group input::-moz-placeholder{\n \n    text-align: center;\n}\n.form-group input::-ms-input-placeholder{\n \n    text-align: center;\n}\n.form-group input::placeholder{\n \n    text-align: center;\n}\n.form-group:hover input,\n.form-group input :focus,\n.form-group input :valid\n{\n    width: 100px;\n    max-height: 30px;\n    /* background-color: white; */\n    background-color: #2f4858;\n    color: white;\n   \n}\n.buttonSearch  {\n    outline: none;\n    border: none;\n    cursor: pointer;\n    max-height: 30px;\n    background-color: transparent;\n    color: white;\n}\n.part1{\n    margin: 0;\n    padding: 0;\n    padding-top: 15%;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.p1-col-g{\n    min-height: 90px;\n}\n.p1-col-g .isClouds{\n    margin-top: 30px;\n    padding-bottom: 40px;\n}\n.p1-col-g .rain{\n    margin-top: 25px;\n}\n.weatherWidgetRow{\n    display:block;\n    margin:0 auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content; \n}\n.sun{\n    margin-top: 10px;\n    color: yellow;\n    -webkit-filter: drop-shadow( 1px 1px 10px yellow);\n            filter: drop-shadow( 1px 1px 10px yellow);\n}\n.moon{\n    margin-top: 10px;\n    color: white;\n    -webkit-filter: drop-shadow( 1px 1px 10px white);\n            filter: drop-shadow( 1px 1px 10px white);\n}\n.cloud{\n    /* color: rgb(104, 175, 197);\n    filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197)); */\n    color: rgb(166, 185, 191);\n    -webkit-filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197));\n            filter: drop-shadow( 1px 1px 5px rgb(104, 175, 197));\n    -webkit-animation-name: cloudMovement;\n            animation-name: cloudMovement;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n.weatherTodayDescription{\n     \n    font-size: clamp(1rem,1vw,1vw);\n    text-align: center;\n}\n.weatherToday{\n    margin: 0;\n    font-size: clamp(1rem,1vw,1.8vw);\n    /* text-align: center; */\n}\n.container{\n    padding: 10px 0; \n}\n.details{\n    margin: 0;\n    font-size: clamp(0.7rem,0.6vw,0.7vw);\n    max-height: 100px ;\n}\n.col-g{\n     padding: 0;\n     padding-left: 15px;\n}\n.col-d{\n    padding: 0;\n    padding-left: 10px;\n    padding-right: 5px;\n}\n.r1{\n    margin: 0; \n    max-height: 40px ;\n}\n.r1-col-g{\n    padding: 0;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.r1-col-d{\n    padding: 0;\n}\n.forecast{\n    margin: 0;\n    border-top: 2px solid rgb(193, 218, 230);\n    padding:  10px 0;\n    /* background-color: rgb(255, 0, 0); */\n    border-bottom: 2px solid rgb(193, 218, 230);\n    \n}\n.jour{\n    width: 30%;\n}\ntd{\n    padding-top: 10px;\n    padding-left: 15px;\n    padding-bottom: 10px;\n    font-size: clamp(0.7rem,1vw,0.8vw);\n    /* background-color: aqua; */\n}\n/* \ntr{\n   background-color: brown;\n} */\n.meteo{\n    width: 30%;\n    padding-left: 0;\n    padding-right: 0;\n}\n.isClouds {\n    position: relative;\n    /* width: 100%; */\n}\n.isClouds .sun {\n    left: 50%;\n    top : 50%;\n    position: absolute;\n    -webkit-transform: translate(-50%,-70%);\n            transform: translate(-50%,-70%);\n    /* background-color: aqua; */\n}\n.isClouds .cloud {\n    \n    left: 50%;\n    top : 50%;\n    position: absolute;\n    -webkit-transform: translate(-30%,-50%);\n            transform: translate(-30%,-50%);\n    /* animation-name: cloudMovement; */\n \n}\n.isClear {\n    position: relative;\n }\n.isClear .sun{\n   position: absolute;\n   left: 50%;\n   top : 50%;\n   -webkit-transform: translate(-50%,-50%);\n           transform: translate(-50%,-50%);\n}\n.showers{\n    color: rgb(96, 108, 111);\n    -webkit-filter: drop-shadow( 1px 1px 5px rgb(55, 88, 97));\n            filter: drop-shadow( 1px 1px 5px rgb(55, 88, 97));\n}\n.temp{\n    text-align: center;\n}\n.rain {\n   position: relative;\n}\n.rain .cloudDark{\n    position: absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    color: rgb(96, 108, 111);\n}\n.droplet{\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    padding-left: 40%;\n    padding-top: 10%;\n    \n}\n.droplet span {\n    position: relative;\n    /* background-color: aqua; */\n    background-color: white;\n    width: 5px;\n    height: 5px;\n    z-index: 1;\n    margin: 0 2px;\n    border-radius: 50%;\n    /* animation-name: rainMovement;\n    animation-iteration-count: infinite;\n    animation-duration: var(20s/--i);\n    animation-timing-function: ease-in-out; */\n    -webkit-animation: rainMovement 2s ease  infinite normal forwards;\n            animation: rainMovement 2s ease  infinite normal forwards;\n    -webkit-animation-duration: calc(15s/var(--i));\n            animation-duration: calc(15s/var(--i));\n   \n \n}\n@-webkit-keyframes rainMovement {\n    0%{\n        -webkit-transform: translateY(0) scale(0.3);\n                transform: translateY(0) scale(0.3);\n        opacity: 1;\n  \n    }\n    70% {\n        -webkit-transform: translateY(20px) scale(0.3);\n                transform: translateY(20px) scale(0.3);\n        /* opacity: 0; */\n    }\n    100%{\n        scale: (0.2);\n        opacity: 0;\n    }\n}\n@keyframes rainMovement {\n    0%{\n        -webkit-transform: translateY(0) scale(0.3);\n                transform: translateY(0) scale(0.3);\n        opacity: 1;\n  \n    }\n    70% {\n        -webkit-transform: translateY(20px) scale(0.3);\n                transform: translateY(20px) scale(0.3);\n        /* opacity: 0; */\n    }\n    100%{\n        scale: (0.2);\n        opacity: 0;\n    }\n}\n@-webkit-keyframes cloudMovement{\n    from{margin-left: -30px;}\n    to{margin-left: 10px;}\n}\n@keyframes cloudMovement{\n    from{margin-left: -30px;}\n    to{margin-left: 10px;}\n}\n/* @keyframes cloudMovement{\n    from{margin-left: -55px;}\n    to{margin-left: 65px;}\n} */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1tYWluL3dlYXRoZXItd2lkZ2V0LW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG9EQUFvRDtBQUN4RDtBQUNBO0lBQ0ksbUJBQVk7SUFBWixZQUFZO0lBQ1oseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7O0lBRUksUUFBUTtJQUNSLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUdBOztJQUVJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFlBQVk7SUFDWixpRUFBeUQ7SUFBekQseURBQXlEO0FBQzdEO0FBR0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBSEE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBSEE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBSEE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBRUE7Ozs7SUFJSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsWUFBWTs7QUFFaEI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUlBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaURBQXlDO1lBQXpDLHlDQUF5QztBQUM3QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnREFBd0M7WUFBeEMsd0NBQXdDO0FBQzVDO0FBRUE7SUFDSTsyREFDdUQ7SUFDdkQseUJBQXlCO0lBQ3pCLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksU0FBUztJQUNULGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7QUFHQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBRUE7S0FDSyxVQUFVO0tBQ1Ysa0JBQWtCO0FBQ3ZCO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUdBO0lBQ0ksU0FBUztJQUNULHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLDJDQUEyQzs7QUFFL0M7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtBQUNoQztBQUNBOzs7R0FHRztBQUdIO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0FBQ2hDO0FBRUE7O0lBRUksU0FBUztJQUNULFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixtQ0FBbUM7O0FBRXZDO0FBRUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRDtHQUNHLGtCQUFrQjtHQUNsQixTQUFTO0dBQ1QsU0FBUztHQUNULHVDQUErQjtXQUEvQiwrQkFBK0I7QUFDbEM7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5REFBaUQ7WUFBakQsaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtHQUNHLGtCQUFrQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjs7OzZDQUd5QztJQUN6QyxpRUFBeUQ7WUFBekQseURBQXlEO0lBQ3pELDhDQUFzQztZQUF0QyxzQ0FBc0M7OztBQUcxQztBQUVBO0lBQ0k7UUFDSSwyQ0FBbUM7Z0JBQW5DLG1DQUFtQztRQUNuQyxVQUFVOztJQUVkO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztRQUN0QyxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO0lBQ2Q7QUFDSjtBQWRBO0lBQ0k7UUFDSSwyQ0FBbUM7Z0JBQW5DLG1DQUFtQztRQUNuQyxVQUFVOztJQUVkO0lBQ0E7UUFDSSw4Q0FBc0M7Z0JBQXRDLHNDQUFzQztRQUN0QyxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0ksS0FBSyxrQkFBa0IsQ0FBQztJQUN4QixHQUFHLGlCQUFpQixDQUFDO0FBQ3pCO0FBSEE7SUFDSSxLQUFLLGtCQUFrQixDQUFDO0lBQ3hCLEdBQUcsaUJBQWlCLENBQUM7QUFDekI7QUFJQTs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3dlYXRoZXItd2lkZ2V0LW1haW4vd2VhdGhlci13aWRnZXQtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdldlYXRoZXJNYWlue1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aCA6IDMyMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnX3dlYXRoZXIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlOztcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLmVudGV0ZXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMDsgIFxuICAgIHBhZGRpbmc6IDA7XG59XG4uZm9ybS1ncm91cHtcblxuICAgIG1hcmdpbjowO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuIFxuLmZvcm0tZ3JvdXAgaW5wdXR7XG4gICBcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC45cyAgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjUpO1xufVxuXG5cbi5mb3JtLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlcntcbiBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWdyb3VwOmhvdmVyIGlucHV0LFxuLmZvcm0tZ3JvdXAgaW5wdXQgOmZvY3VzLFxuLmZvcm0tZ3JvdXAgaW5wdXQgOnZhbGlkXG57XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNDg1ODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICBcbn1cblxuLmJ1dHRvblNlYXJjaCAge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuIFxuXG4ucGFydDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDE1JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucDEtY29sLWd7XG4gICAgbWluLWhlaWdodDogOTBweDtcbn1cblxuLnAxLWNvbC1nIC5pc0Nsb3Vkc3tcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4ucDEtY29sLWcgLnJhaW57XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLndlYXRoZXJXaWRnZXRSb3d7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDsgXG59XG5cbi5zdW57XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDFweCAxcHggMTBweCB5ZWxsb3cpO1xufVxuXG4ubW9vbntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDEwcHggd2hpdGUpO1xufVxuXG4uY2xvdWR7XG4gICAgLyogY29sb3I6IHJnYigxMDQsIDE3NSwgMTk3KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDVweCByZ2IoMTA0LCAxNzUsIDE5NykpOyAqL1xuICAgIGNvbG9yOiByZ2IoMTY2LCAxODUsIDE5MSk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCA1cHggcmdiKDEwNCwgMTc1LCAxOTcpKTtcbiAgICBhbmltYXRpb24tbmFtZTogY2xvdWRNb3ZlbWVudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG4ud2VhdGhlclRvZGF5RGVzY3JpcHRpb257XG4gICAgIFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwxdncsMXZ3KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyVG9kYXl7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwxdncsMS44dncpO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cblxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDEwcHggMDsgXG59XG5cbi5kZXRhaWxze1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IGNsYW1wKDAuN3JlbSwwLjZ2dywwLjd2dyk7XG4gICAgbWF4LWhlaWdodDogMTAwcHggO1xufVxuXG4uY29sLWd7XG4gICAgIHBhZGRpbmc6IDA7XG4gICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNvbC1ke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbiAgIFxuLnIxe1xuICAgIG1hcmdpbjogMDsgXG4gICAgbWF4LWhlaWdodDogNDBweCA7XG59XG4ucjEtY29sLWd7XG4gICAgcGFkZGluZzogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnIxLWNvbC1ke1xuICAgIHBhZGRpbmc6IDA7XG59XG5cblxuLmZvcmVjYXN0e1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDE5MywgMjE4LCAyMzApO1xuICAgIHBhZGRpbmc6ICAxMHB4IDA7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7ICovXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxOTMsIDIxOCwgMjMwKTtcbiAgICBcbn1cblxuLmpvdXJ7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxudGR7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC43cmVtLDF2dywwLjh2dyk7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cbn1cbi8qIFxudHJ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn0gKi9cblxuXG4ubWV0ZW97XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLmlzQ2xvdWRzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG59XG5cbi5pc0Nsb3VkcyAuc3VuIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wIDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC03MCUpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXG59XG5cbi5pc0Nsb3VkcyAuY2xvdWQge1xuICAgIFxuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3AgOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsLTUwJSk7XG4gICAgLyogYW5pbWF0aW9uLW5hbWU6IGNsb3VkTW92ZW1lbnQ7ICovXG4gXG59XG5cbi5pc0NsZWFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gfVxuIFxuLmlzQ2xlYXIgLnN1bntcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGxlZnQ6IDUwJTtcbiAgIHRvcCA6IDUwJTtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG5cbi5zaG93ZXJze1xuICAgIGNvbG9yOiByZ2IoOTYsIDEwOCwgMTExKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAxcHggMXB4IDVweCByZ2IoNTUsIDg4LCA5NykpO1xufVxuXG4udGVtcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yYWluIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJhaW4gLmNsb3VkRGFya3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0OjUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGNvbG9yOiByZ2IoOTYsIDEwOCwgMTExKTtcbn1cblxuLmRyb3BsZXR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBcbn1cblxuLmRyb3BsZXQgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMCAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8qIGFuaW1hdGlvbi1uYW1lOiByYWluTW92ZW1lbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoMjBzLy0taSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gICAgYW5pbWF0aW9uOiByYWluTW92ZW1lbnQgMnMgZWFzZSAgaW5maW5pdGUgbm9ybWFsIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxNXMvdmFyKC0taSkpO1xuICAgXG4gXG59XG5cbkBrZXlmcmFtZXMgcmFpbk1vdmVtZW50IHtcbiAgICAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuMyk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gIFxuICAgIH1cbiAgICA3MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoMC4zKTtcbiAgICAgICAgLyogb3BhY2l0eTogMDsgKi9cbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgc2NhbGU6ICgwLjIpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjbG91ZE1vdmVtZW50e1xuICAgIGZyb217bWFyZ2luLWxlZnQ6IC0zMHB4O31cbiAgICB0b3ttYXJnaW4tbGVmdDogMTBweDt9XG59XG5cblxuXG4vKiBAa2V5ZnJhbWVzIGNsb3VkTW92ZW1lbnR7XG4gICAgZnJvbXttYXJnaW4tbGVmdDogLTU1cHg7fVxuICAgIHRve21hcmdpbi1sZWZ0OiA2NXB4O31cbn0gKi9cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/Components/weather-widget-main/weather-widget-main.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/Components/weather-widget-main/weather-widget-main.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: WeatherWidgetMainComponent */

  /***/
  function srcAppComponentsWeatherWidgetMainWeatherWidgetMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherWidgetMainComponent", function () {
      return WeatherWidgetMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/service */
    "./src/app/service/service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var WeatherWidgetMainComponent =
    /*#__PURE__*/
    function () {
      function WeatherWidgetMainComponent(serviceWeather) {
        _classCallCheck(this, WeatherWidgetMainComponent);

        this.serviceWeather = serviceWeather;
        this.ForecastData = {
          city: "",
          list: ""
        };
        this.test = ["name", "prenom"]; // weather : IWeather [] = [] ;

        this.weather = [];
        this.array = [];
        this.datePrecedent = "";
        this.DateAujoudhui = new Date();
        this.dateToday = "";
        this.dateTodayFinal = "";
        this.listDateTemp = [{
          date: "",
          tmin: "",
          tmax: ""
        }];
        this.tmpMax = "0";
        this.tmpMin = "0";
        this.isClear = false;
        this.isRain = false;
        this.isClouds = false;
        this.alive = true;
      }

      _createClass(WeatherWidgetMainComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // this.sub.unsubscribe();
          console.log("unsubscribe");
          this.alive = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.WeatherData = {
            main: {},
            weather: {},
            wind: {}
          };
          this.city = "Paris";
          this.getWeatherData();
          this.getForecastData();
        }
      }, {
        key: "getWeatherData",
        value: function getWeatherData() {
          var _this = this;

          // fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr')
          // .then(response=>response.json())
          // .then(data=>{this.setWeatherData(data)})
          // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
          // this.setWeatherData(data);
          console.log("ville " + this.city);
          this.serviceWeather.weatherServiceByCity(this.city).subscribe(function (data) {
            return _this.setWeatherData(data);
          });
        }
      }, {
        key: "setWeatherData",
        value: function setWeatherData(data) {
          this.WeatherData = data;
          console.log("setWeatherData");
          console.log(data);
          var sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
          var sunriseTime = new Date(this.WeatherData.sys.sunrise * 1000); // console.log(" sunsetTime : " + sunsetTime);
          // console.log(" sunriseTime : " + sunriseTime);

          this.WeatherData.sunrise_time = sunriseTime.toLocaleTimeString();
          this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString(); // console.log(" sunset_time localtime : " + this.WeatherData.sunset_time );
          // console.log(" sunrise_time localtime : " + this.WeatherData.sunrise_time );

          var currentDate = new Date();
          this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
          this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
          this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
          this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
          this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
          this.WeatherData.wind.speed = (this.WeatherData.wind.speed * 3.6).toFixed();
          this.WeatherData.weather.main = this.WeatherData.weather[0].main;
          this.WeatherData.weather.description = this.WeatherData.weather[0].description;

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
      }, {
        key: "getForecastData",
        value: function getForecastData() {
          var _this2 = this;

          console.log("test");
          this.sub = this.serviceWeather.forcecastServiceByCity(this.city).subscribe(function (data) {
            return _this2.setForcecastData(data);
          }); // this.serviceWeather.getForcecastService()
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
      }, {
        key: "setForcecastData",
        value: function setForcecastData(data) {
          // this.array = JSON.parse(JSON.stringify(data));
          console.log(data);

          for (var i = 0; i < 40; i++) {
            if (i == 0) {
              this.dateToday = data.list[0].dt_txt.slice(0, 10);
              this.tmpMin = (data.list[0].main.temp_min - 273.15).toFixed(); // console.log("boucle 0");
            }

            if (this.dateToday == data.list[i].dt_txt.slice(0, 10)) {
              // this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed(1);
              if (this.tmpMax <= (data.list[i].main.temp_max - 273.15).toFixed()) {
                this.tmpMax = (data.list[i].main.temp_max - 273.15).toFixed(); // if (this.tmpMin >= (data.list[i].main.temp_min- 273.15).toFixed(1))
                // { this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed(1); }

                this.listDateTemp.push({
                  date: this.dateToday,
                  tmin: this.tmpMin,
                  tmax: this.tmpMax
                }); // console.log("dateToday :" + this.dateToday);
                // console.log("tmpmax :" + this.tmpMax);
                // console.log("tmpmin :" + this.tmpMin);
              } // else if (this.tmpMin) {
              // }

            } else {
              this.dateToday = data.list[i].dt_txt.slice(0, 10);
              this.tmpMax = (data.list[i].main.temp_max - 273.15).toFixed();
              this.tmpMin = (data.list[i].main.temp_min - 273.15).toFixed(); // console.log("dateToday else :" + this.dateToday);
              // console.log("tmpmax else:" + this.tmpMax);
              // console.log("tmpmin else:" + this.tmpMin);
            }

            if (this.datePrecedent != data.list[i].dt_txt.slice(0, 10)) {
              console.log("diff"); // console.log(this.weather[i].temp_max )

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

          console.log(this.weather); //  console.log(this.weather[i].weather);

          console.log(this.listDateTemp);
          this.datamatch();
        }
      }, {
        key: "datamatch",
        value: function datamatch() {
          // console.log("datamatch")
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.weather[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var w = _step.value;

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

              for (var j = 0; j < this.listDateTemp.length; j++) {
                if (w.dt_txt == this.listDateTemp[j].date) {
                  // console.log("same date :" + w.date)
                  // w.temp_max = this.listDateTemp[j].tmax.slice(0,2);
                  w.temp_max = this.listDateTemp[j].tmax; // w.temp_max = this.listDateTemp[j].tmax.replace(".","");
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          for (var i = 0; i < 1; i++) {
            this.weather[i].temp_min = this.WeatherData.temp_min;
          }
        } // saveForm(){
        //   let location = {
        //     city: this.city,
        //     state: this.code
        //   };
        //   localStorage.setItem('location', JSON.stringify(location));
        //   console.log("search");   
        //   console.log(event);  
        //   console.log(location);   
        // }

      }, {
        key: "getForcecastServiceByCity",
        value: function getForcecastServiceByCity() {
          var _this3 = this;

          /* on reinitialise tableau weather*/
          this.weather = [];
          console.log("getForcecastServiceByCity");
          console.log(this.city); // console.log(event.target);

          this.getWeatherData();
          this.serviceWeather.forcecastServiceByCity(this.city).subscribe(function (data) {
            console.log(data), _this3.setForcecastData(data);
          });
        }
      }]);

      return WeatherWidgetMainComponent;
    }();

    WeatherWidgetMainComponent.ctorParameters = function () {
      return [{
        type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]
      }];
    };

    WeatherWidgetMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-weather-widget-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./weather-widget-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/weather-widget-main/weather-widget-main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./weather-widget-main.component.css */
      "./src/app/Components/weather-widget-main/weather-widget-main.component.css")).default]
    })], WeatherWidgetMainComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-weather-widget';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/weather-widget-main/weather-widget-main.component */
    "./src/app/Components/weather-widget-main/weather-widget-main.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/locales/fr */
    "./node_modules/@angular/common/locales/fr.js");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8__);

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_8___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _Components_weather_widget_main_weather_widget_main_component__WEBPACK_IMPORTED_MODULE_3__["WeatherWidgetMainComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      // providers: [],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__["LOCALE_ID"],
        useValue: "fr-FR"
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/service/service.ts":
  /*!************************************!*\
    !*** ./src/app/service/service.ts ***!
    \************************************/

  /*! exports provided: WeatherService */

  /***/
  function srcAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
      return WeatherService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var WeatherService =
    /*#__PURE__*/
    function () {
      function WeatherService(http) {
        _classCallCheck(this, WeatherService);

        this.http = http;
        this.url = 'https://api.openweathermap.org/data/2.5/forecast?q=Paris&cnt=40&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
        this.url_forecast_api = 'https://api.openweathermap.org/data/2.5/forecast?q=';
        this.url_forecast_city = 'Paris';
        this.url_forecast_cle = '&cnt=40&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
        this.url_weather_api = 'https://api.openweathermap.org/data/2.5/weather?q=';
        this.url_weather_city = 'Paris';
        this.url_weather_cle = '&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
      }

      _createClass(WeatherService, [{
        key: "weatherServiceByCity",
        value: function weatherServiceByCity(city) {
          return this.http.get(this.url_weather_api + city + this.url_weather_cle);
        }
      }, {
        key: "forcecastServiceByCity",
        value: function forcecastServiceByCity(city) {
          // return this.http.get<any >(this.url_start + this.url_city + this.url_end)
          return this.http.get(this.url_forecast_api + city + this.url_forecast_cle);
        }
      }]);

      return WeatherService;
    }();

    WeatherService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WeatherService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\hiliasse\Documents\Angular\Angular-Weather-Widget-master\angular-weather-widget\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map