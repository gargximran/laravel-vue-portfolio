import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () =>
            import(/* webpackChunkName: "Homepage" */ "./components/Homepage"),
        name: "home"
    },
    {
        path: "/portfolio",
        component: () =>
            import(
                /* webpackChunkName: "Portfolio" */ "./components/Portfolio"
            ),
        name: "portfolio"
    },
    {
        path: "/services",
        component: () =>
            import(/* webpackChunkName: "Service" */ "./components/Service"),
        name: "service"
    },
    {
        path: "/skills",
        component: () =>
            import(/* webpackChunkName: "Skills" */ "./components/Skills"),
        name: "skill"
    },
    {
        path: "/contact",
        component: () =>
            import(/* webpackChunkName: "Contact" */ "./components/Contact"),
        name: "contact"
    }
];

const Router = new VueRouter({ routes, mode: "history" });

export default Router;
