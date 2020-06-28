import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        home: []
    },
    getters: {
        GET_HOME_CONTENT(state) {
            return state.home;
        }
    },

    actions: {
        GET_ALL_HOME_CONTENT_FROM_SERVER(store) {
            axios.get("/api/admin/home").then(res => {
                store.commit("getHomeContent", res.data);
            });
        }
    },
    mutations: {
        getHomeContent(state, data) {
            state.home = data;
        }
    }
});

export default store;
