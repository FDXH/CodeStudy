<template>
    <div>
        <app-stock v-for="ownerStock in ownerStocks" :key="ownerStock" :ownerStock="ownerStock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        computed: {
            ownerStocks() {
                return this.$store.getters.ownerStocks;
            }
        },
        components: {
            appStock: Stock
        }        
    }
</script>


