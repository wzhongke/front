<template>
    <div class="">
        <!--<img src="./assets/logo.png">-->
        <!--<router-view></router-view>-->

        <umis-header></umis-header>
        <umis-aside></umis-aside>
        <umis-main></umis-main>
    </div>
</template>

<script>
    import umisHeader from './components/umisHeader'
    import umisAside from './components/umisAside'
    import umisMain from './components/umisMain'
    export default {
        name: 'app',
        components: {umisHeader, umisAside, umisMain}
    }
</script>


