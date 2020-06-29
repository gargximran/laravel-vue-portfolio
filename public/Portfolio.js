(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Portfolio"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Portfolio.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_infinite_slide_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-infinite-slide-bar */ "./node_modules/vue-infinite-slide-bar/lib/vue-infinite-slide-bar.min.js");
/* harmony import */ var vue_infinite_slide_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_slide_bar__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "Portfolio",
  components: {
    InfiniteSlideBar: vue_infinite_slide_bar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      currentFilter: "ALL",
      projects: [{
        title: "Artwork",
        image: "https://picsum.photos/g/200?image=122",
        category: "ART"
      }, {
        title: "Charcoal",
        image: "https://picsum.photos/g/200?image=116",
        category: "ART"
      }, {
        title: "Sketching",
        image: "https://picsum.photos/g/200?image=121",
        category: "DOODLES"
      }, {
        title: "Acrillic",
        image: "https://picsum.photos/g/200?image=133",
        category: "WORKSHOPS"
      }, {
        title: "Pencil",
        image: "https://picsum.photos/g/200?image=134",
        category: "DOODLES"
      }, {
        title: "Pen",
        image: "https://picsum.photos/g/200?image=115",
        category: "ART"
      }, {
        title: "Inking",
        image: "https://picsum.photos/g/200",
        category: "WORKSHOPS"
      }]
    };
  },
  computed: {
    projectsCategory: function projectsCategory() {
      var arr = [];
      var i = 0;

      for (i = 0; i < this.projects.length; i++) {
        if (arr.indexOf(this.projects[i].category) == -1) {
          arr.push(this.projects[i].category);
        }
      }

      return arr;
    }
  },
  methods: {
    setFilter: function setFilter(filter) {
      this.currentFilter = filter;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.projects[data-v-34021d9e] {\r\n    margin-top: 25px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\n}\n.projects-enter[data-v-34021d9e] {\r\n    transform: scale(0.5) translatey(-80px);\r\n    opacity: 0;\n}\n.projects-leave-to[data-v-34021d9e] {\r\n    transform: translatey(30px);\r\n    opacity: 0;\n}\n.projects-leave-active[data-v-34021d9e] {\r\n    position: absolute;\r\n    z-index: -1;\n}\n.project[data-v-34021d9e] {\r\n    transition: all 0.35s ease-in-out;\r\n    border-radius: 3px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-infinite-slide-bar/lib/vue-infinite-slide-bar.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-infinite-slide-bar/lib/vue-infinite-slide-bar.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-infinite-slide-bar v1.1.1
 * (c) 2018-present biig_pongsatorn <biig_pongsatorn@hotmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" @keyframes moveSlideshow { 100% { transform: translateX(-50%); } } .vifnslb-container[data-v-2964abc9] { width: 100%; overflow: hidden; } .vifnslb-element[data-v-2964abc9] { transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */ position: relative; overflow: hidden; animation-name: moveSlideshow; animation-iteration-count: infinite; animation-timing-function: linear; display: flex; width: max-content; min-width: 200%; } .vifnslb-bar[data-v-2964abc9] { width: 50%; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}(),{_scopeId:"data-v-2964abc9",name:"vue-infinite-slide-bar",props:{barStyle:Object,duration:{type:String,default:"12s"},direction:{type:String,default:"normal"},delay:{type:String,default:"0s"}},computed:{customStyle:function(){return Object.assign({},this.barStyle,{"animation-duration":this.duration,"animation-direction":this.direction,"animation-delay":this.delay})}},render:function(e){var t=e("div",{class:"vifnslb-bar"},this.$slots.default);return e("div",{class:["vifnslb-container"]},[e("div",{class:["vifnslb-element"],style:this.customStyle},[t,t])])}}});
//# sourceMappingURL=vue-infinite-slide-bar.min.js.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=template&id=34021d9e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Portfolio.vue?vue&type=template&id=34021d9e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("h2", { staticClass: "pink--text text-center mt-3 text-subtitle-2" }, [
        _vm._v("\n        What they are saying about me?\n    ")
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("InfiniteSlideBar", { attrs: { duration: "30s" } }, [
                _c(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    _c("v-img", {
                      attrs: {
                        dark: "",
                        "max-width": "700",
                        src: "asset/images/review/1.JPG"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-img", {
                      attrs: { dark: "", src: "asset/images/review/2.JPG" }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("h2", { staticClass: "pink--text text-center mt-3" }, [
        _vm._v("My Works")
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", align: "center" } },
            [
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      return _vm.setFilter("ALL")
                    }
                  }
                },
                [_c("span", [_vm._v("ALL")])]
              ),
              _vm._v(" "),
              _vm._l(_vm.projectsCategory, function(category, categoryIndex) {
                return _c(
                  "v-btn",
                  {
                    key: categoryIndex,
                    staticClass: "mr-1",
                    on: {
                      click: function($event) {
                        return _vm.setFilter(category)
                      }
                    }
                  },
                  [_c("span", [_vm._v(_vm._s(category))])]
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "transition-group",
            { staticClass: "projects", attrs: { name: "projects" } },
            _vm._l(_vm.projects, function(project) {
              return _vm.currentFilter === project.category ||
                _vm.currentFilter === "ALL"
                ? _c(
                    "v-col",
                    {
                      key: project.title,
                      staticClass: "project",
                      attrs: { cols: "6", sm: "4", lg: "2", md: "2" }
                    },
                    [
                      _c(
                        "v-card",
                        { attrs: { href: "" } },
                        [
                          _c(
                            "v-img",
                            {
                              staticClass: "white--text align-end",
                              attrs: { height: "200px", src: project.image }
                            },
                            [
                              _c("v-card-title", [
                                _vm._v(_vm._s(project.title))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-card-subtitle", { staticClass: "pb-0" }, [
                            _vm._v(_vm._s(project.category))
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            }),
            1
          )
        ],
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

/***/ "./resources/js/Frontend/components/Portfolio.vue":
/*!********************************************************!*\
  !*** ./resources/js/Frontend/components/Portfolio.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portfolio_vue_vue_type_template_id_34021d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=template&id=34021d9e&scoped=true& */ "./resources/js/Frontend/components/Portfolio.vue?vue&type=template&id=34021d9e&scoped=true&");
/* harmony import */ var _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=script&lang=js& */ "./resources/js/Frontend/components/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Portfolio_vue_vue_type_style_index_0_id_34021d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css& */ "./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Portfolio_vue_vue_type_template_id_34021d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Portfolio_vue_vue_type_template_id_34021d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34021d9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Frontend/components/Portfolio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Frontend/components/Portfolio.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/components/Portfolio.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_34021d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=style&index=0&id=34021d9e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_34021d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_34021d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_34021d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_34021d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_style_index_0_id_34021d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Frontend/components/Portfolio.vue?vue&type=template&id=34021d9e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Frontend/components/Portfolio.vue?vue&type=template&id=34021d9e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_34021d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=template&id=34021d9e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Portfolio.vue?vue&type=template&id=34021d9e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_34021d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_34021d9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);