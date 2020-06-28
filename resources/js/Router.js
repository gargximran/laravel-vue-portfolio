import Vue from "vue";
import VueRouter from "vue-router";

import EntryHome from "./components/EntryHome";
import Home from "./components/Home";
import Services from "./components/Services";

Vue.use(VueRouter);

const routes = [
    {
        path: "/customization",
        component: EntryHome
    },
    {
        path: "/customization/home",
        component: Home
    },
    {
        path: "/customization/services",
        component: Services
    }
];

const Router = new VueRouter({ routes, mode: "history" });

export default Router;
