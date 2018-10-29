<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <appServer
                v-for="server in servers" v-bind:key="server"
                :server="server">
            </appServer>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'
    import { eventBus } from '../main.js'

    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critucal'},
                    {id: 3, status: 'Unkonwn'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Critucal'},
                ]
            }
        },
        components: {
            appServer: Server,
        }
    }
</script>
<style scoped>
    div {
        border: 1px solid blue;
    }
</style>