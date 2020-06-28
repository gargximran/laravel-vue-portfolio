import Vue from "vue";
import router from "./Router";
import store from "./Store";
import vuetify from "./Vuetify";

import App from "./components/App";

require("./bootstrap");

new Vue({
    el: "#app",
    router,
    store,
    vuetify,
    render: h => h(App)
});
