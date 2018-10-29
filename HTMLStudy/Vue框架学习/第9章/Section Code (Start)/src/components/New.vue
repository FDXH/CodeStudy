<template>
    <div>
        <h3>The New</h3>
        <button @click="counter++">counter</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            };
        },
        destroyed(){
            console.log("des")
        },
        deactivated() {
            console.log('Deactivatd');  
        },
        activated() {
            console.log('activated');
        },
    }
</script>

<style scoped>

</style>