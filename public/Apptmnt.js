(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Apptmnt", [], factory);
	else if(typeof exports === 'object')
		exports["Apptmnt"] = factory();
	else
		root["Apptmnt"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _datepicker = __webpack_require__(2);

var _apptmnt = __webpack_require__(1);

var components = [_datepicker.Datepicker, _apptmnt.Apptmnt];

components.forEach(function (component) {
  return customElements.define(component.selector, component);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apptmnt = __webpack_require__(6);

var _apptmnt2 = _interopRequireDefault(_apptmnt);

var _apptmnt3 = __webpack_require__(5);

var _apptmnt4 = _interopRequireDefault(_apptmnt3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Apptmnt = function (_HTMLElement) {
    _inherits(Apptmnt, _HTMLElement);

    _createClass(Apptmnt, null, [{
        key: 'selector',
        get: function get() {
            return 'apptmnt-creator';
        }
    }]);

    function Apptmnt() {
        _classCallCheck(this, Apptmnt);

        return _possibleConstructorReturn(this, (Apptmnt.__proto__ || Object.getPrototypeOf(Apptmnt)).call(this));
    }

    _createClass(Apptmnt, [{
        key: 'render',
        value: function render() {
            var innerHTML = (0, _apptmnt2.default)({
                date: this.date
            });

            this.element.innerHTML = '<style>' + _apptmnt4.default + '</style>' + innerHTML;this.attachEventListeners();
        }
    }, {
        key: 'updateDate',
        value: function updateDate(date) {
            console.debug('updateDate', date);this.date = date;
        }
    }, {
        key: 'attachEventListeners',
        value: function attachEventListeners() {
            var _this2 = this;

            this.element.querySelector('apptmnt-datepicker').addEventListener('date-selected', function (_ref) {
                var detail = _ref.detail;
                return _this2.updateDate(detail);
            });
        }
    }]);

    return Apptmnt;
}(HTMLElement);

exports.default = Apptmnt;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _datepicker = __webpack_require__(3);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _datepicker3 = __webpack_require__(4);

var _datepicker4 = _interopRequireDefault(_datepicker3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Datepicker = function (_HTMLElement) {
  _inherits(Datepicker, _HTMLElement);

  function Datepicker() {
    _classCallCheck(this, Datepicker);

    return _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).apply(this, arguments));
  }

  _createClass(Datepicker, [{
    key: 'render',
    value: function render() {
      var innerHTML = (0, _datepicker2.default)({
        date: this.date
      });

      this.element.innerHTML = '<style>' + _datepicker4.default + '</style>' + innerHTML;
    }
  }], [{
    key: 'selector',
    get: function get() {
      return 'apptmnt-datepicker';
    }
  }]);

  return Datepicker;
}(HTMLElement);

exports.default = Datepicker;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var range = function range(n) {
  return Array.from({ length: n }, function (value, key) {
    return key + 1;
  });
};

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var numOfWeekdays = [1, 2, 3, 4, 5];
var numberOfWeekends = [0, 6];

exports.default = function (_ref) {
  var selectedYear = _ref.selectedYear,
      selectedMonth = _ref.selectedMonth,
      selectedDay = _ref.selectedDay,
      selectedDate = _ref.selectedDate,
      inputDate = _ref.inputDate,
      emptyDays = _ref.emptyDays,
      filter = _ref.filter,
      closed = _ref.closed;

  var isDayLessThanToday = function isDayLessThanToday(day) {
    return new Date(selectedYear, selectedMonth, day + 1).getTime() < new Date().getTime();
  };
  var isLeapYear = function isLeapYear() {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  };

  return '\n    <input id="inputDate" type="text" readonly value="' + inputDate + '" placeholder="Choose a date...">\n    <img src="images/ic_date_range.svg">\n    <div class="ui-datepicker" ' + (closed ? 'hidden' : '') + '>\n      <div class="datepicker-header">\n        <button id="prevMonth"><img src="/images/ic_navigate_before.svg"></button>\n        <h5>' + months[selectedMonth] + ' ' + selectedYear + '</h5>\n        <button id="nextMonth"><img src="/images/ic_navigate_next.svg"></button>\n      </div>\n      <ul class="datepicker-nav">\n        ' + weekdays.map(function (day) {
    return '\n          <li>' + day.slice(0, 2) + '</li>\n        ';
  }).join('') + '\n      </ul>\n      <div class="datepicker-days">\n      ' + emptyDays.map(function (empty) {
    return '\n        <span class="day empty-day"></span>\n      ';
  }).join('') + '\n\n      ' + range(isLeapYear() ? 29 : daysInMonth[selectedMonth]).map(function (day) {
    return '\n        <button class="day ' + (parseInt(selectedDay) === day && selectedDate.getMonth() === selectedMonth && selectedDate.getFullYear() === selectedYear ? 'selected' : '') + '"\n          ' + (filter === 'weekdays' && !weekdaysNum.includes(new Date(selectedYear, selectedMonth, day).getDay()) ? 'disabled' : '') + '\n          ' + (filter === 'weekends' && !weekendsNum.includes(new Date(selectedYear, selectedMonth, day).getDay()) ? 'disabled' : '') + '\n          ' + (isDayLessThanToday(day) ? 'disabled' : '') + '>\n          ' + day + '\n        </button>\n      ';
  }).join('') + '\n      </div>\n    </div>\n  ';
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*Datepicker CSS*/

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n  <div class=\"components\">\n    <apptmnt-datepicker></apptmnt-datepicker>\n  </div>\n";
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
});
//# sourceMappingURL=Apptmnt.js.map