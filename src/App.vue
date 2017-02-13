<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
h1 {font-weight:normal;}
.logo {height:105px;margin-top:70px;}
</style>

<template>
    <div id="app">
        <navbar></navbar>
        <img class="logo" src="./assets/logo.gif">

        <router-view class="view"></router-view>
    </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {navbar}
}
</script>

