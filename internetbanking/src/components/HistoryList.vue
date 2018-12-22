<template>
<div id="History">
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Amount Money</th>
                    <th>Type Transection</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="history in transactionhistorys" v-bind:key="history.id">
                    <td>{{history.id}}</td>
                    <td>{{history.description}}</td>
                    <td>{{history.amountmoney | currency}}</td>
                    <td>{{history.typetransection}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <page-controls />
</div>
</template>

<script>
import { mapGetters } from "vuex";
import PageControls from "./PageControls";

export default {
    components: {
        PageControls
    },

    computed: {
        ...mapGetters({
            transactionhistorys: "processedHistorys"
        })
    }
}
</script>

<style scope>
#History{
    border: solid 5px black
}
</style>
