(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Contact.vue?vue&type=script&lang=js& ***!
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
  name: "Contact",
  data: function data() {
    return {
      loading: false,
      nameRules: [function (v) {
        return !!v || "Name is required";
      }],
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+/.test(v) || "E-mail must be valid";
      }],
      textRules: [function (v) {
        return !!v || "Leave a message for me.";
      }]
    };
  },
  methods: {
    sendmail: function sendmail() {
      var _this = this;

      if (this.$refs.contact.validate()) {
        this.loading = true;
        setTimeout(function () {
          _this.loading = false;
          Toast.fire({
            icon: "success",
            title: "Message Sent Successfully!",
            customClass: {
              title: "text-subtitle-2"
            }
          });
        }, 3000);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vertical-align-top[data-v-4a6467f6] {\r\n    vertical-align: text-top;\n}\n.customBackground[data-v-4a6467f6] {\r\n    background-image: url(\"/asset/images/wave.svg\");\r\n\r\n    background-size: contain;\r\n    background-position: bottom;\r\n    background-attachment: fixed;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=template&id=4a6467f6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Frontend/components/Contact.vue?vue&type=template&id=4a6467f6&scoped=true& ***!
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
    { staticClass: "pb-5 fill-height customBackground", attrs: { fluid: "" } },
    [
      _c(
        "v-container",
        { staticClass: "pb-5 fill-height", attrs: { dark: "" } },
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "12" } }, [
                _c("h2", { staticClass: "pink--text text-center mb-5" }, [
                  _vm._v("Contact Me")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { align: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c(
                    "h2",
                    { staticClass: "text-h4 font-weight-bold mb-2" },
                    [
                      _vm._v(
                        "\n                    More About me\n                    "
                      ),
                      _c("v-icon", { staticClass: "blue--text" }, [
                        _vm._v("mdi-check-decagram")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-body-2 my-4" }, [
                    _vm._v(
                      "\n                    I am self motivated web developer. I am very passionate\n                    about web technology. Always want to make remark of my\n                    own work. Always learning with this deep sea of tech.\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-3" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-body-2 d-inline-block vertical-align-top"
                      },
                      [_c("v-icon", [_vm._v("mdi-map-marker-outline")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          " text-body-2 d-inline-block vertical-align-top"
                      },
                      [
                        _c("span", [
                          _vm._v("Savar "),
                          _c("br"),
                          _vm._v("\n                            Dhaka, 1341, "),
                          _c("br"),
                          _vm._v("\n                            Bangladesh")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-3" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-body-2 d-inline-block vertical-align-top"
                      },
                      [_c("v-icon", [_vm._v("mdi-email-mark-as-unread")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          " text-body-2 d-inline-block vertical-align-top"
                      },
                      [_c("span", [_vm._v("gargximran@gmail.com")])]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-3" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-body-2 d-inline-block vertical-align-top"
                      },
                      [_c("v-icon", [_vm._v("mdi-skype-business")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          " text-body-2 d-inline-block vertical-align-top"
                      },
                      [_c("span", [_vm._v("live:gargximran_1")])]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                        _c(
                          "div",
                          { staticClass: "my-3 p-4" },
                          [
                            _c("h2", { staticClass: "subtitle-2 pink--text" }, [
                              _vm._v(
                                "\n                                Social Connect...\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  dark: "",
                                  small: "",
                                  color: "primary",
                                  target: "_blank",
                                  href: "https://facebook.com/gargximran",
                                  fab: ""
                                }
                              },
                              [
                                _c("v-icon", { attrs: { dark: "" } }, [
                                  _vm._v("mdi-facebook")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  dark: "",
                                  color: "primary",
                                  target: "_blank",
                                  href:
                                    "https://www.linkedin.com/in/imran-hossain-b24184131/",
                                  fab: "",
                                  small: ""
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { staticClass: "blue darken-2 white--text" },
                                  [_vm._v("mdi-linkedin")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  dark: "",
                                  target: "_blank",
                                  href: "https://www.github.com/gargximran",
                                  fab: "",
                                  small: ""
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-git")])],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                        _c(
                          "div",
                          { staticClass: "my-3 p-4" },
                          [
                            _c("h2", { staticClass: "subtitle-2 pink--text" }, [
                              _vm._v(
                                "\n                                Hire me...\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  outlined: "",
                                  light: "",
                                  text: "",
                                  target: "_blank",
                                  href: "https://www.fiverr.com/gargximran_1"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                fiverr\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "green--text",
                                attrs: {
                                  outlined: "",
                                  target: "_blank",
                                  href:
                                    "https://www.upwork.com/o/profiles/users/~01b6d3fae516401e8b/",
                                  text: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                upwork\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "orange--text",
                                attrs: {
                                  outlined: "",
                                  target: "_blank",
                                  href:
                                    "https://www.freelancer.com/u/gargximran"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Freelancer\n                            "
                                )
                              ]
                            )
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
              _c("v-divider", { attrs: { vertical: "", inset: "" } }),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c(
                    "h2",
                    { staticClass: "text-h4 font-weight-bold mb-5" },
                    [
                      _vm._v("\n                    Drop a line for me! "),
                      _c("v-icon", [_vm._v("mdi-lead-pencil")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    { ref: "contact" },
                    [
                      _c("v-text-field", {
                        attrs: {
                          dense: "",
                          label: "Name",
                          outlined: "",
                          color: "pink",
                          required: "",
                          rules: _vm.nameRules,
                          "prepend-icon": "mdi-account-outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          dense: "",
                          label: "Email",
                          color: "pink",
                          outlined: "",
                          required: "",
                          rules: _vm.emailRules,
                          "prepend-icon": "mdi-email-outline"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: {
                          outlined: "",
                          rules: _vm.textRules,
                          label: "Say something...",
                          "prepend-icon": "mdi-card-text-outline",
                          color: "pink"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { attrs: { "no-gutters": "" } },
                        [
                          _c(
                            "v-col",
                            { staticClass: "pl-5 ml-3", attrs: { cols: "12" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    dark: "",
                                    loading: _vm.loading,
                                    color: "pink"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.sendmail($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Send\n                                "
                                  ),
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "ml-1",
                                      attrs: { dark: "" }
                                    },
                                    [_vm._v("mdi-email-send-outline")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Frontend/components/Contact.vue":
/*!******************************************************!*\
  !*** ./resources/js/Frontend/components/Contact.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_4a6467f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=4a6467f6&scoped=true& */ "./resources/js/Frontend/components/Contact.vue?vue&type=template&id=4a6467f6&scoped=true&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Frontend/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Contact_vue_vue_type_style_index_0_id_4a6467f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css& */ "./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_4a6467f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_4a6467f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a6467f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Frontend/components/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Frontend/components/Contact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/components/Contact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4a6467f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=style&index=0&id=4a6467f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4a6467f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4a6467f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4a6467f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4a6467f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_4a6467f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Frontend/components/Contact.vue?vue&type=template&id=4a6467f6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Frontend/components/Contact.vue?vue&type=template&id=4a6467f6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4a6467f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=4a6467f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Frontend/components/Contact.vue?vue&type=template&id=4a6467f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4a6467f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_4a6467f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);