(function(){
      
  var createPageHandler = function() {
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "demo-page"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return '欢迎打开' + (this.title)}
	      },
	      "classList": [
	        "title"
	      ]
	    },
	    {
	      "type": "input",
	      "attr": {
	        "type": "button",
	        "value": "跳转到详情页"
	      },
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": "routeDetail"
	      }
	    },
	    {
	      "type": "input",
	      "attr": {
	        "type": "button",
	        "value": "About"
	      },
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": "routerAbout"
	      }
	    }
	  ]
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = {
	  ".demo-page": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".title": {
	    "fontSize": "40px",
	    "textAlign": "center"
	  },
	  ".btn": {
	    "width": "550px",
	    "height": "86px",
	    "marginTop": "75px",
	    "borderRadius": "43px",
	    "backgroundColor": "#09ba07",
	    "fontSize": "30px",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    private: {
	        title: 'Hello World!',
	        lcList: []
	    },
	    routeDetail: function routeDetail() {
	        _system2.default.push({
	            uri: '/DemoDetail'
	        });
	    },
	    routerAbout: function routerAbout() {
	        _system2.default.push({
	            url: '/About'
	        });
	    },
	    onInit: function onInit() {
	        this.$page.setTitleBar({ text: '生命周期' });
	        var obj = this.$app;
	
	        this.lcList.push('onInit');
	        console.info('触发: onInit');
	        console.info('\u6267\u884C\uFF1A\u83B7\u53D6ViewModel\u7684lcList\u5C5E\u6027\uFF1A' + this.lcList);
	        console.info('\u83B7\u53D6\uFF1Amanifest.json\u7684config.data\u7684\u6570\u636E\uFF1A' + this.$app.$data);
	
	        console.info(this);
	    },
	    onReady: function onReady() {
	        this.lcList.push('onReady');
	        console.log('\u89E6\u53D1\uFF1AonReady');
	    },
	    onHide: function onHide() {
	        this.lcList.push('onHide');
	        console.log('\u89E6\u53D1 onHide');
	    },
	    onShow: function onShow() {
	        this.lcList.push('onShow');
	        console.log('\u89E6\u53D1 onShow');
	    },
	    onDestroy: function onDestroy() {
	        console.info('\u89E6\u53D1\uFF1AonDestroy');
	        console.info('\u6267\u884C\uFF1A\u9875\u9762\u8981\u88AB\u9500\u6BC1\uFF0C\u9500\u6BC1\u72B6\u6001\uFF1A' + this.$valid + '\uFF0C\u5E94\u8BE5\u505A\u53D6\u6D88\u63A5\u53E3\u8BA2\u9605\u76D1\u542C\u7684\u64CD\u4F5C: geolocation.unsubscribe()');
	        setTimeout(function () {
	            console.info('\u6267\u884C\uFF1A\u9875\u9762\u5DF2\u88AB\u9500\u6BC1\uFF0C\u4E0D\u4F1A\u6267\u884C');
	        }.bind(this), 0);
	    },
	    onBackPress: function onBackPress() {
	        console.info('\u89E6\u53D1\uFF1AonBackPress');
	    },
	    onMenuPress: function onMenuPress() {
	        this.lcList.push('onMenuPress');
	
	        console.info('\u89E6\u53D1\uFF1AonMenuPress');
	    }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	    return moduleOwn[acc];
	})) {
	    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	    moduleOwn.data = {};
	    moduleOwn._descriptor = {};
	    accessors.forEach(function (acc) {
	        var accType = _typeof(moduleOwn[acc]);
	        if (accType === 'object') {
	            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	            for (var name in moduleOwn[acc]) {
	                moduleOwn._descriptor[name] = { access: acc };
	            }
	        } else if (accType === 'function') {
	            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	        }
	    });
	}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map