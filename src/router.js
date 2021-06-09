import Vue from "vue";
import Router from "vue-router";
import listsPage from './views/listsPage';
import Home from './views/Home';
import profilePage from './views/ProfilePage';
import permissionsPage from './views/PermissionsPage';

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
        },
        {
            path: '/profile/:id',
            name: "ProfilePage",
            component: profilePage
        },
        {
            path: '/permissions',
            name: "PermissionsPage",
            component: permissionsPage
        }
    ]
});