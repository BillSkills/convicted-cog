<script>
import NavbarLink from './NavbarLink.vue'

export default {
    props: {},
    components: { NavbarLink },
    setup() {
    }
}
</script>

<template>
    <div class="navbar">
        <div id="title">CONVICTED COG</div>
        <NavbarLink to="/convicted-cog/" icon="fa-solid fa-house">HOME</NavbarLink>
        <NavbarLink to="/convicted-cog/bracket" icon="fa-solid fa-trophy">BRACKET</NavbarLink>
        <NavbarLink to="/convicted-cog/matches" icon="fa-solid fa-scale-unbalanced">MATCHES</NavbarLink>
        <NavbarLink to="/convicted-cog/players" icon="fa-solid fa-user-group">PLAYERS</NavbarLink>
        <NavbarLink to="/convicted-cog/busters" icon="fa-solid fa-hand-fist">BUSTERS</NavbarLink>
        <NavbarLink to="/convicted-cog/about" icon="fa-solid fa-circle-question">ABOUT</NavbarLink>
    </div>
</template>

<style>
@font-face {
    font-family: "ggst-title";
    src: url("../../../public/fonts/title.otf");
}

:root {
    --navbar-bg-color: #212121;
    --navbar-item-hover: #383838;
    --navbar-item-active: #c00000;
}
</style>

<style scoped>
.navbar {
    background-color: var(--navbar-bg-color);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

#title {
    font-family: ggst-title;
    float: left;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
    margin: 7px 15px;
    font-size: 31px;
}
</style>