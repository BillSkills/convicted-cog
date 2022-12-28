<script>
import Navbar from './components/navbar/Navbar.vue'
export default {
    components: { Navbar },
    setup() {
    }
}
</script>

<template>
    <Navbar />
    <div style="margin-top: 45px">
        <router-view />
    </div>
</template>

<style>

</style>