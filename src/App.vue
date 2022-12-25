<script>
import Navbar from './components/navbar/navbar.vue'
export default {
    components: { Navbar },
    setup() {
    }
}
</script>

<template>
    <Navbar />
    <div style="margin-top:60px;">
        <router-view />
    </div>
</template>

<style>
@font-face {
    font-family: "ggst-text";
    src: url("../public/fonts/text.ttf");
}
</style>