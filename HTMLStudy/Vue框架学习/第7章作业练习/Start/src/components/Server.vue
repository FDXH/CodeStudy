<template>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Servers #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '../main.js'

    export default {
        props:['server'],
        methods: {
            serverSelected: function() {
                eventBus.$emit('serverSeleted',this.server)
            }
        }
    }
</script>
