(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Skills"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Skills.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Skills.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
  name: "Skill",
  data: function data() {
    return {
      skills: [{
        value: 90,
        color: "#e44d26",
        name: "HTML",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 85,
        color: "blue",
        name: "CSS",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 80,
        color: "#edd420",
        name: "JavaScript",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 75,
        color: "#8896d1",
        name: "PHP",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 95,
        color: "#543b79",
        name: "Bootstrap",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 70,
        color: "#e46c73",
        name: "Materialize CSS",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 75,
        color: "#0865a6",
        name: "jQuery",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 80,
        color: "#41b833",
        name: "VueJs",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 80,
        color: "#e8372a",
        name: "Laravel",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 70,
        color: "#78c1f8",
        name: "Vuetify",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 50,
        color: "#70a660",
        name: "NodeJs",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 80,
        color: "#cb3837",
        name: "npm",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 76,
        color: "#000",
        name: "GIT",
        desc: "lorem ipsum dolor emmit and , thi si samply te lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 85,
        color: "#f29111",
        name: "MySql",
        desc: "lorem ipsum dolor emmit and , thi si samply te lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }, {
        value: 60,
        color: "green",
        name: "MongoDB",
        desc: "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Skills.vue?vue&type=template&id=210d80dc&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Skills.vue?vue&type=template&id=210d80dc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        _vm._v("Skills")
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
                  attrs: { color: "float-left blue--text text-capitalize" },
                  on: {
                    click: function($event) {
                      return _vm.$router.go(-1)
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mdi-flip-h" }, [
                    _vm._v("mdi-directions")
                  ]),
                  _c("span", [_vm._v("Back to service ")])
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
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        _vm._l(_vm.skills, function(skill, key) {
          return _c(
            "v-col",
            {
              key: key,
              staticClass: "mt-5",
              attrs: { cols: "12", xs: "4", sm: "4", md: "3" }
            },
            [
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "v-progress-circular",
                    {
                      staticClass: "mb-1",
                      attrs: {
                        size: "150",
                        value: skill.value,
                        width: "6",
                        color: skill.color
                      }
                    },
                    [_vm._v(_vm._s(skill.value) + "%")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-body-2 p-2" }, [
                    _vm._v(_vm._s(skill.desc))
                  ]),
                  _vm._v(" "),
                  _c("h2", { staticClass: "text-h6" }, [
                    _vm._v(_vm._s(skill.name))
                  ]),
                  _vm._v(" "),
                  _c("v-divider")
                ],
                1
              )
            ]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Frontend/components/Skills.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Frontend/components/Skills.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Skills_vue_vue_type_template_id_210d80dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skills.vue?vue&type=template&id=210d80dc&scoped=true& */ "./resources/js/Frontend/components/Skills.vue?vue&type=template&id=210d80dc&scoped=true&");
/* harmony import */ var _Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skills.vue?vue&type=script&lang=js& */ "./resources/js/Frontend/components/Skills.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Skills_vue_vue_type_template_id_210d80dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Skills_vue_vue_type_template_id_210d80dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "210d80dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Frontend/components/Skills.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Frontend/components/Skills.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Frontend/components/Skills.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Skills.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Skills.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Frontend/components/Skills.vue?vue&type=template&id=210d80dc&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Frontend/components/Skills.vue?vue&type=template&id=210d80dc&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_210d80dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Skills.vue?vue&type=template&id=210d80dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Skills.vue?vue&type=template&id=210d80dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_210d80dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Skills_vue_vue_type_template_id_210d80dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);