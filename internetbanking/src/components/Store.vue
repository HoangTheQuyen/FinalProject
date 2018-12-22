<template>
<div class="container-fluid">
    <div class="row">
        <div class="col bg-dark text-white">
            <a class="navbar-brand">INTERNET BANKING</a>
        </div>
    </div>
    <div class="row">
        <div class="col-4 bg-light p-2">
            <pay-account-controls/>
        </div>
        <div class="col-8 bg-light p-2">
            <history-list/>
        </div>
    </div>
</div>
</template>

<script>
import HistoryList from "./HistoryList";
import PayAccountControls from "./PayAccountControls";

export default {
    components: { HistoryList , PayAccountControls}
}
</script>

