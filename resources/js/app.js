import router from "./Router";
import store from "./Store";

require("./bootstrap");

window.Vue = require("vue");

new Vue({
    el: "#app",
    router,
    store
});
