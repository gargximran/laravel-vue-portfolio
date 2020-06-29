(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Service"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Service.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Service.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Service",
  data: function data() {
    return {
      treeview: [{
        icon: "mdi-laravel",
        iconColor: "#ff2d20",
        opposite: "Backend Dev",
        title: "Laravel Developement",
        desc: "Creating awesome backend of any web with Laravel / PHP(oop) / Express.js / NodeJs"
      }, {
        icon: "mdi-monitor-dashboard",
        iconColor: "",
        opposite: "Frontend Dev",
        title: "VueJs Developement",
        desc: "Making awesome frontend design as you need. The technology I am very comportable to use is [Vuejs, Bootstrap, Materialize, Vuetify, Vanilla JS]"
      }, {
        icon: "mdi-book-open-page-variant",
        iconColor: "red",
        opposite: "SPA",
        title: "Singe Page Application",
        desc: "Creating supper fast single page application with laravel and vuejs. Now a day Spa is very much famous for its speed optamization. It run without taking page loading. I will create SPA with laravel Api and VueJs "
      }, {
        icon: "mdi-cogs",
        iconColor: "yellow",
        opposite: "Support",
        title: "Fixing Problem",
        desc: "I also provide website related support. If your website build with laravel and vuejs and you run into any problem with your website, Then I can fix your website problem. I also help with vanilla js."
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Service.vue?vue&type=template&id=55f88fea&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Service.vue?vue&type=template&id=55f88fea&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", dark: "" } },
    [
      _c("h2", { staticClass: "pink--text text-center mt-3" }, [
        _vm._v("Services")
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "float-right blue--text text-capitalize",
                    to: "/skills"
                  }
                },
                [
                  _c("span", [_vm._v("Go to Skills ")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-directions")])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-timeline",
        _vm._l(_vm.treeview, function(item, xx) {
          return _c(
            "v-timeline-item",
            {
              key: xx,
              attrs: {
                icon: item.icon,
                "fill-dot": "",
                "icon-color": item.iconColor ? item.iconColor : ""
              }
            },
            [
              _c("span", { attrs: { slot: "opposite" }, slot: "opposite" }, [
                _vm._v(_vm._s(item.opposite))
              ]),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "elevation-2" },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "text-subtitle-2 text-md-h4" },
                    [_vm._v(_vm._s(item.title))]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(item.desc) +
                        "\n                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("v-divider")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Frontend/components/Service.vue":
/*!******************************************************!*\
  !*** ./resources/js/Frontend/components/Service.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Service_vue_vue_type_template_id_55f88fea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service.vue?vue&type=template&id=55f88fea&scoped=true& */ "./resources/js/Frontend/components/Service.vue?vue&type=template&id=55f88fea&scoped=true&");
/* harmony import */ var _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service.vue?vue&type=script&lang=js& */ "./resources/js/Frontend/components/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Service_vue_vue_type_template_id_55f88fea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Service_vue_vue_type_template_id_55f88fea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55f88fea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Frontend/components/Service.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Frontend/components/Service.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/components/Service.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Frontend/components/Service.vue?vue&type=template&id=55f88fea&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Frontend/components/Service.vue?vue&type=template&id=55f88fea&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_55f88fea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=template&id=55f88fea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Service.vue?vue&type=template&id=55f88fea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_55f88fea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_55f88fea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);