import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import TransferModule from "./transfer";


Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const payaccountsUrl = `${baseUrl}/payaccounts`;
const transactionhistorysUrl = `${baseUrl}/transactionhistorys`;


export default new Vuex.Store({
    strict: true,

    modules: { transfer: TransferModule },

    state: {
        transactionhistorys: [],
        payaccountsData: [],
        historysTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentPayAccount: "All"
    },

    getters: {
        HistorysFilteredByPayAccount: state => state.transactionhistorys
            .filter(p => state.currentPayAccount
                 == "All" || p.payaccountid == state.currentPayAccount),

        processedHistorys: (state, getters) => {
            let index = (state.currentPage - 1) * state.pageSize;
            return getters.HistorysFilteredByPayAccount
                .slice(index, index + state.pageSize);
        },

        pageCount: (state, getters) =>
            Math.ceil(getters.HistorysFilteredByPayAccount.length / state.pageSize),

        payaccounts: state => [...state.payaccountsData]
    },

    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentPayAccount(state, payaccount) {
            state.currentPayAccount = payaccount;
            state.currentPage = 1;
        },
        setData(state, data) {
            state.transactionhistorys = data.pdata;
            state.historysTotal = data.pdata.length;
            state.payaccountsData = data.cdata.sort();
        }
    },

    actions: {
        async getData(context) {
            let pdata = (await Axios.get(transactionhistorysUrl)).data;
            let cdata = (await Axios.get(payaccountsUrl)).data;
            context.commit("setData", {
                pdata,
                cdata
            });
        }
    }
})