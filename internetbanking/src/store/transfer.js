import Axios from "axios";
const baseUrl = "http://localhost:3500";
const payaccountsUrl = `${baseUrl}/payaccounts`;

export default {
    namespace: true,

    strict: true,

    state: {
        CurrenPayAccount: {}
    },

    getters: {

    },

    mutations: {
        setCurrenPayAccount(state, payaccount) {
            state.CurrenPayAccount = payaccount;
        },
        setData(state, data) {
            state.CurrenPayAccount = data.cdata.CurrenPayAccount();
        }
    },

    actions:{
        async getPayAccountData(context) { 
            let data = (await Axios.get(`${payaccountsUrl}/${CurrenPayAccount}`)).data;

            context.commit("setData", {
                data
            });
        }
    }
}