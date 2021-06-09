import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false
    },
    mutations: {
        SET_IS_LOGGED_IN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        }
    },
    actions: {
        setIsLoggedIn(context, isLoggedIn) {
            context.commit('SET_IS_LOGGED_IN', isLoggedIn);
        }
    }
});