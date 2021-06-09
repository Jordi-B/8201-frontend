import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        isManager: false
    },
    mutations: {
        SET_IS_LOGGED_IN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
        SET_IS_MANAGER(state, isManager){
            state.isManager = isManager;
        }
    },
    actions: {
        setIsLoggedIn(context, isLoggedIn) {
            context.commit('SET_IS_LOGGED_IN', isLoggedIn);
        },
        setIsManager(context, isManager) {
            context.commit('SET_IS_MANAGER', isManager);
        }
    }
});