import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        home: [],
        service: []
    },
    getters: {
        GET_HOME_CONTENT(state) {
            return state.home;
        },
        GET_SERVICE_CONTENT(state) {
            return state.service;
        }
    },

    actions: {
        GET_ALL_HOME_CONTENT_FROM_SERVER(store) {
            axios.get("/api/admin/home").then(res => {
                store.commit("getHomeContent", res.data);
            });
        },
        GET_ALL_SERVICE_SECTION_CONTENT_FROM_SERVER(store) {
            axios.get("/api/admin/service").then(res => {
                store.commit("getServiceContent", res.data);
            });
        }
    },
    mutations: {
        getHomeContent(state, data) {
            state.home = data;
        },
        getServiceContent(state, data) {
            state.service = data;
        }
    }
});

export default store;
