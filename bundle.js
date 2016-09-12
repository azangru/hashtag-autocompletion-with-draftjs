webpackJsonp([2],{

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(142);




/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* default */] });

function errorLoading(err) {
    console.error('Could not load the route', err);
}

function loadRoute(cb) {
    return function (module) {
        return cb(null, module.default);
    };
}

/* harmony default export */ exports["a"] = {
    component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* default */],
    childRoutes: [{
        path: '/',
        getComponent: function getComponent(location, cb) {
            __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, 269)).then(loadRoute(cb)).catch(errorLoading);
        }
    }, {
        path: 'hashtag-autocompletion-demo',
        getComponent: function getComponent(location, cb) {
            __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, 268)).then(loadRoute(cb)).catch(errorLoading);
        }
    }]
};

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__greeting_reducer__ = __webpack_require__(144);



var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    greetingReducer: __WEBPACK_IMPORTED_MODULE_1__greeting_reducer__["a" /* default */]
});

/* harmony default export */ exports["a"] = rootReducer;

/***/ },

/***/ 133:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_andrey_development_experiments_hashtag_autocomplete_src_js_state_action_creators__ = __webpack_require__(143);
/* unused harmony export App */var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function mapStateToProps(state) {
    return {
        greeting: state.greetingReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        greetingActions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_3__home_andrey_development_experiments_hashtag_autocomplete_src_js_state_action_creators__, dispatch)
    };
}

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.greetingActions.sayHello();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                this.props.greeting.message,
                this.props.children
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(App);

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(82);
/* harmony export */ exports["sayHello"] = sayHello;

function sayHello() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* GREET */],
        payload: { message: "Hello world!" }
    };
}

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(82);
/* harmony export */ exports["a"] = greetingReducer;

function greetingReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];


    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* GREET */]:
            return Object.assign({}, state, { message: action.payload.message });
        default:
            return state;
    }
};

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_andrey_development_experiments_hashtag_autocomplete_src_js_routes__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_andrey_development_experiments_hashtag_autocomplete_src_js_state_reducers__ = __webpack_require__(132);
 // eslint-disable-line import/no-unresolved










var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_7__home_andrey_development_experiments_hashtag_autocomplete_src_js_state_reducers__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
  { store: store },
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_5_react_router__["browserHistory"], routes: __WEBPACK_IMPORTED_MODULE_6__home_andrey_development_experiments_hashtag_autocomplete_src_js_routes__["a" /* default */] })
), document.querySelector('main'));

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony export */ __webpack_require__.d(exports, "a", function() { return GREET; });var GREET = 'NAVIGATE';

/***/ }

},[266]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanN4Iiwid2VicGFjazovLy8uL3N0YXRlL2FjdGlvbl9jcmVhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0ZS9yZWR1Y2Vycy9ncmVldGluZy1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0YXRlL2NvbnN0YW50cy9BY3Rpb25UeXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FDSSw0REFBQyxtREFBRCxJQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLHFEQUEzQixHQURKOztBQUlBLFNBQVMsWUFBVCxDQUFzQixHQUF0QixFQUEyQjtBQUN2QixZQUFRLEtBQVIsQ0FBYywwQkFBZCxFQUEwQyxHQUExQztBQUNIOztBQUVELFNBQVMsU0FBVCxDQUFtQixFQUFuQixFQUF1QjtBQUNuQixXQUFPLFVBQUMsTUFBRDtBQUFBLGVBQVksR0FBRyxJQUFILEVBQVMsT0FBTyxPQUFoQixDQUFaO0FBQUEsS0FBUDtBQUNIOztBQUVELDRDQUFlO0FBQ1gsZUFBVyxxREFEQTtBQUVYLGlCQUFhLENBQ1Q7QUFDSSxjQUFNLEdBRFY7QUFFSSxvQkFGSix3QkFFaUIsUUFGakIsRUFFMkIsRUFGM0IsRUFFK0I7QUFDdkIsa0dBQ0ssSUFETCxDQUNVLFVBQVUsRUFBVixDQURWLEVBRUssS0FGTCxDQUVXLFlBRlg7QUFHSDtBQU5MLEtBRFMsRUFTVDtBQUNJLGNBQU0sNkJBRFY7QUFFSSxvQkFGSix3QkFFaUIsUUFGakIsRUFFMkIsRUFGM0IsRUFFK0I7QUFDdkIsa0dBQ0ssSUFETCxDQUNVLFVBQVUsRUFBVixDQURWLEVBRUssS0FGTCxDQUVXLFlBRlg7QUFHSDtBQU5MLEtBVFM7QUFGRixDQUFmLEM7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7O0FBRUEsSUFBTSxjQUFjLDhFQUFnQjtBQUNoQztBQURnQyxDQUFoQixDQUFwQjs7QUFJQSw0Q0FBZSxXQUFmLEM7Ozs7Ozs7QUNQQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDNUIsV0FBTztBQUNILGtCQUFVLE1BQU07QUFEYixLQUFQO0FBR0g7O0FBRUQsU0FBUyxrQkFBVCxDQUE0QixRQUE1QixFQUFzQztBQUNsQyxXQUFPO0FBQ0gseUJBQWlCLGlGQUFtQixvSEFBbkIsRUFBNEIsUUFBNUI7QUFEZCxLQUFQO0FBR0g7O0FBR0QsSUFBYSxHQUFiO0FBQUE7O0FBRUksaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHNGQUNULEtBRFM7QUFFbEI7O0FBSkw7QUFBQTtBQUFBLDZDQU15QjtBQUNqQixpQkFBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixRQUEzQjtBQUNIO0FBUkw7QUFBQTtBQUFBLGlDQVVhO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0sscUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsT0FEekI7QUFFSyxxQkFBSyxLQUFMLENBQVc7QUFGaEIsYUFESjtBQU1IO0FBakJMOztBQUFBO0FBQUEsRUFBeUIsZ0RBQXpCOztBQXFCQSw0Q0FBZSw0RUFDYixlQURhLEVBRWIsa0JBRmEsRUFHYixHQUhhLENBQWYsQzs7Ozs7Ozs7O29EQ3ZDQTs7QUFFTyxTQUFTLFFBQVQsR0FBb0I7QUFDdkIsV0FBTztBQUNILGNBQU0scUVBREg7QUFFSCxpQkFBUyxFQUFDLFNBQVMsY0FBVjtBQUZOLEtBQVA7QUFJSCxDOzs7Ozs7Ozs7b0RDUEQ7O0FBRWUsU0FBUyxlQUFULEdBQTRDO0FBQUEsUUFBbEIsS0FBa0IseURBQVosRUFBWTtBQUFBLFFBQVIsTUFBUTs7O0FBRXZELFlBQVEsT0FBTyxJQUFmO0FBQ0ksYUFBSyxxRUFBTDtBQUNJLG1CQUFPLE9BQU8sTUFBUCxDQUFlLEVBQWYsRUFBbUIsS0FBbkIsRUFBMEIsRUFBQyxTQUFTLE9BQU8sT0FBUCxDQUFlLE9BQXpCLEVBQTFCLENBQVA7QUFDSjtBQUNJLG1CQUFPLEtBQVA7QUFKUjtBQU9ILEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NYK0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQSxJQUFNLFFBQVEsMEVBQ1osZ0lBRFksQ0FBZDs7QUFJQSxrREFBUyxNQUFULENBQ0U7QUFBQyx1REFBRDtBQUFBLElBQVUsT0FBTyxLQUFqQjtBQUNFLDhEQUFDLG9EQUFELElBQVEsU0FBUyw0REFBakIsRUFBaUMsUUFBUSx3SEFBekM7QUFERixDQURGLEVBSUksU0FBUyxhQUFULENBQXVCLE1BQXZCLENBSkosRTs7Ozs7Ozs7O3VGQ2hCTyxJQUFNLFFBQVEsVUFBZCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgKFxuICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0vPlxuKTtcblxuZnVuY3Rpb24gZXJyb3JMb2FkaW5nKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHRoZSByb3V0ZScsIGVycik7XG59XG5cbmZ1bmN0aW9uIGxvYWRSb3V0ZShjYikge1xuICAgIHJldHVybiAobW9kdWxlKSA9PiBjYihudWxsLCBtb2R1bGUuZGVmYXVsdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnQ6IEFwcCxcbiAgICBjaGlsZFJvdXRlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBnZXRDb21wb25lbnQobG9jYXRpb24sIGNiKSB7XG4gICAgICAgICAgICAgICAgU3lzdGVtLmltcG9ydCgnLi9tb2R1bGVzL21haW4vTWFpbi5qc3gnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb2FkUm91dGUoY2IpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JMb2FkaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2hhc2h0YWctYXV0b2NvbXBsZXRpb24tZGVtbycsXG4gICAgICAgICAgICBnZXRDb21wb25lbnQobG9jYXRpb24sIGNiKSB7XG4gICAgICAgICAgICAgICAgU3lzdGVtLmltcG9ydCgnLi9tb2R1bGVzL2hhc2h0YWctYXV0b2NvbXBsZXRpb24tZGVtby9EZW1vUGFnZS5qc3gnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb2FkUm91dGUoY2IpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JMb2FkaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXMuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgZ3JlZXRpbmdSZWR1Y2VyIGZyb20gJy4vZ3JlZXRpbmctcmVkdWNlcic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBncmVldGluZ1JlZHVjZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRlL3JlZHVjZXJzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zdHlsZXMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJ34vc3RhdGUvYWN0aW9uX2NyZWF0b3JzJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3JlZXRpbmc6IHN0YXRlLmdyZWV0aW5nUmVkdWNlclxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdyZWV0aW5nQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5ncmVldGluZ0FjdGlvbnMuc2F5SGVsbG8oKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmdyZWV0aW5nLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qc3giLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuR1JFRVQsXG4gICAgICAgIHBheWxvYWQ6IHttZXNzYWdlOiBcIkhlbGxvIHdvcmxkIVwifVxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdGF0ZS9hY3Rpb25fY3JlYXRvcnMvaW5kZXguanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncmVldGluZ1JlZHVjZXIgKHN0YXRlPXt9LCBhY3Rpb24pIHtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5HUkVFVDpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduICh7fSwgc3RhdGUsIHttZXNzYWdlOiBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRlL3JlZHVjZXJzL2dyZWV0aW5nLXJlZHVjZXIuanMiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFJvdXRlciwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnfi9yb3V0ZXMnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJ34vc3RhdGUvcmVkdWNlcnMnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2Vyc1xuKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fSByb3V0ZXM9e3JvdXRlc30gLz5cbiAgPC9Qcm92aWRlcj5cbiAgLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJleHBvcnQgY29uc3QgR1JFRVQgPSAnTkFWSUdBVEUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGUvY29uc3RhbnRzL0FjdGlvblR5cGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==