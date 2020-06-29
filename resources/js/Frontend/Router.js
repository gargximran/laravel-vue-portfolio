import Vue from "vue";
import VueRouter from "vue-router";

import Homepage from "./components/Homepage";

const Portfolio = () => {
    return import(/* webpackChunkName: "Portfolio" */ "./components/Portfolio");
};
const Service = () => {
    return import(/* webpackChunkName: "Service" */ "./components/Service");
};

const Skills = () => {
    return import(/* webpackChunkName: "Skills" */ "./components/Skills");
};

const Contact = () => {
    return import(/* webpackChunkName: "Contact" */ "./components/Contact");
};

Vue.use(VueRouter);

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
        component: Skills,
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
