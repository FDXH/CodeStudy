<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ ownerStock.name }}
                    <small>(Price: {{ ownerStock.price }} | Quantity: {{ ownerStock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model.number="quantity"
                        :class="{ danger: quantity > ownerStock.quantity }">
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success"
                        @click="sellStock"
                        :disabled="quantity > ownerStock.quantity || quantity <= 0 || !Number.isInteger(quantity)">
                        {{ quantity > ownerStock.quantity? "Insufficient" : "Sell" }}
                        </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props: ['ownerStock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            sellStock() {
                const order = {
                    stockId: this.ownerStock.id,
                    stockName: this.ownerStock.name,
                    stockPrice: this.ownerStock.price,
                    quantity: this.quantity
                };
                this.$store.commit('sellStock',order);
                this.quantity = 0;
            }
        }
    }
</script>