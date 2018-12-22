import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../components/Store";
import Transfer from "../components/Transfer";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",

    routes: [{
            path: "/",
            component: Store
        },
        {
            path: "/transfer",
            component: Transfer
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
})