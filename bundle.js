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
        path: 'hashtag-autocompletion-with-draftjs',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanN4Iiwid2VicGFjazovLy8uL3N0YXRlL2FjdGlvbl9jcmVhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0ZS9yZWR1Y2Vycy9ncmVldGluZy1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0YXRlL2NvbnN0YW50cy9BY3Rpb25UeXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FDSSw0REFBQyxtREFBRCxJQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLHFEQUEzQixHQURKOztBQUlBLFNBQVMsWUFBVCxDQUFzQixHQUF0QixFQUEyQjtBQUN2QixZQUFRLEtBQVIsQ0FBYywwQkFBZCxFQUEwQyxHQUExQztBQUNIOztBQUVELFNBQVMsU0FBVCxDQUFtQixFQUFuQixFQUF1QjtBQUNuQixXQUFPLFVBQUMsTUFBRDtBQUFBLGVBQVksR0FBRyxJQUFILEVBQVMsT0FBTyxPQUFoQixDQUFaO0FBQUEsS0FBUDtBQUNIOztBQUVELDRDQUFlO0FBQ1gsZUFBVyxxREFEQTtBQUVYLGlCQUFhLENBQ1Q7QUFDSSxjQUFNLEdBRFY7QUFFSSxvQkFGSix3QkFFaUIsUUFGakIsRUFFMkIsRUFGM0IsRUFFK0I7QUFDdkIsa0dBQ0ssSUFETCxDQUNVLFVBQVUsRUFBVixDQURWLEVBRUssS0FGTCxDQUVXLFlBRlg7QUFHSDtBQU5MLEtBRFMsRUFTVDtBQUNJLGNBQU0scUNBRFY7QUFFSSxvQkFGSix3QkFFaUIsUUFGakIsRUFFMkIsRUFGM0IsRUFFK0I7QUFDdkIsa0dBQ0ssSUFETCxDQUNVLFVBQVUsRUFBVixDQURWLEVBRUssS0FGTCxDQUVXLFlBRlg7QUFHSDtBQU5MLEtBVFM7QUFGRixDQUFmLEM7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7O0FBRUEsSUFBTSxjQUFjLDhFQUFnQjtBQUNoQztBQURnQyxDQUFoQixDQUFwQjs7QUFJQSw0Q0FBZSxXQUFmLEM7Ozs7Ozs7QUNQQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0M7QUFDNUIsV0FBTztBQUNILGtCQUFVLE1BQU07QUFEYixLQUFQO0FBR0g7O0FBRUQsU0FBUyxrQkFBVCxDQUE0QixRQUE1QixFQUFzQztBQUNsQyxXQUFPO0FBQ0gseUJBQWlCLGlGQUFtQixvSEFBbkIsRUFBNEIsUUFBNUI7QUFEZCxLQUFQO0FBR0g7O0FBR0QsSUFBYSxHQUFiO0FBQUE7O0FBRUksaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHNGQUNULEtBRFM7QUFFbEI7O0FBSkw7QUFBQTtBQUFBLDZDQU15QjtBQUNqQixpQkFBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixRQUEzQjtBQUNIO0FBUkw7QUFBQTtBQUFBLGlDQVVhO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0sscUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsT0FEekI7QUFFSyxxQkFBSyxLQUFMLENBQVc7QUFGaEIsYUFESjtBQU1IO0FBakJMOztBQUFBO0FBQUEsRUFBeUIsZ0RBQXpCOztBQXFCQSw0Q0FBZSw0RUFDYixlQURhLEVBRWIsa0JBRmEsRUFHYixHQUhhLENBQWYsQzs7Ozs7Ozs7O29EQ3ZDQTs7QUFFTyxTQUFTLFFBQVQsR0FBb0I7QUFDdkIsV0FBTztBQUNILGNBQU0scUVBREg7QUFFSCxpQkFBUyxFQUFDLFNBQVMsY0FBVjtBQUZOLEtBQVA7QUFJSCxDOzs7Ozs7Ozs7b0RDUEQ7O0FBRWUsU0FBUyxlQUFULEdBQTRDO0FBQUEsUUFBbEIsS0FBa0IseURBQVosRUFBWTtBQUFBLFFBQVIsTUFBUTs7O0FBRXZELFlBQVEsT0FBTyxJQUFmO0FBQ0ksYUFBSyxxRUFBTDtBQUNJLG1CQUFPLE9BQU8sTUFBUCxDQUFlLEVBQWYsRUFBbUIsS0FBbkIsRUFBMEIsRUFBQyxTQUFTLE9BQU8sT0FBUCxDQUFlLE9BQXpCLEVBQTFCLENBQVA7QUFDSjtBQUNJLG1CQUFPLEtBQVA7QUFKUjtBQU9ILEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NYK0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQSxJQUFNLFFBQVEsMEVBQ1osZ0lBRFksQ0FBZDs7QUFJQSxrREFBUyxNQUFULENBQ0U7QUFBQyx1REFBRDtBQUFBLElBQVUsT0FBTyxLQUFqQjtBQUNFLDhEQUFDLG9EQUFELElBQVEsU0FBUyw0REFBakIsRUFBaUMsUUFBUSx3SEFBekM7QUFERixDQURGLEVBSUksU0FBUyxhQUFULENBQXVCLE1BQXZCLENBSkosRTs7Ozs7Ozs7O3VGQ2hCTyxJQUFNLFFBQVEsVUFBZCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuZXhwb3J0IGRlZmF1bHQgKFxuICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0vPlxuKTtcblxuZnVuY3Rpb24gZXJyb3JMb2FkaW5nKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIHRoZSByb3V0ZScsIGVycik7XG59XG5cbmZ1bmN0aW9uIGxvYWRSb3V0ZShjYikge1xuICAgIHJldHVybiAobW9kdWxlKSA9PiBjYihudWxsLCBtb2R1bGUuZGVmYXVsdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnQ6IEFwcCxcbiAgICBjaGlsZFJvdXRlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBnZXRDb21wb25lbnQobG9jYXRpb24sIGNiKSB7XG4gICAgICAgICAgICAgICAgU3lzdGVtLmltcG9ydCgnLi9tb2R1bGVzL21haW4vTWFpbi5qc3gnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb2FkUm91dGUoY2IpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JMb2FkaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2hhc2h0YWctYXV0b2NvbXBsZXRpb24td2l0aC1kcmFmdGpzJyxcbiAgICAgICAgICAgIGdldENvbXBvbmVudChsb2NhdGlvbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBTeXN0ZW0uaW1wb3J0KCcuL21vZHVsZXMvaGFzaHRhZy1hdXRvY29tcGxldGlvbi1kZW1vL0RlbW9QYWdlLmpzeCcpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxvYWRSb3V0ZShjYikpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvckxvYWRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JvdXRlcy5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBncmVldGluZ1JlZHVjZXIgZnJvbSAnLi9ncmVldGluZy1yZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGdyZWV0aW5nUmVkdWNlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGUvcmVkdWNlcnMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0eWxlcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnfi9zdGF0ZS9hY3Rpb25fY3JlYXRvcnMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBncmVldGluZzogc3RhdGUuZ3JlZXRpbmdSZWR1Y2VyXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3JlZXRpbmdBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpLFxuICAgIH07XG59XG5cblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdyZWV0aW5nQWN0aW9ucy5zYXlIZWxsbygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZ3JlZXRpbmcubWVzc2FnZX1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzeCIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5HUkVFVCxcbiAgICAgICAgcGF5bG9hZDoge21lc3NhZ2U6IFwiSGVsbG8gd29ybGQhXCJ9XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRlL2FjdGlvbl9jcmVhdG9ycy9pbmRleC5qcyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyZWV0aW5nUmVkdWNlciAoc3RhdGU9e30sIGFjdGlvbikge1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkdSRUVUOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24gKHt9LCBzdGF0ZSwge21lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2UgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGUvcmVkdWNlcnMvZ3JlZXRpbmctcmVkdWNlci5qcyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUm91dGVyLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cblxuaW1wb3J0IHJvdXRlcyBmcm9tICd+L3JvdXRlcyc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnfi9zdGF0ZS9yZWR1Y2Vycyc7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJlZHVjZXJzXG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9IHJvdXRlcz17cm91dGVzfSAvPlxuICA8L1Byb3ZpZGVyPlxuICAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBHUkVFVCA9ICdOQVZJR0FURSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdGF0ZS9jb25zdGFudHMvQWN0aW9uVHlwZXMuanMiXSwic291cmNlUm9vdCI6IiJ9