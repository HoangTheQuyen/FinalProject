<template>
<div class="container-fluid" id="PayAccount">
    <div class="row my-2" v-for="pay in payaccounts" v-bind:key="pay.id">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button class="btn btn-block" style="border: solid 2px black"
                        v-on:click="setCurrentPayAccount(pay.id)"
                        v-bind:class="pay.id == currentPayAccount
                        ? 'btn-primary' : 'btn-secondary'">
                            <span class="fas fa-user-cog" style="color: red;"></span>
                                Account Number: {{ pay.accountnumber }} 
                            <br/>
                            <span class="fas fa-money-bill" style="color: red;"></span> 
                                submoney: {{pay.submoney || currency}}
                     </button>
                    </td>
                    <td>
                        <button class="btn btn-block btn-primary" v-on:click="handleTransfer(pay)">
                            transfer
                        </button>
                        <button class="btn btn-block btn-danger">
                            Delete
                        </button>
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from "vuex";

export default {
    computed: {
        ...mapState(["currentPayAccount"]),
        ...mapGetters(["payaccounts"])
    },
    methods: {
        ...mapMutations(["setCurrentPayAccount"]),
        ...mapMutations({
            addTransfer: "transfer/addTransfer"
        }),

        handleTransfer(pay) {
            this.addTransfer(pay);
            this.$router.push("/transfer");
        }
    }
}
</script>

<style>
#PayAccount {
    border: solid 5px black;
    background-color: #e6e6e6;
}
</style>
