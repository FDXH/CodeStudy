<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-detail></app-server-detail>
        </div>
        <hr>
        <app-footer></app-footer>
        
    </div>
</template>

<script>
    import ServerDetail from './components/ServerDetail.vue'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Servers from './components/Servers.vue'

    export default{
        components: {
            'app-header': Header,
            'app-servers': Servers,
            'app-server-detail': ServerDetail,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
