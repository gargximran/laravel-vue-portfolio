import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Skill from "./components/Skills";
import Contact from "./components/Contact";

const routes = [
    {
        path: "/",
        component: Homepage,
        name: "home"
    },
    {
        path: "/portfolio",
        component: Portfolio,
        name: "portfolio"
    },
    {
        path: "/services",
        component: Service,
        name: "service"
    },
    {
        path: "/skills",
        component: Skill,
        name: "skill"
    },
    {
        path: "/contact",
        component: Contact,
        name: "contact"
    }
];

const Router = new VueRouter({ routes, mode: "history" });

export default Router;
