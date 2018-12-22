import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../components/Store";
import Transfer from "../components/Transfer";

import WelcomePage from '../components/welcome/welcome'
import DashboardPage from '../components/dashboard/dashboard'
import SignupPage from '../components/auth/signup'
import SigninPage from '../components/auth/signin'

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",

    routes: [{
            path: '/',
            component: WelcomePage
        },
        {
            path: '/signup',
            component: SignupPage
        },
        {
            path: '/signin',
            component: SigninPage
        },
        {
            path: '/dashboard',
            component: DashboardPage
        }
    ]
})