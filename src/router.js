import Vue from "vue";
import Router from "vue-router";
import listsPage from './views/listsPage';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/lists',
            name: "listsPage",
            component: listsPage
        },
        {
            path: '/',
            name: "Home",
            component: Home
        }
    ]
});