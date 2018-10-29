<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server {{ server.id }} selected. Status: {{ server.status }}</p>
        <button @click="changeServer">Change Server</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'

    export default {
        data: function() {
            return {
                server: null
            };
        },
        methods:{
           changeServer: function() {
               this.server.status = 'normal';
           }
        },
        created() {
            eventBus.$on('serverSeleted', (server) => {
                this.server = server;
            })
        },  
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>