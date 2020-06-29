import Vue from "vue";
import router from "./Router";
import store from "./Store";
import vuetify from "./Vuetify";
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VueFbCustomerChat, {
    page_id: 101533644958334,
    theme_color: "#e91e63",
    locale: "en_US"
});

import App from "./components/App";

require("./bootstrap");

new Vue({
    el: "#app",
    router,
    store,
    vuetify,
    render: h => h(App)
});
